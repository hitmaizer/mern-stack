import { useState } from 'react';

import Router from 'next/router';
import { useLogin } from 'src/hooks/useLogin';

import * as S from './LoginForm.styles';
import { LoginFormProps } from './LoginForm.types';

const LoginForm = ({ children, ...rest }: LoginFormProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login(email, password);
    Router.push('/');
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
      <button type="submit" disabled={isLoading}>
        Log in
      </button>
      {error && <div className="error">{error}</div>}
      {children}
    </S.LoginForm>
  );
};

export default LoginForm;
