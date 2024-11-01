'use client';

import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import { useState } from 'react';
import SortBadge from '@/components/Layout/Filter/Sorting/SortBadge';

type SortItemsType = {
  sortParams: string[];
  // children: ReactNode;
}


export default function SortItems({ sortParams }: SortItemsType) {
  const [activeSortState, setActiveSortState] = useState(sortParams[0]);
  const [popupOpen, setPopupOpen] = useState<boolean>(false);

  return (
    <>
      <div className={`relative`}>
        <div
          className={`absolute bg-white border border-red-500 rounded-2xl p-2 transition-all duration-200
          ${!popupOpen ? `opacity-0 pointer-events-none translate-y-1/2 ` : ``} -top-28 left-0 flex flex-col gap-2 items-center`}>
          {sortParams.map(function(param) {
            return (
              <div onClick={() => setPopupOpen(false)} className={`flex`}>
                <SortBadge onClick={() => setActiveSortState(param)} active={activeSortState === param}
                           label={param} />
              </div>
            );
          })}
        </div>
        <div onClick={() => setPopupOpen(prevState => !prevState)}
             className={`flex items-center gap-2 cursor-pointer`}>
            <span className={`bg-clip-text text-transparent bg-linear-main-red w-fit font-bold text-[12px] px-4 
            py-2 border border-red-500 rounded-full`}>{activeSortState}</span>

          <div
            className={`w-6 h-6 bg-white border border-red-500 rounded-full flex items-center justify-center`}>
            <div className={`flex transition-all duration-200 ${popupOpen ? `rotate-180` : `rotate-0`}`}>
              <ViapropertyIcon icon={`arrow`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
