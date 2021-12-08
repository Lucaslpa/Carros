import * as S from './style';
import { Alarm } from '@styled-icons/bootstrap/';

export const Option = ({
  Img,
  text,
  to = '',
}: {
  Img?: typeof Alarm;
  text: string;
  to?: string;
}) => {
  return (
    <S.Container to={`/${to}`}>
      {Img && <Img />}
      <span>{text}</span>
    </S.Container>
  );
};
