// import { lazy } from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import { ErrorBoundary as GlobalErrorBoundary } from './ErrorBoundary';

export const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Home />,
    hasErrorBoundary: true,
    ErrorBoundary: GlobalErrorBoundary,
    children: [
      {
        path: 'foo',
        async lazy() {
          const { ErrorBoundary, Foo} = await import('./Foo');
          return {
            Component: Foo,
            ErrorBoundary
          }
        }
      },
    ],
  },
];

export const browserRouter = createBrowserRouter(routes);
export type IRouter = typeof browserRouter;

// Give me a docker command to run a docker container with node 18 image and serve the index.html file under dist/apps/kernel/management-shell-browser folder
