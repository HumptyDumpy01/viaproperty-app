// 'use client';

import { OptionsSelectType } from '@/components/AccountSettings/Settings/MyProfile/Security';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import ChevronIcon from '@/components/UI/Icon/ChevronIcon';
import { ComponentPropsWithoutRef } from 'react';
import { Tooltip } from '@mui/material';

type SelectAndTooltipType = {
  // children: ReactNode;
  label: string;
  tooltip: {
    customPosition: string;
    content: string;
  };
  select: {
    required: boolean;
    name: string;
    id: string;
    options: OptionsSelectType[]
  };
  defaultValue?: string;
} & ComponentPropsWithoutRef<'select'>;

export default function SelectAndTooltip({ label, tooltip, select, defaultValue, ...props }: SelectAndTooltipType) {
  return (
    <>
      <div className={`flex flex-col gap-3 relative`}>
        <label htmlFor="propertyFor"
               className={`bg-clip-text flex items-center justify-between gap-3 text-transparent bg-linear-main-dark-blue text-2xl font-bold`}>
          {label}
          <Tooltip arrow title={tooltip.content}>
            <div>
              <ViapropertyIcon icon={`questionMark`} />
            </div>
          </Tooltip>

        </label>
        <select
          {...props}
          defaultValue={defaultValue}
          required={select.required}
          name={select.name} id={select.id} className={`bg-zinc-50 px-4 py-5 pr-10 flex rounded-xl disabled:animate-pulse
              transition-all duration-300 h-[60px] text-zinc-700 font-medium focus:outline-none focus:bg-white border-2 border-transparent
              focus:border-blue-900 appearance-none relative pb-4 pt-4`}>
          {select.options.map(function(option, index) {
            return (
              <option key={index} value={option.value}>{option.label}</option>
            );
          })}
        </select>
        <div className={`absolute top-[70px] right-5 pointer-events-none`}>
          <ChevronIcon />
        </div>
      </div>
    </>
  );
}
