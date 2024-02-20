import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { Dashboard } = lazyImport(() => import('@/features/dashboard'), 'Dashboard');

const App = () => {
  return <Outlet />;
};

export const AppRoutes = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '*', element: <Navigate to="." /> },
      ],
    },
  ]);

  return element;
};
