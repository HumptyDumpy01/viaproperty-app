'use client';

import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import { useState } from 'react';
import SortBadge from '@/components/Layout/Filter/Sorting/SortBadge';
import { Tooltip } from '@mui/material';

type SortItemsType = {
  sortParams: string[];
  position?: string;
  whenParamClicked?: (param: string) => void;
  disabled?: boolean;
  disabledTooltipText?: string;
  // children: ReactNode;
}


export default function ActionBadge({
                                      sortParams,
                                      position = `-top-28 left-0`,
                                      whenParamClicked,
                                      disabled = false,
                                      disabledTooltipText = `Sorting is disabled.`
                                    }: SortItemsType) {
  const [activeSortState, setActiveSortState] = useState(sortParams[0]);
  const [popupOpen, setPopupOpen] = useState<boolean>(false);

  function handleSetActiveState(param: string) {
    if (disabled) return;

    setActiveSortState(param);

    if (whenParamClicked) {
      whenParamClicked(param);
    }
  }

  const expandBtnStyles = !disabled ?
    `bg-clip-text text-transparent bg-linear-main-red border-red-500 font-bold ` : `text-zinc-300 border-zinc-200 font-semibold`;

  return (
    <>
      <div className={`relative`}>
        <div
          className={`absolute bg-white border border-red-500 rounded-2xl p-2 transition-all duration-200
          ${!popupOpen ? `opacity-0 pointer-events-none translate-y-1/2 ` : ``} ${position} flex flex-col gap-2 items-center`}>
          {sortParams.map(function(param) {
            return (
              <div key={param} onClick={() => setPopupOpen(false)} className={`flex text-nowrap w-full`}>
                <SortBadge onClick={() => handleSetActiveState(param)}
                           active={activeSortState === param}
                           label={param} />
              </div>
            );
          })}
        </div>
        <Tooltip title={disabled ? disabledTooltipText : undefined}>
          <div onClick={() => !disabled ? setPopupOpen(prevState => !prevState) : undefined}
               className={`flex items-center gap-2 cursor-pointer`}>
            <span className={`${expandBtnStyles} w-fit text-[12px] px-4 
            py-2 border rounded-full text-nowrap`}>{activeSortState}</span>
            <div /* onClick={() => setPopupOpen(prevState => !prevState)}*/
              className={`w-6 h-6 bg-white border ${!disabled ? `border-red-500` : `border-zinc-300`} rounded-full flex items-center justify-center`}>
              <div className={`flex transition-all duration-200 ${popupOpen ? `rotate-180` : `rotate-0`}`}>
                <ViapropertyIcon color={disabled ? `grey` : `red`} icon={`arrow`} />
              </div>
            </div>
          </div>
        </Tooltip>
      </div>
    </>
  );
}
