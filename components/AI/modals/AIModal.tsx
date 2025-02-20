import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import Dialog from '@mui/material/Dialog';
import AIIcon from '@/components/UI/Icon/AIIcon';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import { makeStyles } from '@mui/styles';

export type AIModalType = {
  modalState: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>>; }
}

const useStyles = makeStyles({
  backdrop: {
    backdropFilter: 'blur(10px)'
  }
});

function AIModal({ modalState }: AIModalType) {
  const { setOpen, open } = modalState;
  const classes = useStyles();

  const handleClose = () => {
    setOpen(() => false);
  };

  return (
    <Dialog
      BackdropProps={{
        classes: {
          root: classes.backdrop
        }
      }}
      maxWidth={`lg`} onClose={handleClose} open={open}>
      <div className={`py-9 px-8`}>
        <div className={`flex items-center gap-5 mb-8`}>
          <div className={`min-w-14 h-14 bg-linear-main-red flex items-center justify-center rounded-full`}>
            <AIIcon />
          </div>
          <h2 className={`font-bold text-5xl bg-clip-text text-transparent bg-linear-main-red pb-1`}>Viaproperty
            Assistant</h2>
        </div>
        <div>
          <div className={`flex items-center gap-4 mb-5`}>
            <h3 className={`text-3xl bg-clip-text text-transparent bg-linear-main-red font-bold`}>Generation for:</h3>
            <span className={`rounded-full py-2 px-7 border border-red-500 text-red-500 font-semibold`}>Property Description</span>
          </div>
          <div className={`flex gap-5 mb-4 `}>
            <h3 className={`text-3xl bg-clip-text text-transparent bg-linear-main-red font-bold text-nowrap`}>Add
              tags:</h3>
            <input type="text" name={`tags`} className={`px-6 py-3.5 rounded-[10px] border border-red-500 placeholder-red-500 
            font-semibold max-w-[461px] text-red-500 w-full outline-none focus:outline-red-500 transition-all duration-200`}
                   placeholder={`e.g. Country, City, price per day, features`} />
          </div>
          <Paragraph customClasses={`mb-5`} text={(
            <>
              Do NOT be descriptive! Just type a few words about your property, separated by a comma. <HighlightText
              text={`The AI would
              generate a fancy text for you!`} />
            </>
          )} />
        </div>
        <div className={`flex items-center gap-3 mb-12`}>
          <h3 className={`text-3xl bg-clip-text text-transparent bg-linear-main-red font-bold`}>Tone:</h3>
          <div className={`flex items-center gap-2`}>
            <span
              className={`rounded-full py-2 px-6 border text-[15px] border-red-500 text-red-500 font-semibold`}>Professional</span>
            <span
              className={`rounded-full py-2 px-6 border text-[15px] border-gray-400 text-gray-400 font-medium`}>Trendy</span>

            <span
              className={`rounded-full py-2 px-6 border text-[15px] border-gray-400 text-gray-400 font-medium`}>Inviting</span>

            <span
              className={`rounded-full py-2 px-6 border text-[15px] border-gray-400 text-gray-400 font-medium`}>Minimalist</span>
          </div>
        </div>
        <div className={`flex items-center gap-44 justify-end`}>
          <button
            className={`px-16 py-6 font-semibold text-4xl  bg-linear-main-red text-white rounded-full`}>Generate
          </button>
          <button
            className={`font-semibold text-2xl bg-linear-main-dark-blue text-white px-12 py-4 rounded-full`}
            type={`button`}
            onClick={() => handleClose()}>Close
          </button>
        </div>
      </div>
    </Dialog>
  );
}

export default AIModal;