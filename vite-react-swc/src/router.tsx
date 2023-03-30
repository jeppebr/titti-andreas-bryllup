import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorPage from './pages/error-page';
import { Gallary } from './pages/gallary';
import { Home } from './pages/home';
import { Hotels } from './pages/hotels';
import { Introduction } from './pages/introduction';
import { Program } from './pages/program';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/introduction', element: <Introduction /> },
      { path: '/program', element: <Program /> },
      { path: '/hotels', element: <Hotels /> },
      { path: '/gallary', element: <Gallary /> },
    ],
  },
]);
