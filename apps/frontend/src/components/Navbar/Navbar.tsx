import Link from 'next/link';
import { useAuthContext } from 'src/hooks/useAuthContext';
import { useLogout } from 'src/hooks/useLogout';

import { Logo, Stack } from '@ui';

import * as S from './Navbar.styles';
import { NavbarProps } from './Navbar.types';

const Navbar = ({ children, ...rest }: NavbarProps) => {
  const { logout } = useLogout();
  const { user }: any = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <S.Navbar {...rest}>
      <S.Container>
        <Link href="/">
          <Logo>Workout Buddy</Logo>
        </Link>
        <nav>
          {user && (
            <Stack display="flex" gridGap="8px" alignItems="center">
              <span>{user.email}</span>
              <S.LogoutBtn type="button" onClick={handleClick}>
                Log out
              </S.LogoutBtn>
            </Stack>
          )}
          {!user && (
            <Stack display="flex" gridGap="8px">
              <Link href="/login">Login</Link>
              <Link href="/signup">Signup</Link>
            </Stack>
          )}
        </nav>
        {children}
      </S.Container>
    </S.Navbar>
  );
};

export default Navbar;
