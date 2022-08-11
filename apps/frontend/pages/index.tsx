import type { NextPage } from 'next';
import Link from 'next/link';

import { Navbar } from '@ui';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar>
        <Link href="/">
          <h1>Workout Buddy</h1>
        </Link>
      </Navbar>
    </div>
  );
};

export default Home;
