// 'use client';

type RectangularButtonType = {
  btnLabel: string;
  uppercase?: boolean;
  btnType?: `button` | `submit` | `reset`;
  // children: ReactNode;
}

export default function RectangularButton({ btnLabel, uppercase = true, btnType = `button` }: RectangularButtonType) {
  return (
    <div>
      <button type={btnType}
              className={`items-center justify-center flex text-center bg-linear-main-red w-28 h-28 rounded-2xl`}>
        <span className={`inline-block ${uppercase ? `uppercase` : ``} font-bold text-white`}>{btnLabel}</span>
      </button>
    </div>
  );
}
