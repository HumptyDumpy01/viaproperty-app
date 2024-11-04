// 'use client';

/*type BlockedUsersType = {
  // children: ReactNode;
}*/

import ChatPreview from '@/components/AccountSettings/Chats/ChatPreview';

export default function BlockedUsers(/*{  }: BlockedUsersType*/) {
  return (
    <div className={`flex flex-col justify-center gap-5`}>
      <ChatPreview
        userType={`blocked`}
        actionButton={{
          sortParams: [`Unblock`],
          position: `-top-[60px] right-3`
        }}
        online={true}
        href={`#`}
        message={``}
        lastMessageCreated={`Blocked at August 19, 13:55`} showOnlineStatus={false} abbrInitials={`N.B`}
        initials={`Nick Baker`} />
    </div>
  );
}
