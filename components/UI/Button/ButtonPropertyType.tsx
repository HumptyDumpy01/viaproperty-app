'use client';

import PropertyIcon from '@/components/UI/Icon/PropertyIcon';

type ButtonPropertyTypeType = {
  icon: `home` | `apartment` | `commercial` | `cottage`;
  label: string;
  isActive: boolean;
  onToggle: () => void;
};

export default function ButtonPropertyType({ icon, label, isActive, onToggle }: ButtonPropertyTypeType) {
  return (
    <>
      <div className={`flex flex-col items-center justify-center border-2
              ${!isActive ? `border-zinc-300` : ``} w-[124px] h-[70px] pt-3.5 pb-2.5 rounded-[6px] cursor-pointer
              transition-all duration-300 ease-in-out
              ${isActive ? `bg-zinc-950 text-white` : ``}`}
           onClick={onToggle}>
        <div>
          <PropertyIcon type={icon} activePropertyType={isActive} />
        </div>
        <span
          className={`inline-block text-[16px] mt-1 ${isActive ? `text-white` : `text-zinc-600`}`}>{label}</span>
      </div>
    </>
  );
}