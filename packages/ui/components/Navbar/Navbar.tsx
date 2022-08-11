import * as S from './Navbar.styles';
import { NavbarProps } from './Navbar.types';

const Navbar = ({ children, ...rest }: NavbarProps) => {
  return (
    <S.Navbar {...rest}>
      <S.Container>{children}</S.Container>
    </S.Navbar>
  );
};

export default Navbar;
