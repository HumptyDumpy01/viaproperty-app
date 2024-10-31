// 'use client';

type HighlightTextType = {
  text: string;
  style?: `red` | `black`
  // children: ReactNode;
}

export default function HighlightText({ text, style = `red` }: HighlightTextType) {
  const redStyles = `text-red-500 inline-block font-semibold`;
  const blackStyles = `inline-block text-zinc-900 font-semibold`;
  return (
    <span className={style === `red` ? redStyles : blackStyles}>{text}</span>
  );
}
