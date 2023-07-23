import { useEffect, useState } from 'react';

import { TimerId } from '@/types/default.ts';

export const useMount = (isOpen: boolean) => {
  const [mount, setMount] = useState(false);
  console.log('useMount', 'isOpen :', isOpen, 'mount :', mount);

  useEffect(() => {
    let id: TimerId;
    if (isOpen && !mount) {
      setMount(true);
    } else if (!isOpen && mount) {
      id = setTimeout(() => setMount(false), 1500);
      return () => clearTimeout(id);
    }
    return undefined;
  }, [isOpen]);

  return { mount };
};
