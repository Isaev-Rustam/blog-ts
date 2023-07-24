import { cloneElement, FC, ReactElement, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './styles.module.css';
import animationStyles from './animation.module.css';

import OverlayingPopup from '@/components/modal/overlaying-popap/overlaying-popap.tsx';
import ModalLoad from '@/components/modal/modal-load/modal-load.tsx';

const overlayAnimation = {
  enter: animationStyles.overlayEnter,
  enterActive: animationStyles.overlayEnterActive,
  exit: animationStyles.overlayExit,
  exitActive: animationStyles.overlayExitActive,
};

const contentAnimation = {
  enter: animationStyles.contentEnter,
  enterActive: animationStyles.contentEnterActive,
  exit: animationStyles.contentExit,
  exitActive: animationStyles.contentExitActive,
};

interface IA {
  onClose: () => void;
  children: ReactElement;
  opened: boolean;
  className: string;
}
const A: FC<IA> = ({ opened, children, onClose, className }) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  return (
    <CSSTransition
      in={animationIn}
      nodeRef={ref}
      timeout={1500}
      mountOnEnter
      unmountOnExit
      classNames={overlayAnimation}
    >
      {cloneElement(children, { ref, className, onClose })}
    </CSSTransition>
  );
};

export const Layout = ({ onClose, children, opened }) => {
  const contentRef = useRef();

  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  return (
    <A onClose={onClose} opened={animationIn} className={styles.overlay}>
      <OverlayingPopup>
        <A onClose={onClose} opened={animationIn} className={styles.content}>
          <ModalLoad />
        </A>
      </OverlayingPopup>
    </A>
    // <div className={styles.container}>
    //   <A onClose={onClose} opened={opened}>
    //     <OverlayingPopup />
    //   </A>
    //
    //   <CSSTransition
    //     in={animationIn}
    //     nodeRef={contentRef}
    //     timeout={1500}
    //     mountOnEnter
    //     unmountOnExit
    //     classNames={contentAnimation}
    //   >
    //     <div ref={contentRef} className={styles.content}>
    //       {children}
    //     </div>
    //   </CSSTransition>
    // </div>
  );
};
