/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';

import type { GetStaticProps, NextPage } from 'next';
import { useWorkoutsContext } from 'src/hooks/useWorkoutsContext';

import { Navbar, WorkoutForm } from '@components';
import { Grid, Stack, Workouts } from '@ui';

export interface Workout {
  title: string;
  reps: number;
  load: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

const Home: NextPage = ({ allWorkouts }: any) => {
  const { workouts, dispatch }: any = useWorkoutsContext();

  useEffect(() => {
    dispatch({ type: 'SET_WORKOUTS', payload: allWorkouts });
  }, []);

  const handleClick = async (workout: Workout) => {
    const res = await fetch(
      `http://localhost:4000/api/workouts/${workout._id}`,
      {
        method: 'DELETE',
      }
    );
    const json = await res.json();

    if (res.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
    }
  };

  return (
    <div>
      <Navbar />
      {workouts && (
        <>
          <Grid>
            <Stack display="flex" vertical>
              {workouts.map((workout: Workout) => {
                return (
                  <Workouts
                    key={workout._id}
                    data={workout}
                    handleClick={handleClick}
                  />
                );
              })}
            </Stack>
            <WorkoutForm />
          </Grid>
        </>
      )}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const req = await fetch('http://localhost:4000/api/workouts');
  const allWorkouts = await req.json();

  return {
    props: {
      allWorkouts,
    },
  };
};
