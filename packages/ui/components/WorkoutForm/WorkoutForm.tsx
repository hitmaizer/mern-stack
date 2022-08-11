import { useState } from 'react';

import * as S from './WorkoutForm.styles';
import { WorkoutFormProps } from './WorkoutForm.types';

const WorkoutForm = ({ children, ...rest }: WorkoutFormProps) => {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState(0);
  const [reps, setReps] = useState(0);

  return (
    <>
      <S.WorkoutForm {...rest}>{children}</S.WorkoutForm>
    </>
  );
};

export default WorkoutForm;
