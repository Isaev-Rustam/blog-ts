import { FC, ReactElement } from 'react';

import { useMount } from '@/hooks/use-mount.tsx';

interface ModalAnCnProps {
  opened: boolean;
  children: ReactElement;
}
const ModalAnimationContainer: FC<ModalAnCnProps> = ({ children, opened }) => {
  const { mounted } = useMount({ opened });
  console.log('mounted', mounted);

  if (!mounted) {
    return null;
  }
  return children;
};

export default ModalAnimationContainer;
