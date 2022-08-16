/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';

import type { NextPage } from 'next';
import Router from 'next/router';
import { useAuthContext } from 'src/hooks/useAuthContext';
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

const Home: NextPage = () => {
  const { workouts, dispatch }: any = useWorkoutsContext();
  const { user }: any = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const req = await fetch('http://localhost:4000/api/workouts', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const allWorkouts = await req.json();

      if (req.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: allWorkouts });
      }
    };

    if (user) {
      fetchWorkouts();
    } else {
      Router.push('/login');
    }
  }, [dispatch, user]);

  const handleClick = async (workout: Workout) => {
    if (!user) {
      return;
    }

    const res = await fetch(
      `http://localhost:4000/api/workouts/${workout._id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await res.json();

    if (res.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
    }
  };

  return (
    <div>
      {user && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Home;
