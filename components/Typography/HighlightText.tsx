// 'use client';

type HighlightTextType = {
  text: string;
  style?: `red` | `black` | `grey`
  // children: ReactNode;
}

export default function HighlightText({ text, style = `red` }: HighlightTextType) {
  const redStyles = `text-red-500 inline-block font-semibold`;
  const blackStyles = `inline-block text-zinc-900 font-semibold`;
  const greyStyles = `text-zinc-500 inline-block font-semibold`;

  let chosenStyle = null;

  switch (style) {
    case `red`:
      chosenStyle = redStyles;
      break;
    case `black`:
      chosenStyle = blackStyles;
      break;
    case `grey`:
      chosenStyle = greyStyles;
  }

  return (
    <span className={chosenStyle}>{text}</span>
  );
}
