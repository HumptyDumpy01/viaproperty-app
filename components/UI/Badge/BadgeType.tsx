// 'use client';

type BadgeTypeType = {
  text: string;
  // children: ReactNode;
}

export default function BadgeType({ text }: BadgeTypeType) {
  return (
    <>
      <div className={`bg-red-100 rounded px-2 h-7 flex items-center justify-center`}>
        <span className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-sm whitespace-nowrap`}>
          {text}
        </span>
      </div>
    </>
  );
}