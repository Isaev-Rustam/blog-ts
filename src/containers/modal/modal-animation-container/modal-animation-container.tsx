import { FC, memo, ReactElement } from 'react';

import OverlayingPopup from '../../../components/modal/overlaying-popap/overlaying-popap.tsx';
import Portal from '../portal/portal.tsx';

import { useMount } from '@/hooks/use-mount.tsx';

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
        <OverlayingPopup onClose={onClose}>{children}</OverlayingPopup>
      </Portal>
    );
  }
);

export default ModalAnimationContainer;
