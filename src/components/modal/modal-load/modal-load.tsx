import { FC, memo } from 'react';

interface ModalLoadProps {
  onClose: () => void;
}
const ModalLoad: FC<ModalLoadProps> = memo(({ onClose }) => (
  <div className="absolute z-20 bg-amber-300 w-2/3 h-1/5 flex justify-around items-start">
    <span>Modal</span>
    <button type="button" onClick={onClose}>
      x
    </button>
  </div>
));

export default ModalLoad;
