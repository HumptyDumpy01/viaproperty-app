// 'use client';

type TooltipType = {
  questionMarkVisibility: boolean;
  setQuestionMarkVisibility: (arg: boolean) => void;
  content: string;
  customDimensions?: string;
  customResponsivePosition?: string;
  customPosition?: string;
  // children: ReactNode;
}

import CloseLayoutIcon from '@/components/UI/Button/CloseLayoutIcon';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';

export default function
  Tooltip({
            questionMarkVisibility, setQuestionMarkVisibility, content,
            customDimensions = `w-80 h-60`,
            customResponsivePosition = `-top-6 -right-2`,
            customPosition = `bp-620:-top-[210px] bp-620:-right-[290px]`
          }: TooltipType) {
  return (
    <>
      <div
        className={`${customDimensions} bg-white border border-zinc-200 absolute ${customPosition}
         ${customResponsivePosition} rounded-3xl p-5
                transition-all duration-200 z-10
                ${!questionMarkVisibility ? `pointer-events-none opacity-0 translate-y-2/4` : `pointer-events-auto opacity-100 
                translate-y-0`}`}>
        <div className={`flex items-center gap-2.5 mb-5`}>
          <CloseLayoutIcon
            iconWidth={20}
            iconHeight={20}
            layoutOpen={questionMarkVisibility}
            dispatch={() => setQuestionMarkVisibility(false)}
            extraClasses={`w-8 h-8`}
            fixedPosition={`top-3 right-3`} />
          <ViapropertyIcon icon={`questionMark`} />
          <div
            className={`border border-red-500 rounded-full uppercase py-[6px] px-4 bg-clip-text text-transparent bg-linear-main-red font-bold`}>tip
          </div>
        </div>
        <p className={`text-zinc-700 text-[15px] leading-relaxed`}>{content}</p>
      </div>
    </>
  );
}
