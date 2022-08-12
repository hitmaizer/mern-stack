import Link from 'next/link';

import { LoginForm } from '@components';
import { Logo, Navbar } from '@ui';

const index = () => {
  return (
    <>
      <Navbar>
        <Link href="/">
          <Logo>Workout Buddy</Logo>
        </Link>
      </Navbar>
      <LoginForm />
    </>
  );
};

export default index;
