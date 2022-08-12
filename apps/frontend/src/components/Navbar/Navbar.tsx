import Link from 'next/link';

import { Logo } from '@ui';

import * as S from './Navbar.styles';
import { NavbarProps } from './Navbar.types';

const Navbar = ({ children, ...rest }: NavbarProps) => {
  return (
    <S.Navbar {...rest}>
      <S.Container>
        <Link href="/">
          <Logo>Workout Buddy</Logo>
        </Link>
        {children}
      </S.Container>
    </S.Navbar>
  );
};

export default Navbar;
