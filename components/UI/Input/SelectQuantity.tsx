// 'use client';

type SelectQuantityType = {
  type?: `dark` | `light`
  // children: ReactNode;
}

export default function SelectQuantity({ type = `dark` }: SelectQuantityType) {
  const darkStyleButtons = `text-white bg-zinc-950`;
  const lightStyleButtons = `text-zinc-950 bg-zinc-300`;
  return (
    <>
      <div className={`flex gap-2.5`}>
        <button
          className={`${type === `dark` ? darkStyleButtons : lightStyleButtons} w-7 h-[29px] flex items-center justify-center text-xl  rounded-[2px]`}>-
        </button>
        <span className={`text-zinc-900 font-bold text-[19px]`}>2</span>
        <button
          className={`${type === `dark` ? darkStyleButtons : lightStyleButtons} w-7 h-[29px] flex items-center justify-center text-xl rounded-[2px]`}>+
        </button>
      </div>
    </>
  );
}
