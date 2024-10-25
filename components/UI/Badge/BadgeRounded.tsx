// 'use client';

import { ActiveFilterTypeQuestions } from '@/utils/types/activeFilterTypeQuestions';

type BadgeRoundedType = {
  state?: ActiveFilterTypeQuestions;
  label: ActiveFilterTypeQuestions;
  setActiveFilter: (switchTo: ActiveFilterTypeQuestions) => void;
  // children: ReactNode;
}

export default function BadgeRounded({ state, label, setActiveFilter }: BadgeRoundedType) {
  const activeStateStyles = `text-red-500 border-red-100 font-bold`;
  const inactiveStateStyles = `text-zinc-400 border-zinc-100 font-medium`;
  return (
    <>
      <div className={`cursor-pointer`}>
        <span onClick={() => setActiveFilter(label)}
              className={`${state === label ? activeStateStyles : inactiveStateStyles} w-fit text-[16px]  inline-block px-4 py-2 border-2 
            whitespace-nowrap rounded-full`}>{label}</span>
      </div>
    </>
  );
}
