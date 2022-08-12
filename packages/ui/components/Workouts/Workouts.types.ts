import { ReactNode } from 'react';

export interface Workout {
  title: string;
  reps: number;
  load: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
export interface WorkoutsProps {
  children?: ReactNode;
  title?: string;
  load?: number;
  reps?: number;
  created?: string;
  handleClick: (a: Workout) => void;
  data?: Workout;
}
