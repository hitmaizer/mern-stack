import { useState } from 'react';

import * as S from './LoginForm.styles';
import { LoginFormProps } from './LoginForm.types';

const LoginForm = ({ children, ...rest }: LoginFormProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.LoginForm onSubmit={handleSubmit} {...rest}>
      <S.Title>Log in</S.Title>
      <label htmlFor="email">
        Email
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
        />
      </label>
      <button type="submit">Log in</button>
      {children}
    </S.LoginForm>
  );
};

export default LoginForm;
