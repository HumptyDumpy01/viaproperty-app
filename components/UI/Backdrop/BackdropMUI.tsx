'use client';

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { createPortal } from 'react-dom';

type BackdropMUICircularColorType = `error` | `info` | `success` | `primary` | `inherit` | `secondary` | `warning`

type BackdropMUIProps = {
  state: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  alertMessage: string;
  circularColor?: BackdropMUICircularColorType;
}

export default function BackdropMUI({ state, alertMessage, circularColor = `inherit` }: BackdropMUIProps) {
  const { open, setOpen } = state;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = () => {
    alert(alertMessage);
    setOpen(false);
  };

  if (!mounted) return null;

  return createPortal(
    <div>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress size={55} color={circularColor} />
      </Backdrop>
    </div>, document.getElementById('backdrop')! as HTMLDivElement
  );
}