import { ToastPosition, ToastType } from "../types";

export interface IToastProps {
  id: string;
  title?: string;
  description?: React.ReactNode;
  type?: ToastType;
  position?: ToastPosition;
  autoClose?: boolean | number;
  closeOnClick?: boolean;
  draggable?: boolean;
  onClose?: () => void;
}
