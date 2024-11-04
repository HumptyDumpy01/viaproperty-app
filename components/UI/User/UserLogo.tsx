// 'use client';

type UserLogoType = {
  type: `user` | `landlord` | `blocked`;
  abbrInitials: string;
  // children: ReactNode;
}

export default function UserLogo({ type, abbrInitials }: UserLogoType) {
  return (
    <>
      <div
        className={`${type === `user` ? `bg-linear-main-dark-blue text-white ` :
          type === `landlord` ? `border-[1px] border-red-500` : `border-[1px] border-zinc-400`}
           text-xl flex items-center justify-center
         font-bold min-w-[72px] min-h-[72px] rounded-full`}>
        <span
          className={type === `landlord` ? `inline-block text-xl bg-clip-text text-transparent bg-linear-main-red font-bold` :
            type === `user` ? `` : `text-zinc-400 font-semibold`}>{abbrInitials}</span>
      </div>
    </>
  );
}
