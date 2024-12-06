// 'use client';

import UserLogo from '@/components/UI/User/UserLogo';
import { UserType } from '@/components/PropertyDescription/Layout/PropertyComments';

type UserDataType = {
  type: UserType;
  createdAt: string;
  initials: string;
  abbrInitials: string;
  // children: ReactNode;
}

export default function User({ type, createdAt, abbrInitials, initials }: UserDataType) {
  const userSpan = `inline-block text-zinc-400 text-sm`;
  const userH3 = `text-[16px] text-zinc-600 font-medium`;

  const landlordSpan = `text-sm text-zinc-400`;
  const landlordH3 = `font-medium text-zinc-800`;
  return (
    <>
      <div className={`flex gap-4 items-center`}>
        <UserLogo type={type} abbrInitials={abbrInitials} />
        <div className={`flex flex-col`}>
          <h3 className={type === `USER` ? userH3 : landlordH3}>{initials}</h3>
          <span className={type === `USER` ? userSpan : landlordSpan}>{createdAt}</span>
        </div>
      </div>
    </>
  );
}
