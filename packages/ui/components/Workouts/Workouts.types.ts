import { ReactNode } from 'react';

export interface WorkoutsProps {
  children?: ReactNode;
  title?: string;
  load?: number;
  reps?: number;
  created?: string;
}
