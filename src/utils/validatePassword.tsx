function has3Chars(password: string): boolean {
  return password.length >= 3;
}

export const ValidatePassword = (password: string) => {
  if (!has3Chars(password)) {
    return 'Senha deve ter pelo menos 3 caracteres';
  }
  return null;
};
