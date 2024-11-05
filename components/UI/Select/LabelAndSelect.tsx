// 'use client';

type LabelAndSelectType = {
  options: {
    value: string;
    label: string;
  }[];
  disabled?: boolean;
  required?: boolean;
  label: string;
  defaultValue?: string;
  // children: ReactNode;
}

import ChevronIcon from '@/components/UI/Icon/ChevronIcon';

export default function LabelAndSelect({ options, disabled = false, required = true, label, defaultValue }: LabelAndSelectType) {
  return (
    <div className={`flex flex-col gap-3 max-w-96 relative`}>
      <label htmlFor="propertyFor"
             className={`${!disabled ? `text-zinc-700` : `text-zinc-400`} font-semibold`}>{label} {required ? `*` : `(Optional)`}</label>
      <select defaultValue={defaultValue} required={required} name="propertyFor" id="propertyFor" className={`bg-zinc-50 px-4 py-5 pr-10 flex rounded-2xl
    transition-all duration-300 text-zinc-700 font-medium focus:outline-none focus:bg-white border-2 border-transparent
    focus:border-red-500 appearance-none relative`} disabled={disabled}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
      <div className={`absolute top-[65px] right-5 pointer-events-none`}>
        <ChevronIcon />
      </div>
    </div>
  );
}
