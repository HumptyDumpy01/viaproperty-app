// 'use client';

type HeadingMediumType = {
  heading: string;
  maxWidthXL?: boolean;
  customClasses?: string;
  // children: ReactNode;
}

export default function HeadingMedium({ heading, maxWidthXL, customClasses = `` }: HeadingMediumType) {
  return (
    <>
      <h2 className={`text-4xl ${maxWidthXL ? `max-w-xl` : ``} bg-clip-text leading-normal text-transparent bg-linear-main-red font-bold flex w-fit 
            ${customClasses}`}>{heading}</h2>
    </>
  );
}
