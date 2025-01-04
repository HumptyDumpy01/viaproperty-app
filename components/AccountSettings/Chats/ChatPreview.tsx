// 'use client';

type ChatPreviewType = {
  href: string;
  abbrInitials: string;
  initials: string;
  lastMessageCreated: string;
  message: string;
  showOnlineStatus?: boolean;
  online: boolean;
  actionButton: {
    sortParams: string[];
    position?: string;
  }
  userType?: `USER` | `LANDLORD` | `BLOCKED`;
  // children: ReactNode;
}

import Link from 'next/link';
import UserLogo from '@/components/UI/User/UserLogo';
import ActionBadge from '@/components/UI/Badge/ActionBadge';

export default function
  ChatPreview({
                href,
                message,
                lastMessageCreated,
                abbrInitials,
                initials,
                online,
                actionButton,
                showOnlineStatus = true,
                userType = `LANDLORD`
              }: ChatPreviewType) {
  const truncatedMessage = message.length > 90 ? message.slice(0, 90) + '..' : message;
  return (
    <>
      <div className={`flex bp-896:justify-between flex-col bp-896:flex-row bp-896:items-center gap-4 bp-896:gap-0`}>
        <Link href={href} className={`flex items-center gap-5`}>
          <div>
            <UserLogo type={userType} abbrInitials={abbrInitials} />
          </div>
          <div className={`flex flex-col justify-center gap-1`}>
            <div className={`flex items-center gap-3`}>
              <h2 className={`text-blue-950 font-medium`}>{initials}</h2>
              {showOnlineStatus && (
                <span className={`inline-block h-2 w-2 ${online ? `bg-green-500` : `bg-red-600`} rounded-full`}></span>
              )}
              <span className={`text-zinc-400 text-sm`}>{lastMessageCreated}</span>
            </div>
            <div className={`flex`}>
              <p className={`text-zinc-600 max-w-screen-bp-620 text-sm leading-relaxed`}>{truncatedMessage}</p>
            </div>
          </div>
        </Link>
        <div>
          <ActionBadge
            sortParams={actionButton.sortParams}
            position={!actionButton.position ? `-top-[145px] right-3` : actionButton.position} />
        </div>
      </div>
    </>
  );
}
