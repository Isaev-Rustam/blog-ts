import { useEffect, useState } from 'react';

import { ANIMATION_TIME } from '@/containers/modal/modal-load-container/modal-load-container.tsx';

interface UseMountProps {
  opened: boolean;
}
export const useMount = ({ opened }: UseMountProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_TIME);
    }
  }, [opened]);

  return {
    mounted,
  };
};
