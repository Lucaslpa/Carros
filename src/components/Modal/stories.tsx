import { Modal } from '.';

export default {
  title: 'modal',
  component: Modal,
  args: {
    message: 'Hello',
    closeModal: () => {},
  },
};

export const Default = (args: any) => <Modal {...args} />;
