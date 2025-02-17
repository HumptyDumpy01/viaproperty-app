// 'use client';

/*type SellHeaderType = {
  // children: ReactNode;
}*/

export default function SellHeader(/*{  }: SellHeaderType*/) {
  return (
    <>
      <h1 className={`bg-clip-text text-transparent bg-linear-main-red font-bold
        text-[40px] mb-3.5 sell-heading max-w-5xl`}>Your Property, Your Terms – Start Selling or Renting with Ease!</h1>
      <p className={`max-w-3xl leading-relaxed mb-6 text-[15px]`}>Selling or renting doesn’t have to be a complicated
        process. With the right approach, you can showcase your property’s best features, set competitive pricing, and
        attract interest from the right audience.</p>
    </>
  );
}
