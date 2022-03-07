import React, { Fragment, lazy } from 'react';
import { Outlet } from 'react-router-dom';
const Nav = lazy(() => import('./nav'));
const Footer = lazy(() => import('./footer'));
const Layouts = () => {
  return (
    <Fragment>
      <Nav />
      <main className='pt-4 pb-14'>
        <section className='container mx-auto'>
          <Outlet />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layouts;
