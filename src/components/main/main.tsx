import { FC, ReactElement } from 'react';

import { Container } from '@/components/content';

interface MainProps {
  children: ReactElement;
}
const Main: FC<MainProps> = ({ children }) => (
  <main className="grow">
    <Container>{children}</Container>
  </main>
);

export default Main;
