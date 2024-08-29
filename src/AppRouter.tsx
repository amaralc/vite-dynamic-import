import { lazy } from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Home } from './Home';

const Foo = lazy(() => import('./Foo'));

export const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Home />,
    // errorElement: <ErrorBoundary fallback={<h1>Router Error Boundary</h1>} />,
    children: [
      {
        path: 'foo',
        element: <Foo />,
      },
    ],
  },
];

export const browserRouter = createBrowserRouter(routes);
export type IRouter = typeof browserRouter;

// Give me a docker command to run a docker container with node 18 image and serve the index.html file under dist/apps/kernel/management-shell-browser folder
