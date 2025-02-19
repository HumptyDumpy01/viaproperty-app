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
  buttonLabels?: {
    affirmative?: string;
    negative?: string;
  }
}

export default function
  MUIDialogConfirm({
                     state,
                     text,
                     handleConfirmDialog,
                     buttonLabels = { affirmative: `agree`, negative: `Disagree` }
                   }: MUIDialogType) {
  const { open, setOpen } = state;
  const { heading, content } = text;
  const { affirmative, negative } = buttonLabels;

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
          <Button onClick={handleClose}>{negative}</Button>
          <Button onClick={handleConfirm} autoFocus>
            {affirmative}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}