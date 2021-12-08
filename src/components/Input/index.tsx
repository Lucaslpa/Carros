import * as S from './style';

export type props = {
  name: string;
  placeholder: string;
  type: 'text' | 'password' | 'email';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  value?: string;
};

export const Input = ({
  name,
  placeholder,
  type,
  onChange,
  error = false,
  value = '',
}: props) => {
  return (
    <S.InputContainer>
      <S.Label htmlFor={name}>{name}</S.Label>
      <S.Input
        error={error}
        onChange={(e) => onChange(e)}
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
      />
    </S.InputContainer>
  );
};
