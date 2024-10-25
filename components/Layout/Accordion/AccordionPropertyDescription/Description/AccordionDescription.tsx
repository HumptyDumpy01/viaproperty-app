// 'use client';

type AccordionDescriptionType = {
  text?: string;
  // children: ReactNode;
}

const boilerplateText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. `;

export default function AccordionDescription({ text = boilerplateText }: AccordionDescriptionType) {
  return (
    <>
      <p className={`leading-relaxed`}>{text}</p>
    </>
  );
}
