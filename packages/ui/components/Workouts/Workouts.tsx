import * as S from './Workouts.styles';
import { WorkoutsProps } from './Workouts.types';

const Workouts = ({
  children,
  title,
  load,
  reps,
  created,
  ...rest
}: WorkoutsProps) => {
  return (
    <>
      <S.Workouts {...rest}>
        <S.Title>{title}</S.Title>
        <h3>
          <strong>Load(kg): </strong>
          {load}
        </h3>
        <h3>
          <strong>Reps: </strong>
          {reps}
        </h3>
        <p>{created}</p>
        {children}
      </S.Workouts>
    </>
  );
};

export default Workouts;
