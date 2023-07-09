import { Navigate, Outlet } from 'react-router-dom';
import { FC } from 'react';

import { Wrapper } from '@/components/container';

interface ProtectedLayoutProps {
  isAuth: boolean;
}
const Layout: FC<ProtectedLayoutProps> = ({ isAuth }) => {
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return <Wrapper outlet={<Outlet />} />;
};
export default Layout;
