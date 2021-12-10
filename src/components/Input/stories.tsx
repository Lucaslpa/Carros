import { Input } from './index';

export default {
  title: 'Input',
  component: Input,
  args: {
    name: 'Senha',
    placeholder: 'Digite a senha',
    type: 'password',
    onChange: () => {},
  },
};

export const Default = (args: any) => <Input {...args} onChange={() => {}} />;
