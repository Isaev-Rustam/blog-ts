import { FC, ReactElement } from 'react';

import { Header } from '@/components/header';
import { Main } from '@/components/main';

interface WrapperProps {
  outlet: ReactElement;
}
const Wrapper: FC<WrapperProps> = ({ outlet: Outlet }) => (
  <div className="h-screen flex flex-col bg-dark-white">
    <Header />
    <Main>{Outlet}</Main>
  </div>
);

export default Wrapper;
