/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { formatDistanceToNow } from 'date-fns';

import * as S from './Workouts.styles';
import { WorkoutsProps } from './Workouts.types';

const Workouts = ({ children, data, handleClick, ...rest }: WorkoutsProps) => {
  return (
    <>
      <S.Workouts {...rest}>
        <S.Title>{data?.title}</S.Title>
        <h3>
          <strong>Load(kg): </strong>
          {data?.load}
        </h3>
        <h3>
          <strong>Reps: </strong>
          {data?.reps}
        </h3>
        <p>
          {formatDistanceToNow(new Date(data.createdAt), { addSuffix: true })}
        </p>
        <span onClick={() => handleClick(data!)}>delete</span>
        {children}
      </S.Workouts>
    </>
  );
};

export default Workouts;
