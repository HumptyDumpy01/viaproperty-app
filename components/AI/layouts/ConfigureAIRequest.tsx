'use client';

import { AIToneType, GenerationForType } from '@/components/AI/modals/AIModal';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import AIBadgeTone from '@/components/AI/UI/AIBadgeTone';
import { motion } from 'framer-motion';
import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

type ConfigureAIRequestType = {
  generationFor: GenerationForType;
  inputRef: React.RefObject<HTMLInputElement>;
  toneState: {
    value: AIToneType,
    setValue: Dispatch<SetStateAction<AIToneType>>
  },
  handleGenerateText: () => void;
  handleClose: () => void;
  loading?: boolean;
  // children: ReactNode;
}

export default function
  ConfigureAIRequest({
                       generationFor,
                       inputRef,
                       toneState,
                       handleGenerateText,
                       handleClose,
                       loading = false
                     }: ConfigureAIRequestType) {
  const { value: activeTone, setValue: setActiveTone } = toneState;

  return (
    <>
      <div>
        <div className={`flex items-center gap-4 mb-5`}>
          <h3 className={`text-3xl bg-clip-text text-transparent bg-linear-main-red font-bold`}>Generation for:</h3>
          <span
            className={`rounded-full py-2 px-7 border border-red-500 text-red-500 font-semibold`}>{generationFor || `Property Description`}</span>
        </div>
        <div className={`flex gap-5 mb-4 `}>
          <h3 className={`text-3xl bg-clip-text text-transparent bg-linear-main-red font-bold text-nowrap`}>Add
            tags:</h3>
          <input min={5} minLength={5} maxLength={1000} required ref={inputRef} type="text" name={`tags`}
                 className={`px-6 py-3.5 rounded-[10px] border border-red-500 placeholder-red-500 
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
          <AIBadgeTone
            onClick={() => setActiveTone(`Professional`)}
            active={activeTone === `Professional`}
            label={`Professional`} />
          <AIBadgeTone
            onClick={() => setActiveTone(`Trendy`)}
            active={activeTone === `Trendy`} label={`Trendy`} />
          <AIBadgeTone
            onClick={() => setActiveTone(`Inviting`)}
            active={activeTone === `Inviting`} label={`Inviting`} />
          <AIBadgeTone
            onClick={() => setActiveTone(`Minimalist`)}
            active={activeTone === `Minimalist`} label={`Minimalist`} />
        </div>
      </div>
      <div className={`flex items-center gap-20 justify-end text-red-500`}>
        <div className={`flex items-center gap-9`}>
          <motion.button
            disabled={loading}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: .9 }}
            onClick={handleGenerateText}
            type={`button`}
            className={`px-16 py-6 font-semibold text-4xl  bg-linear-main-red text-white rounded-full`}>Generate
          </motion.button>

          <div className={`${!loading ? `opacity-0 pointer-events-none` : ``}`}>
            <CircularProgress className={`text-red-500`} color={`inherit`} />
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: .9 }}
          className={`font-semibold text-2xl bg-linear-main-dark-blue text-white px-12 py-4 rounded-full`}
          type={`button`}
          onClick={() => handleClose()}>Close
        </motion.button>
      </div>
    </>
  );
}
