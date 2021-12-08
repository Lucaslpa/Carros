import { Button } from './style';
import { Spinner } from '../spinner/style';

export type props = {
  children: string;
  color: 'light' | 'dark';
  size: 'medium' | 'large';
  loading: boolean;
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
};

export const ButtonCustom = ({
  color,
  size = 'medium',
  children,
  loading = false,
  onClick,
  type = 'button',
}: props) => {
  return (
    <Button type={type} onClick={onClick} color={color} size={size}>
      {loading ? <Spinner /> : children}
    </Button>
  );
};
