// 'use client';

type ViapropertyHeadingType = {
  headingSize: `lg` | `md`;
  label: string;
  customClasses?: string;
  // children: ReactNode;
}

export default function ViapropertyHeading({ headingSize, label, customClasses = `` }: ViapropertyHeadingType) {
  const headingHuge = `text-[50px]`;
  const headingMedium = `text-[40px]`;

  const chosenHeadingSize = headingSize === `lg` ? headingHuge : headingMedium;
  return (
    <>
      <h1 className={`bg-clip-text text-transparent bg-linear-main-red font-bold 
       ${chosenHeadingSize} w-fit ${customClasses}`}>{label}</h1>
    </>
  );
}
