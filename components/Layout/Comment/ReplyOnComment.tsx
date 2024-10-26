// 'use client';

type ReplyOnCommentType = {
  textareaWidth: number;
  textareaName: string;
  setLeaveReplyOpen: (arg: boolean) => void;
  btnLabel: string;
  // children: ReactNode;
}

import Textarea from '@/components/UI/Textarea/Textarea';

export default function ReplyOnComment({
                                         textareaWidth,
                                         textareaName,
                                         setLeaveReplyOpen,
                                         btnLabel
                                       }: ReplyOnCommentType) {
  return (
    <>
      <div className={`flex`}>
        <form className={`flex flex-col gap-3`}>
          <Textarea name={textareaName} width={textareaWidth} />
          <div className={`flex items-center gap-3`}>
            <button
              className={`text-left transition-all duration-200 text-sm 
                  py-3 px-5 text-white bg-zinc-900 w-fit 
                 hover:bg-zinc-800 active:bg-zinc-400 rounded-full font-semibold`}>{btnLabel}</button>
            <div className={`flex transition-all duration-200 hover:scale-150 cursor-pointer`}
                 onClick={() => setLeaveReplyOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M20 20L4 4M20 4L4 20" stroke="#222" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
