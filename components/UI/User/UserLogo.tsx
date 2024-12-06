// 'use client';

type UserLogoType = {
  type: `USER` | `LANDLORD` | `BLOCKED`;
  abbrInitials: string;
  // children: ReactNode;
}

export default function UserLogo({ type, abbrInitials }: UserLogoType) {
  return (
    <>
      <div
        className={`${type === `USER` ? `bg-linear-main-dark-blue text-white ` :
          type === `LANDLORD` ? `border-[1px] border-red-500` : `border-[1px] border-zinc-400`}
           text-xl flex items-center justify-center
         font-bold min-w-[72px] min-h-[72px] rounded-full`}>
        <span
          className={type === `LANDLORD` ? `inline-block text-xl bg-clip-text text-transparent bg-linear-main-red font-bold` :
            type === `USER` ? `` : `text-zinc-400 font-semibold`}>{abbrInitials}</span>
      </div>
    </>
  );
}
