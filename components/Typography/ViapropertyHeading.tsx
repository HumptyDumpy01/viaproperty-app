// 'use client';

type ViapropertyHeadingType = {
  headingSize: `lg` | `md` | `sm`;
  label: string;
  customClasses?: string;
  // children: ReactNode;
}

export default function ViapropertyHeading({ headingSize, label, customClasses = `` }: ViapropertyHeadingType) {
  const headingHuge = `bp-620:text-[50px]`;
  const headingMedium = `bp-620:text-[40px]`;
  const headingSmall = `bp-620:text-[26px]`;

  const chosenHeadingSize = headingSize === `lg` ? headingHuge : headingSize === `md` ? headingMedium : headingSmall;
  return (
    <>
      <h1 className={`bg-clip-text text-transparent bg-linear-main-red font-bold leading-normal
       ${chosenHeadingSize} w-fit ${customClasses} text-3xl`}>{label}</h1>
    </>
  );
}
