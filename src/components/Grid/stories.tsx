import { Grid } from '.';
import { vehicles } from 'mock/vehicles';

export default {
  title: 'Grid',
  component: Grid,
  args: {
    vehicles: vehicles,
    to: '/',
  },
};

export const Default = (args: any) => <Grid {...args} />;
