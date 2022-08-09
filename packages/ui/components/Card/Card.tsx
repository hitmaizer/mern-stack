import * as S from './Card.styles';
import { CardProps } from './Card.types';

const Card = ({ children, ...rest }: CardProps) => {
  return <S.Card {...rest}>{children}</S.Card>;
};

export default Card;
