/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';

import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { Navbar, Stack, Workouts } from '@ui';

export interface Workout {
  title: string;
  reps: number;
  load: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

const Home: NextPage = ({ allWorkouts }: any) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    setWorkouts(allWorkouts);
  }, []);
  console.log(workouts);
  return (
    <div>
      <Navbar>
        <Link href="/">
          <h1>Workout Buddy</h1>
        </Link>
      </Navbar>
      {workouts && (
        <>
          <Stack display="flex">
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
