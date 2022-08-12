import Link from 'next/link';

import { SignupForm } from '@components';
import { Logo, Navbar } from '@ui';

const index = () => {
  return (
    <>
      <Navbar>
        <Link href="/">
          <Logo>Workout Buddy</Logo>
        </Link>
      </Navbar>
      <SignupForm />
    </>
  );
};

export default index;
