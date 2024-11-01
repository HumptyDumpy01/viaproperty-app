// 'use client';

type BadgeSmallType = {
  active: boolean;
  label: string;
  // children: ReactNode;
}

export default function BadgeSmall({ active, label }: BadgeSmallType) {
  const activeStyles = `bg-linear-main-red text-white w-fit`;
  const inactiveStyles = `text-zinc-400 border border-zinc-200`;

  return (
    <>
      <div className={`${active ? activeStyles : inactiveStyles} rounded px-2 w-fit`}>
        <span className={`text-nowrap`}>{label}</span>
      </div>
    </>
  );
}
