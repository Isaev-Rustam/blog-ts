import { FC, forwardRef, ReactElement } from 'react';

interface OverlayingPopupProps {
  onClose?: () => void;
  children?: ReactElement;
}
export const OverlayingPopup: FC<OverlayingPopupProps> = forwardRef(
  ({ children, onClose }, ref) => (
    <div className="fixed inset-0 z-10 flex items-center justify-center p-7">
      <button
        ref={ref}
        type="button"
        aria-label="close popup"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />
      {children}
    </div>
  )
);

export default OverlayingPopup;
