import { MainHeader } from '@/components/Header';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};
