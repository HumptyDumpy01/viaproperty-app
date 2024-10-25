'use client';

import { useState } from 'react';
import PropertyIcon from '@/components/UI/Icon/PropertyIcon';

type ButtonPropertyTypeType = {
  icon: `home` | `apartment` | `commercial` | `cottage`;
  label: string;
  // children: ReactNode;
}

export default function ButtonPropertyType({ icon, label }: ButtonPropertyTypeType) {
  const [activePropertyType, setActivePropertyType] = useState(false);

  function toggleActiveState() {
    setActivePropertyType(!activePropertyType);
  }

  return (
    <>
      <div className={`flex flex-col items-center justify-center border-2 
              ${!activePropertyType ? `border-zinc-300` : ``} w-[124px] h-[70px] pt-3.5 pb-2.5 rounded-[6px] cursor-pointer
              transition-all duration-300 ease-in-out 
              ${activePropertyType ? `bg-zinc-950 text-white` : ``}`}
           onClick={() => toggleActiveState()}>
        <div>
          {icon === `home` && (
            <>
              <PropertyIcon type={`home`} activePropertyType={activePropertyType} />
            </>
          )}
          {icon === `apartment` && (
            <>
              <PropertyIcon type={`apartment`} activePropertyType={activePropertyType} />
            </>
          )}

          {icon === `commercial` && (
            <>
              <PropertyIcon type={`commercial`} activePropertyType={activePropertyType} />
            </>
          )}

          {icon === `cottage` && (
            <>
              <PropertyIcon type={`cottage`} activePropertyType={activePropertyType} />
            </>
          )}
        </div>
        <span
          className={`inline-block text-[16px] mt-1 ${activePropertyType ? `text-white` : `text-zinc-600`}`}>{label}</span>
      </div>
    </>
  );
}
