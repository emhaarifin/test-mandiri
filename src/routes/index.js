import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Layouts = lazy(() => import('../layouts/default'));
const PageHome = lazy(() => import('../pages/Home'));
const PageCoinList = lazy(() => import('../pages/CoinList'));
const PageCoinDetail = lazy(() => import('../pages/CoinDetail'));
const pages = () => {
  return (
    <Suspense fallback={<></>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layouts />}>
            <Route index element={<PageHome />} />
            <Route path='coin-list'>
              <Route index element={<PageCoinList />} />
              <Route path=':id' element={<PageCoinDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default pages;
