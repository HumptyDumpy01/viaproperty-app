// 'use client';

type UserLogoType = {
  type: `user` | `landlord`;
  abbrInitials: string;
  // children: ReactNode;
}

export default function UserLogo({ type, abbrInitials }: UserLogoType) {
  return (
    <>
      <div
        className={`${type === `user` ? `bg-linear-main-dark-blue text-white ` : `border-[1px] border-red-500`} text-xl flex items-center justify-center font-bold w-[72px] h-[72px] rounded-full`}>
        <span
          className={type === `landlord` ? `inline-block text-xl bg-clip-text text-transparent bg-linear-main-red font-bold` : ``}>{abbrInitials}</span>
      </div>

    </>
  );
}
