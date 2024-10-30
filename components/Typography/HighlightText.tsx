// 'use client';

type HighlightTextType = {
  text: string;
  // children: ReactNode;
}

export default function HighlightText({ text }: HighlightTextType) {
  return (
    <span className={`text-red-500 inline-block font-semibold`}>{text}</span>
  );
}
