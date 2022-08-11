import * as S from './Logo.styles';
import { LogoProps } from './Logo.types';

const Logo = ({ children, ...rest }: LogoProps) => {
  return (
    <>
      <S.Logo {...rest}>{children}</S.Logo>
    </>
  );
};

export default Logo;
