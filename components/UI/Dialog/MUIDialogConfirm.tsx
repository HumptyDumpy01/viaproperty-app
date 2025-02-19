import * as React from 'react';
import { ReactNode } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type MUIDialogType = {
  state: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }
  text: { heading: string; content: ReactNode }
  handleConfirmDialog?: () => void;
}

export default function MUIDialogConfirm({ state, text, handleConfirmDialog }: MUIDialogType) {
  const { open, setOpen } = state;
  const { heading, content } = text;

  const handleClose = () => {
    setOpen(false);
  };

  function handleConfirm() {
    setOpen(false);
    if (handleConfirmDialog) handleConfirmDialog();
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {heading}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleConfirm} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}