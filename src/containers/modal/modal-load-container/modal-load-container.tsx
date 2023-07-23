import { FC, memo } from 'react';

import ModalLoad from '../../../components/modal/modal-load/modal-load.tsx';
import ModalAnimationContainer from '../modal-animation-container/modal-animation-container.tsx';

interface ModalLoadContainerProps {
  isOpen: boolean;
  onClose: () => void;
}
const ModalLoadContainer: FC<ModalLoadContainerProps> = memo(({ isOpen, onClose }) => (
  <ModalAnimationContainer isOpen={isOpen} onClose={onClose}>
    <ModalLoad onClose={onClose} />
  </ModalAnimationContainer>
));

export default ModalLoadContainer;
