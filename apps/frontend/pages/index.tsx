/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';

import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { useWorkoutsContext } from 'src/hooks/useWorkoutsContext';

import { WorkoutForm } from '@components';
import { Grid, Logo, Navbar, Stack, Workouts } from '@ui';

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

  return (
    <div>
      <Navbar>
        <Link href="/">
          <Logo>Workout Buddy</Logo>
        </Link>
      </Navbar>
      {workouts && (
        <>
          <Grid>
            <Stack display="flex" vertical>
              {workouts.map((workout: Workout) => {
                return (
                  <Workouts
                    key={workout._id}
                    title={workout.title}
                    load={workout.load}
                    reps={workout.reps}
                    created={workout.createdAt}
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
