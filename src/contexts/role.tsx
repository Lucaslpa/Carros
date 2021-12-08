import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

const RoleContext = createContext<{
  role: string[];
  setRole: Dispatch<SetStateAction<string[]>>;
}>({ role: [''], setRole: () => {} });

export const RoleProvider = ({ children }: { children: any }) => {
  const [role, setRole] = useState<string[]>(['']);
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRoleProvider = () => useContext(RoleContext);
