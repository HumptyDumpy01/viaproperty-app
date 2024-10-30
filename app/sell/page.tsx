// 'use client';

/*type SellPageType = {
  // children: ReactNode;
}*/

import SellInputContent from '@/components/Sell/SellInputContent';

export default function SellPage(/*{  }: SellPageType*/) {
  return (
    <main className={`overflow-hidden mt-7 mb-12`}>
      <div className={`max-w-[1320px] mx-auto w-full px-3 bp-480:px-6`}>
        <h1 className={`bg-clip-text text-transparent bg-linear-main-red font-bold
        text-[40px] mb-3.5 `}>Let’s Start Selling!</h1>
        <p className={`max-w-4xl leading-relaxed mb-6 text-[15px]`}>Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Dolor
          ducimus earum facilis maxime numquam
          provident
          quam quis reprehenderit. Adipisci amet consectetur cum delectus id ipsam minus omnis quaerat, quibusdam
          quidem?</p>

        <div className={`max-w-screen-xl`}>
          <SellInputContent />
        </div>
      </div>
    </main>
  );
}
