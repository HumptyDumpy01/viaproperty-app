// 'use client';

/*type FavoriteChatsType = {
  // children: ReactNode;
}*/

import ChatPreview from '@/components/AccountSettings/Chats/ChatPreview';

export default function FavoriteChats(/*{  }: FavoriteChatsType*/) {
  return (
    <>
      <div className={`flex flex-col justify-center gap-5`}>
        <ChatPreview
          actionButton={{
            sortParams: [`Remove`, `Block User`],
            position: `-top-[105px] right-3`
          }}
          online={true}
          href={`/account-settings/chats/1`}
          message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque explicabo ipsa iusto mollitia nam nemo sed soluta suscipit unde!`}
          lastMessageCreated={`August 19, 13:55`} abbrInitials={`N.B`} initials={`Nick Baker`} />
      </div>
    </>
  );
}
