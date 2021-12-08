import { Menu } from './index';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    isUser: true,
  },
};

export const Default = (args: any) => <Menu {...args} />;
