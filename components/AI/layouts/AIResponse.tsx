// 'use client';

import { GenerationForType } from '@/components/AI/modals/AIModal';
import * as React from 'react';
import { Dispatch, SetStateAction, useState } from 'react';
import StarIconSmall from '@/components/UI/Icon/StarIconSmall';
import { motion } from 'framer-motion';
import Paragraph from '@/components/Typography/Paragraph';
import MUIDialogConfirm from '@/components/UI/Dialog/MUIDialogConfirm';

type AIResponseType = {
  generatedText: string;
  generatedFor: GenerationForType;
  setAIResponseState: Dispatch<SetStateAction<`start` | `response`>>;
  handleClosePopup: () => void;
  // children: ReactNode;
}

export default function AIResponse({
                                     generatedText,
                                     generatedFor,
                                     setAIResponseState,
                                     handleClosePopup
                                   }: AIResponseType) {
  const [confirmDialogState, setConfirmDialogState] = useState(false);
  const [ratedResponse, setRatedResponse] = useState<number>(0);

  function handleRateResponse() {
    console.log('ratedResponse:', ratedResponse);
  }

  return (
    <>
      <MUIDialogConfirm
        handleConfirmDialog={handleClosePopup}
        buttonLabels={{ affirmative: `Leave`, negative: `Cancel` }}
        state={{ open: confirmDialogState, setOpen: setConfirmDialogState }}
        text={{
          heading: `You sure want to leave without pasting?`,
          content: (
            <>
              The response would be lost.
            </>
          )
        }} />
      <div>
        <div className={`flex items-center gap-4 mb-5`}>
          <h3 className={`text-3xl bg-clip-text text-transparent bg-linear-main-red font-bold`}>Generated for:</h3>
          <span
            className={`rounded-full py-2 px-7 border border-red-500 text-red-500 font-semibold`}>{generatedFor}</span>
        </div>
        <div className={`flex flex-col justify-center gap-4 mb-4`}>
          <textarea
            id={`response`}
            name={`response`}
            className={`w-full p-5 border border-blue-950 rounded-[10px] h-44 scrollbar-hide
             transition-all duration-200 text-zinc-900 text-[15px] focus:outline-red-500`}
            defaultValue={generatedText} />
          <div className={`flex items-center gap-2`}>
            <p className={`text-lg font-bold text-transparent bg-linear-main-red bg-clip-text`}>Rate Response:</p>
            <div className={`flex items-center gap-0.5`}>
              <StarIconSmall className={`cursor-pointer`} onClick={() => setRatedResponse(1)}
                             active={ratedResponse >= 1} />
              <StarIconSmall className={`cursor-pointer`} onClick={() => setRatedResponse(2)}
                             active={ratedResponse >= 2} />
              <StarIconSmall className={`cursor-pointer`} onClick={() => setRatedResponse(3)}
                             active={ratedResponse >= 3} />
              <StarIconSmall className={`cursor-pointer`} onClick={() => setRatedResponse(4)}
                             active={ratedResponse >= 4} />
              <StarIconSmall className={`cursor-pointer`} onClick={() => setRatedResponse(5)}
                             active={ratedResponse === 5} />
            </div>
          </div>
        </div>
        <div className={`mb-6`}>
          <Paragraph className={`mb-3 inline-block text-2xl`} text={(
            <>
              Thanks for using Viaproperty AI Assistant! please, rate the response by selecting the stars above in order
              to
              improve the
              quality!
            </>
          )} />
        </div>
        <div className={`flex items-center justify-center`}>
          <div className={`flex items-center gap-6`}>
            <motion.button
              onClick={() => setAIResponseState(`start`)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: .9 }}
              className={`font-semibold text-[23px] bg-linear-main-dark-blue text-white px-8 py-4 rounded-full`}
              type={`button`}>Try Again
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: .9 }}
              type={`button`}
              className={`px-16 py-6 font-semibold text-4xl  bg-linear-main-red text-white rounded-full`}>Paste
            </motion.button>

            <motion.button
              onClick={() => setConfirmDialogState(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: .9 }}
              className={`font-semibold text-2xl bg-gray-500 text-white px-12 py-4 rounded-full`}
              type={`button`}>Close
            </motion.button>

          </div>
        </div>

      </div>
    </>
  );
}
