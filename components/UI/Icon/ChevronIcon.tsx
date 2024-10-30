// 'use client';

type ChevronIconType = {
  stroke?: string;
  // children: ReactNode;
}

export default function ChevronIcon({ stroke = `#3E3E3E` }: ChevronIconType) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 9 5" fill="none">
        <path d="M1.07422 0.815918L4.69107 4.43277L8.30791 0.815918" stroke={stroke} stroke-width="1.00468"
              stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </>
  );
}
