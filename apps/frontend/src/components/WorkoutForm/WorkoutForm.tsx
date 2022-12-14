import { useState } from 'react';

import { useAuthContext } from 'src/hooks/useAuthContext';
import { useWorkoutsContext } from 'src/hooks/useWorkoutsContext';

import * as S from './WorkoutForm.styles';
import { WorkoutFormProps } from './WorkoutForm.types';

const WorkoutForm = ({ children, ...rest }: WorkoutFormProps) => {
  const { dispatch }: any = useWorkoutsContext();
  const { user }: any = useAuthContext();
  const [title, setTitle] = useState<string>('');
  const [load, setLoad] = useState<string | number>(0);
  const [reps, setReps] = useState<string | number>(0);
  const [error, setError] = useState<string | null>('');
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in');
      return;
    }

    const workout = { title, load, reps };

    const res = await fetch('http://localhost:4000/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (res.ok) {
      setTitle('');
      setLoad('');
      setReps('');
      setError(null);
      setEmptyFields([]);
      dispatch({ type: 'CREATE_WORKOUT', payload: json });
    }
  };

  return (
    <>
      <S.WorkoutForm {...rest}>
        <form action="" onSubmit={handleSubmit}>
          <S.Title>Add a new Workout</S.Title>
          <label htmlFor="title">
            Excercise Title:
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className={emptyFields.includes('title') ? 'error' : ''}
            />
          </label>
          <label htmlFor="load">
            Load (KG):
            <input
              type="number"
              onChange={(e) => setLoad(e.target.value)}
              value={load}
              className={emptyFields.includes('load') ? 'error' : ''}
            />
          </label>
          <label htmlFor="reps">
            Reps :
            <input
              type="number"
              onChange={(e) => setReps(e.target.value)}
              value={reps}
              className={emptyFields.includes('reps') ? 'error' : ''}
            />
          </label>
          <button type="submit">Add Workout</button>
          {error && <S.Error>{error}</S.Error>}
        </form>
        {children}
      </S.WorkoutForm>
    </>
  );
};

export default WorkoutForm;
