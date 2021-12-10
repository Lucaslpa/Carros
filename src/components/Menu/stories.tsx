import { Menu } from './index';
import { client } from 'mock/client';

export default {
  title: 'Menu',
  component: Menu,
};

export const User = (args: any) => <Menu {...args} isUser={true} />;
export const Adm = (args: any) => (
  <Menu {...args} isUser={false} client={client} />
);
