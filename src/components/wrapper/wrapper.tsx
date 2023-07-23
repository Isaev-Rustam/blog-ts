import { FC, ReactElement } from 'react';

import { Header } from '@/components/header';
import { Main } from '@/components/main';

interface WrapperProps {
  outlet: ReactElement;
}
const Wrapper: FC<WrapperProps> = ({ outlet: Outlet }) => (
  <div className="h-screen flex flex-col">
    <Header />
    <Main>{Outlet}</Main>
    <div className="bg-amber-300">
      <div className="h-10 text-center">footer</div>
    </div>
  </div>
);

export default Wrapper;
