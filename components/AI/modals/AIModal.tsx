import * as React from 'react';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import AIIcon from '@/components/UI/Icon/AIIcon';
import { makeStyles } from '@mui/styles';
import SnackbarMUI from '@/components/UI/Snackbar/SnackbarMUI';
import { generateTextSchema } from '@/utils/schemas/AI/generateTextSchema';
import ConfigureAIRequest from '@/components/AI/layouts/ConfigureAIRequest';
import AIResponse from '@/components/AI/layouts/AIResponse';
import { useCreateAIResponse } from '@/hooks/mutations/AI/useCreateAIResponse';
import { useUpdateResponsePasted } from '@/hooks/mutations/AI/useUpdateResponsePasted';
import { windowExists } from '@/utils/functions/windowExists';
import { convertToLocalStorageName } from '@/utils/functions/sell/convertToLocalStorageName';

export type GenerationForType = `Property Description` | `Property Title` | `Property Location Description`;
export type AIToneType = `Professional` | `Trendy` | `Inviting` | `Minimalist`;

export type AIModalType = {
  modalState: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>>; }
  generationFor: GenerationForType | null;
  textareaValueState: {
    value: { val: string; generatedFor: GenerationForType };
    setValue: Dispatch<SetStateAction<{ val: string; generatedFor: GenerationForType }>>
  };
}

const useStyles = makeStyles({
  backdrop: {
    backdropFilter: 'blur(10px)'
  }
});

function AIModal({ modalState, generationFor, textareaValueState }: AIModalType) {
  const [aiResponse, setAiResponse] = useState<{ response: string; id: string }>();
  const { value: textareaValue, setValue: setTextareaValue } = textareaValueState;

  useEffect(() => {
    console.log('textareaValue:', textareaValue);
  }, [textareaValue]);

  const [AIResponseState, setAIResponseState] = useState<`start` | `response`>(`start`);
  const [snackbarState, setSnackbarState] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(``);

  const inputRef = useRef<HTMLInputElement>(null);
  const { setOpen, open } = modalState;

  const [activeTone, setActiveTone] = useState<AIToneType>(`Professional`);
  const classes = useStyles();

  const { generateText, loading: generatingTextLoading } = useCreateAIResponse();
  const { updateResponsePastedProp, loading: updatePastePropLoading } = useUpdateResponsePasted();

  function handleSnackbarOpen(message: string) {
    setSnackbarMessage(() => message);
    setSnackbarState(() => true);
  }

  const handleClose = () => {
    setOpen(() => false);
  };

  function handleCleanForm() {
    handleClose();
    // @ts-ignore
    setTextareaValue(() => null);
    setActiveTone(`Professional`);
    setAIResponseState(() => `start`);
    setAiResponse({ id: ``, response: `` });
    if (inputRef?.current?.value) inputRef.current.value = ``;
  }

  async function handleGenerateText() {
    const valueEntered = inputRef?.current?.value || ``;
    const validate = generateTextSchema.safeParse({ generationFor, tags: valueEntered, tone: activeTone });

    if (!validate.success) {
      handleSnackbarOpen(validate.error.errors[0].message);
      return;
    }
    const response = await generateText({
      generationFor: generationFor as GenerationForType,
      tags: valueEntered,
      tone: activeTone,
      type: `propertyAdvert`
    });

    if (!response || response?.data?.message) {
      handleSnackbarOpen(response.data.message);
      return;
    }
    setAiResponse(() => response.data.createAIResponse);
    setAIResponseState(() => `response`);
  }

  async function handlePasteResponse() {
    if (updatePastePropLoading) {
      handleSnackbarOpen('We handle the pasting of this response.. Please stand by..');
      return;
    }
    if (!aiResponse || !generationFor) return;

    await updateResponsePastedProp({ id: aiResponse.id, pastedText: textareaValue.val });

    if (windowExists()) {
      window.localStorage.setItem(convertToLocalStorageName(generationFor), textareaValue.val);
      // TODO: reflect the new value onto the corresponding field
      handleCleanForm();
    }
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
              loading={generatingTextLoading}
              toneState={{ value: activeTone, setValue: setActiveTone }} handleClose={handleClose}
              handleGenerateText={handleGenerateText}
              generationFor={generationFor!} inputRef={inputRef} />
          )}
          {AIResponseState === `response` && aiResponse?.id && (
            // {AIResponseState === `response` && (
            <>
              <AIResponse
                textareaValueState={{ value: textareaValue, setValue: setTextareaValue }}
                updatePastePropLoading={updatePastePropLoading}
                handlePasteResponse={handlePasteResponse}
                responseId={aiResponse.id}
                // responseId={``}
                handleClosePopup={handleClose}
                setAIResponseState={setAIResponseState}
                generatedFor={generationFor!}
                // generatedText={aiResponse?.response || `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore est modi molestias neque officiis provident.`} />
                generatedText={aiResponse.response} />
            </>
          )}
        </div>
      </Dialog>
    </>
  );
}

export default AIModal;