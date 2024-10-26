// 'use client';

type ButtonEmptyType = {
  label: string;
  // children: ReactNode;
}

export default function ButtonEmpty({ label }: ButtonEmptyType) {
  return (
    <>
      <button
        className={`bg-transparent rounded-full flex 
               w-fit h-[62px]  
              px-12 py-6 text-lg items-center
              bg-clip-text text-transparent bg-linear-main-red font-bold
              border border-red-500
              hover:border-white
              transition-all duration-200 active:border-red-500`}> {label} </button>
    </>
  );
}
