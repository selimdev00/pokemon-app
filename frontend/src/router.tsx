import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from './views/Home/Home';
import About from './views/About/About';
import Catalog from './views/Catalog/Catalog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/catalog',
    children: [
      {
        path: ':page',
        element: <Catalog />,
      },
    ],
  },

  {
    path: '/about',
    element: <About />,
  },
]);

export default router;
