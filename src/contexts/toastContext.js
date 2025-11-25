import { createContext, useState, useContext } from 'react';
import Toast from '../components/Toast';

const ToastContext = createContext({});
export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [toastTitleValue, setToastTitleValue] = useState('');

  function showHideToast(title) {
    setToastTitleValue(title);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }
  return (
    <ToastContext.Provider value={{ showHideToast }}>
      <Toast open={open} title={toastTitleValue} />
      {children}
    </ToastContext.Provider>
  );
};
export const useToast = () => useContext(ToastContext);
