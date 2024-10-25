// 'use client';

type BadgeTagType = {
  metric: string;
  number?: number;
  abbreviation?: string;
  // children: ReactNode;
}

export default function BadgeTag({ metric, number, abbreviation }: BadgeTagType) {
  return (
    <>
      <p className={`text-sm font-semibold text-zinc-800 whitespace-nowrap`}>{metric}{number ? `:` : ``} <span
        className={`inline-block`}>{number}</span> {abbreviation}
      </p>
    </>
  );
}
