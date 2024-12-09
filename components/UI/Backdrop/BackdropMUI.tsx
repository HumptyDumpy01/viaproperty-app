'use client';

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { createPortal } from 'react-dom';

type BackdropMUIProps = {
  state: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  alertMessage: string;
}

export default function BackdropMUI({ state, alertMessage }: BackdropMUIProps) {
  const { open, setOpen } = state;

  const handleClose = () => {
    alert(alertMessage);
    setOpen(false);
  };

  return createPortal(
    <div>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress size={55} color="inherit" />
      </Backdrop>
    </div>, document.getElementById('backdrop')! as HTMLDivElement
  );
}