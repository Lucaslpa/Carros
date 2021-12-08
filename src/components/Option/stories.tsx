import { Option } from './index';
import { AppIndicator } from '@styled-icons/bootstrap';

export default {
  title: 'Option',
  component: Option,
};

export const Default = () => <Option Img={AppIndicator} text="nome" />;
