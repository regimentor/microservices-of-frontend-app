import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('.//Home'));
const About = lazy(() => import('.//About'));
const Users = lazy(() => import('.//Users'));

export const IndexPage = () => (
  <Suspense fallback={<div>Loading</div>}>
    <Home />
  </Suspense>
);
export const AboutPage = () => (
  <Suspense fallback={<div>Loading</div>}>
    <About />
  </Suspense>
);
export const UsersPage = () => (
  <Suspense fallback={<div>Loading</div>}>
    <Users />
  </Suspense>
);
