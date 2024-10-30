// 'use client';

type ChooseAmountType = {
  label: string;
  item: number;
  setItem: (item: number) => void;
  // children: ReactNode;
}

export default function ChooseAmount({ label, item, setItem }: ChooseAmountType) {
  return (
    <>
      <div className={`flex items-center justify-between min-w-80 gap-7`}>
        <div className={`mr-auto`}>
          <label htmlFor="beds"
                 className={`text-2xl bg-clip-text text-transparent bg-linear-main-red font-bold`}>{label}</label>
        </div>
        <div className={`flex items-center gap-2`}>
          <button onClick={item !== 0 ? () => setItem(item - 1) : undefined}
                  type={`button`}
                  className={`bg-linear-main-red text-white text-xl w-8 h-8 flex items-center justify-center rounded-full`}>-
          </button>
          <span
            className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-2xl w-11 text-center appearance-none
                         transition-all duration-300 border-2 border-transparent focus:border-red-500 focus:outline-none rounded`}
          >{item}</span>
          <button type={`button`} onClick={() => setItem(item + 1)}
                  className={`bg-linear-main-red text-white text-xl w-8 h-8 flex items-center justify-center rounded-full`}>+
          </button>
        </div>
      </div>
    </>
  );
}
