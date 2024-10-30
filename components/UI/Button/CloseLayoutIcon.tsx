// 'use client';

type CloseLayoutIconType = {
  dispatch: () => void;
  layoutOpen: boolean;
  fixedPosition: string;
  extraClasses?: string;
  // children: ReactNode;
}

import CloseIcon from '@/components/UI/Icon/CloseIcon';

export default function CloseLayoutIcon({ dispatch, layoutOpen, fixedPosition, extraClasses }: CloseLayoutIconType) {
  return (
    <>
      <div onClick={dispatch}
           className={`flex translate-x-0 cursor-pointer ${!layoutOpen ? `opacity-0 pointer-events-none translate-x-1/2` : ``} 
           fixed z-[60] ${fixedPosition} bg-red-500 w-20 h-20 items-center justify-center
            rounded-full ${extraClasses} transition-all duration-300 hover:bg-red-600 hover:scale-90`}>
        <CloseIcon height={34} width={34} strokeColor={`white`} />
      </div>
    </>
  );
}
