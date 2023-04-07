import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';

import Home from './views/Home/Home';
import About from './views/About/About';
import Catalog from './views/Catalog/Catalog';
import NotFound from './views/NotFound';
import Search from './views/Search/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/catalog',
    loader: () => {
      return redirect('/catalog/1');
    },
  },
  { path: '/catalog/:page', element: <Catalog /> },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
