import Link from 'next/link';

import { Logo, Stack } from '@ui';

import * as S from './Navbar.styles';
import { NavbarProps } from './Navbar.types';

const Navbar = ({ children, ...rest }: NavbarProps) => {
  return (
    <S.Navbar {...rest}>
      <S.Container>
        <Link href="/">
          <Logo>Workout Buddy</Logo>
        </Link>
        <nav>
          <Stack display="flex" gridGap="8px">
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
          </Stack>
        </nav>
        {children}
      </S.Container>
    </S.Navbar>
  );
};

export default Navbar;
