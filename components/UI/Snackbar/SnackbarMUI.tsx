'use client';

import * as React from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { createPortal } from 'react-dom';

export type SnackBarSeverityType = 'error' | 'warning' | 'info' | 'success';

type SnackbarMUIProps = {
  severity: SnackBarSeverityType;
  message: string;
  variant?: 'filled' | 'outlined' | 'standard';
  backgroundColor?: string;
  state: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export default function
  SnackbarMUI({
                severity,
                variant = `filled`,
                message,
                state,
                backgroundColor
              }: SnackbarMUIProps) {
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

  return createPortal(
    <Snackbar open={open} onClose={handleClose} autoHideDuration={6000}>
      <Alert
        onClose={handleClose}
        severity={severity}
        variant={variant}
        sx={{
          width: '100%', backgroundColor, boxShadow: 2
        }}>
        {message}
      </Alert>
    </Snackbar>,
    document.getElementById(`snackbar`)!
  );
}