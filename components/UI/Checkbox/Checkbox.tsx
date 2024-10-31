import React, { forwardRef } from 'react';

type CheckboxType = {
  label: string;
  name: string;
  checked?: boolean;
  // children: ReactNode;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxType>(({ label, name, checked = false }, ref) => {
  return (
    <>
      <label className={`flex items-center cursor-pointer`}>
        <input
          type={`checkbox`}
          defaultChecked={checked}
          name={name}
          ref={ref}
          className={`mr-2 w-4 h-4 accent-zinc-900 checked:bg-zinc-950 peer`}
        />
        <span className={`text-zinc-600 text-[15px] peer-checked:text-zinc-900 peer-checked:font-semibold`}>
          {label}
        </span>
      </label>
    </>
  );
});

Checkbox.displayName = `Checkbox`;

export default Checkbox;