import { FC, memo, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import ModalAnimationContainer from '../modal-animation-container/modal-animation-container.tsx';

import { contentAnimation } from '@/components/modal/animation-style/modal-transition.ts';
import { ModalLoad } from '@/components/modal';
import { Portal } from '@/containers/modal';

export const ANIMATION_TIME = 1300;

interface ModalLoadContainerProps {
  opened: boolean;
  onClose: () => void;
}

interface UseAnimationIn {
  opened: boolean;
}
const useAnimationIn = ({ opened }: UseAnimationIn) => {
  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => {
    setAnimationIn(true);
  }, [opened]);

  return { animationIn };
};
interface FProps {
  opened: boolean;
  onClose: () => void;
}
const F: FC<FProps> = ({ onClose, opened }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => {
    setAnimationIn(true);
  }, [opened]);

  console.log(contentAnimation);
  return (
    <Portal>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <ModalLoad onClose={onClose} ref={contentRef} />
      </CSSTransition>
    </Portal>
  );
};

const ModalLoadContainer: FC<ModalLoadContainerProps> = memo(({ opened, onClose }) => (
  <ModalAnimationContainer opened={opened}>
    <F onClose={onClose} opened={opened} />
  </ModalAnimationContainer>
));

export default ModalLoadContainer;
