import * as S from './Grid.styles';
import { GridProps } from './Grid.types';

const Grid = ({ children, ...rest }: GridProps) => {
  return <S.Grid {...rest}>{children}</S.Grid>;
};

export default Grid;
