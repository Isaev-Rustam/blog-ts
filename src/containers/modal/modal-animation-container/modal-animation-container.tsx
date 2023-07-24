import { FC, memo, ReactElement } from 'react';

import Portal from '../portal/portal.tsx';

import { useMount } from '@/hooks/use-mount.tsx';
import { Layout } from '@/components/modal/l.tsx';

interface ModalAnimationContainerProps {
  isOpen: boolean;
  children: ReactElement;
  onClose: () => void;
}
const ModalAnimationContainer: FC<ModalAnimationContainerProps> = memo(
  ({ children, isOpen, onClose }) => {
    const { mount } = useMount(isOpen);
    if (!mount) {
      return null;
    }
    return (
      <Portal>
        <Layout onClose={onClose} opened={isOpen}>
          {children}
        </Layout>
      </Portal>
    );
  }
);

export default ModalAnimationContainer;
