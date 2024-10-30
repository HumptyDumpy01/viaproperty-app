// 'use client';

import { ReactNode } from 'react';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import Tooltip from '@/components/Layout/Tooltip/Tooltip';

type ContainerType = {
  questionMark?: {
    visible: boolean;
    content: string;
  };
  questionMarkVisibility?: boolean;
  setQuestionMarkVisibility?: (prev: boolean) => void;
  children: ReactNode;
}

export default function
  ContainerBox({
                 children,
                 questionMark,
                 setQuestionMarkVisibility,
                 questionMarkVisibility
               }: ContainerType) {
  return (
    <div className={`flex gap-5`}>
      <div className={`border border-red-500 rounded-3xl px-7 py-6 pr-11 relative`}>
        {children}

        {questionMark?.visible && (
          // <Tooltip title={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, totam.`}>
          // @ts-ignore
          <button onClick={() => setQuestionMarkVisibility(prevState => !prevState)} type={`button`}
                  className={`absolute top-4 right-4`}>
            <ViapropertyIcon icon={`questionMark`} />
          </button>
          // </Tooltip>
        )}
        {(questionMark?.visible) && (
          <>
            <Tooltip
              // @ts-ignore
              setQuestionMarkVisibility={setQuestionMarkVisibility}
              // @ts-ignore
              questionMarkVisibility={questionMarkVisibility}
              content={questionMark?.content}
            />
          </>
        )}
      </div>
    </div>
  );
}
