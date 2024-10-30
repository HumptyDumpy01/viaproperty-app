// 'use client';

type BadgeStagesType = {
  state: `disabled` | `active` | `completed`;
  label: string;
  object: `stepOne` | `stepTwo` | `stepThree` | `stepFour` | `finishingSteps`;
  // children: ReactNode;
}

export default function BadgeStages({ state, label }: BadgeStagesType) {
  const badgeActive = `bg-clip-text text-transparent bg-linear-main-dark-blue font-bold rounded-full border-zinc-200`;
  const badgeDisabled = `bg-clip-text text-zinc-400 font-medium border-zinc-200`;
  const badgeComplete = `bg-clip-text text-green-600 font-bold border-green-600`;

  let activeClass = null;
  switch (state) {
    case `disabled`:
      activeClass = badgeDisabled;
      break;
    case `active`:
      activeClass = badgeActive;
      break;
    case `completed`:
      activeClass = badgeComplete;
      break;
    default:
      break;
  }

  return (
    <>
      <span
        className={`inline-block px-4 py-2 w-fit border rounded-full 
        ${state === `disabled` ? `cursor-not-allowed` : `cursor-pointer`} ${activeClass}`}>{label}</span>
    </>
  );
}
