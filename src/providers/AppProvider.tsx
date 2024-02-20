import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Spinner } from '@/features/misc';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner />
        </div>
      }
    >
      <BrowserRouter>{children}</BrowserRouter>
    </React.Suspense>
  );
};
