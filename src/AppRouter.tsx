// import { lazy } from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import { ErrorBoundary } from './ErrorBoundary';

// const Foo = lazy(() => import('./Foo'));

export const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorBoundary fallback={<h1>Error Caught by Router Error Boundary</h1>} onError={(error) => console.log(error.message)} />,
    children: [
      {
        path: 'foo',
        element: <h1>Old foo is gone</h1>,
      },
    ],
  },
];

export const browserRouter = createBrowserRouter(routes);
export type IRouter = typeof browserRouter;

// Give me a docker command to run a docker container with node 18 image and serve the index.html file under dist/apps/kernel/management-shell-browser folder
