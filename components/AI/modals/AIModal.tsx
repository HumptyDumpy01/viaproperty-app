import * as React from 'react';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import AIIcon from '@/components/UI/Icon/AIIcon';
import { makeStyles } from '@mui/styles';
import SnackbarMUI from '@/components/UI/Snackbar/SnackbarMUI';
import { generateTextSchema } from '@/utils/schemas/AI/generateTextSchema';
import ConfigureAIRequest from '@/components/AI/layouts/ConfigureAIRequest';
import AIResponse from '@/components/AI/layouts/AIResponse';

export type GenerationForType = `Property Description` | `Property Title` | `Property Location Description`;
export type AIToneType = `Professional` | `Trendy` | `Inviting` | `Minimalist`;

export type AIModalType = {
  modalState: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>>; }
  generationFor: GenerationForType | null;
}

const useStyles = makeStyles({
  backdrop: {
    backdropFilter: 'blur(10px)'
  }
});

function AIModal({ modalState, generationFor }: AIModalType) {
  const [AIResponseState, setAIResponseState] = useState<`start` | `response`>(`start`);
  const [snackbarState, setSnackbarState] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(``);

  const inputRef = useRef<HTMLInputElement>(null);
  const { setOpen, open } = modalState;
  const [activeTone, setActiveTone] = useState<AIToneType>(`Professional`);
  const classes = useStyles();

  function handleSnackbarOpen(message: string) {
    setSnackbarMessage(() => message);
    setSnackbarState(() => true);
  }

  const handleClose = () => {
    setOpen(() => false);
  };

  function handleGenerateText() {
    const validate = generateTextSchema.safeParse({ generationFor, tags: inputRef?.current?.value, tone: activeTone });

    if (!validate.success) {
      handleSnackbarOpen(validate.error.errors[0].message);
      return;
    }

    console.log(`Clicked`);
  }

  return (
    <>
      <SnackbarMUI severity={`error`} message={snackbarMessage}
                   state={{ open: snackbarState, setOpen: setSnackbarState }} />
      <Dialog
        BackdropProps={{
          classes: {
            root: classes.backdrop
          }
        }}
        maxWidth={`md`} onClose={handleClose} open={open}>
        <div className={`py-9 px-8`}>
          <div className={`flex items-center gap-5 mb-8`}>
            <div className={`min-w-14 h-14 bg-linear-main-red flex items-center justify-center rounded-full`}>
              <AIIcon />
            </div>
            <h2 className={`font-bold text-5xl bg-clip-text text-transparent bg-linear-main-red pb-1`}>Viaproperty
              Assistant</h2>
          </div>
          {AIResponseState === `start` && (
            <ConfigureAIRequest
              toneState={{ value: activeTone, setValue: setActiveTone }} handleClose={handleClose}
              handleGenerateText={handleGenerateText}
              generationFor={generationFor || `Property Title`} inputRef={inputRef} />
          )}
          {AIResponseState === `response` && (
            <>
              <AIResponse
                handleClosePopup={handleClose}
                setAIResponseState={setAIResponseState}
                generatedFor={generationFor || `Property Title`}
                generatedText={`Lorem ipsum dolor sit amet consectetur. Praesent morbi mollis non aenean. Eu dictumst eleifend consequat ultricies ac ante tellus. Elementum proin fermentum nulla turpis augue etiam. Lectus nunc porta dapibus ultricies leo libero facilisis placerat non.  Fermentum nulla turpis augue etiam. Lectus nunc porta dapibus ultricies leo libero facilisis placerat non.`} />
            </>
          )}
        </div>
      </Dialog>
    </>
  );
}

export default AIModal;