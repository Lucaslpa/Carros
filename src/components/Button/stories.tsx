import { ButtonCustom, props } from './index';
import { Story } from '@storybook/react';

export default {
  title: 'ButtonCustom',
  component: ButtonCustom,
};

export const Default: Story<props> = (args) => (
  <ButtonCustom {...args}>Hello</ButtonCustom>
);
