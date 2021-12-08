import {
  HashRouter as Router,
  Route,
  Link,
  useParams,
  Routes as Switch,
} from 'react-router-dom';
import { Login } from 'pages/Login';
import { Carros } from 'pages/adm/carros';
import { ChangePassword } from 'pages/adm/changePassword';
import { Home } from 'pages/adm/home';
import { MyData } from 'pages/adm/myData';
import { AdmTemplate } from 'pages/adm/template';
import { ChangeCar } from 'pages/adm/changeCar';
import { useRoleProvider } from 'contexts/role';
import { CarView } from 'pages/user/CarView';
import { CarsList } from 'pages/user/CarsList';
import { getSession } from 'utils/session/getSession';
import { useEffect, useState } from 'react';

export function Routes() {
  const { role } = useRoleProvider();

  return (
    <Router>
      <Switch>
        <Route path="/" element={<Login />} />
        {(role[0] || getSession()?.client.roles[0]) === 'ROLE_ADMIN' && (
          <Route path="/" element={<AdmTemplate />}>
            <Route path="Cars" element={<Carros />} />
            <Route path="ChangeCar/:id" element={<ChangeCar />} />
            <Route path="ChangePassword" element={<ChangePassword />} />
            <Route path="Home" element={<Home />} />
            <Route path="MyData" element={<MyData />} />
            <Route path="ChangeCar" element={<ChangeCar />} />
          </Route>
        )}
        {(role[0] || getSession()?.client.roles[0]) === 'ROLE_USER' && (
          <>
            <Route path="/Cars" element={<CarsList />} />
            <Route path="/Car/:id" element={<CarView />}></Route>
          </>
        )}

        <Route path="*" element={<div>sadd</div>} />
      </Switch>
    </Router>
  );
}
