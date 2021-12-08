import * as S from './style';

export const Modal = ({
  message = '',
  closeModal,
}: {
  message: string;
  closeModal: () => void;
}) => {
  return (
    <S.Container>
      <S.Modal>
        <strong>{message}</strong>
        <span onClick={closeModal}> OK </span>
      </S.Modal>
    </S.Container>
  );
};
