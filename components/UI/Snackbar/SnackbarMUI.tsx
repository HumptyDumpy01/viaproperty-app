'use client';

import * as React from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type SnackbarMUIProps = {
  severity: 'error' | 'warning' | 'info' | 'success';
  message: string;
  variant?: 'filled' | 'outlined' | 'standard';
  state: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export default function SnackbarMUI({ severity, variant = `filled`, message, state }: SnackbarMUIProps) {
  const { open, setOpen } = state;

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={6000}>
      <Alert
        onClose={handleClose}
        severity={severity}
        variant={variant}
        sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}