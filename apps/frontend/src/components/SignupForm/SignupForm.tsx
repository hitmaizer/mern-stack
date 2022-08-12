import { useState } from 'react';

import * as S from './SignupForm.styles';
import { SignupFormProps } from './SignupForm.types';

const SignupForm = ({ children, ...rest }: SignupFormProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.SignupForm onSubmit={handleSubmit} {...rest}>
      <S.Title>Sign Up</S.Title>
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
      <button type="submit">Sign Up</button>
      {children}
    </S.SignupForm>
  );
};

export default SignupForm;
