// 'use client';

import CloseIcon from '@/components/UI/Icon/CloseIcon';
import Textarea from '@/components/UI/Textarea/Textarea';
import { FormEvent } from 'react';

type ReplyOnCommentType = {
  textareaWidth: string;
  textareaName: string;
  setLeaveReplyOpen: (arg: boolean) => void;
  btnLabel: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  // children: ReactNode;
}

export default function
  ReplyOnComment({
                   textareaWidth,
                   textareaName,
                   setLeaveReplyOpen,
                   btnLabel,
                   onSubmit
                 }: ReplyOnCommentType) {
  return (
    <>
      <div className={`flex`}>
        <form onSubmit={onSubmit} className={`flex flex-col gap-3`}>
          <Textarea minLength={2} maxLength={1000} name={textareaName} widthClass={textareaWidth} />
          <div className={`flex items-center gap-3`}>
            <button
              className={`text-left transition-all duration-200 text-sm 
                  py-3 px-5 text-white bg-zinc-900 w-fit 
                 hover:bg-zinc-800 active:bg-zinc-400 rounded-full font-semibold`}>{btnLabel}</button>
            <div className={`flex transition-all duration-200 hover:scale-150 cursor-pointer`}
                 onClick={() => setLeaveReplyOpen(false)}>
              <CloseIcon />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
