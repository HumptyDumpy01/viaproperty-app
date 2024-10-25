// 'use client';

import { AccordionFeatureType } from '@/utils/types/AccordionFeatureType';

type AccordionFeatureCustomType = {
  type: AccordionFeatureType;
  label: string;
  activeState: AccordionFeatureType
  setActiveState: (switchTo: AccordionFeatureType) => void;
  // children: ReactNode;
}

export default function AccordionFeature({ type, label, activeState, setActiveState }: AccordionFeatureCustomType) {
  const activeStyles = `bg-clip-text text-xl text-transparent bg-linear-main-red font-bold border-b-2 border-b-red-500 pb-2`;
  const inactiveStyles = `text-xl text-zinc-400 font-medium border-b-2 border-b-transparent pb-2`;
  return (
    <>
       <span onClick={() => setActiveState(type)} className={`whitespace-nowrap cursor-pointer transition-all
       duration-200 ${type !== activeState ? `hover:text-zinc-800` : ``} ${type === activeState ? activeStyles : inactiveStyles}
       `}>{label}</span>
    </>
  );
}
