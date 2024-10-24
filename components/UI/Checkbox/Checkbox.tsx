// 'use client';

type CheckboxType = {
  label: string;
  name: string;
  // children: ReactNode;
}

export default function Checkbox({ label, name }: CheckboxType) {
  return (
    <>
      <label className={`flex items-center cursor-pointer`}>
        <input type={`checkbox`} name={name} className={`mr-2 w-4 h-4 accent-zinc-900 checked:bg-zinc-950 peer`} />
        <span
          className={`text-zinc-600 text-[15px] peer-checked:text-zinc-900 peer-checked:font-semibold`}>{label}</span>
      </label>
    </>
  );
}
