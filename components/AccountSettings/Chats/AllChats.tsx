// 'use client';

/*type AllChatsType = {
  // children: ReactNode;
}*/

import ChatPreview from '@/components/AccountSettings/Chats/ChatPreview';
import Pagination from '@/components/UI/Pagination/Pagination';

export default function AllChats(/*{  }: AllChatsType*/) {
  return (
    <>
      <div className={`flex flex-col justify-center gap-5 w-full`}>
        <ChatPreview
          actionButton={{
            sortParams: [`To Favorites`, `Delete`, `Block User`]
          }}
          online={true}
          href={`/account-settings/chats/1`}
          message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque explicabo ipsa iusto mollitia nam nemo sed soluta suscipit unde!`}
          lastMessageCreated={`August 19, 13:55`} abbrInitials={`N.B`} initials={`Nick Baker`} />
        <ChatPreview
          actionButton={{
            sortParams: [`To Favorites`, `Delete`, `Block User`]
          }}
          online={false}
          href={`/account-settings/chats/1`}
          message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque explicabo ipsa iusto mollitia nam nemo sed soluta suscipit unde!`}
          lastMessageCreated={`August 19, 13:55`} abbrInitials={`N.B`} initials={`Nick Baker`} />
        <ChatPreview
          actionButton={{
            sortParams: [`To Favorites`, `Delete`, `Block User`]
          }}
          online={false}
          href={`/account-settings/chats/1`}
          message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque explicabo ipsa iusto mollitia nam nemo sed soluta suscipit unde!`}
          lastMessageCreated={`August 19, 13:55`} abbrInitials={`N.B`} initials={`Nick Baker`} />
        <ChatPreview
          actionButton={{
            sortParams: [`To Favorites`, `Delete`, `Block User`]
          }}
          online={false}
          href={`/account-settings/chats/1`}
          message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque explicabo ipsa iusto mollitia nam nemo sed soluta suscipit unde!`}
          lastMessageCreated={`August 19, 13:55`} abbrInitials={`N.B`} initials={`Nick Baker`} />
        <ChatPreview
          actionButton={{
            sortParams: [`To Favorites`, `Delete`, `Block User`]
          }}
          online={true}
          href={`/account-settings/chats/1`}
          message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque explicabo ipsa iusto mollitia nam nemo sed soluta suscipit unde!`}
          lastMessageCreated={`August 19, 13:55`} abbrInitials={`N.B`} initials={`Nick Baker`} />
        <ChatPreview
          actionButton={{
            sortParams: [`To Favorites`, `Delete`, `Block User`]
          }}
          online={true}
          href={`/account-settings/chats/1`}
          message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque explicabo ipsa iusto mollitia nam nemo sed soluta suscipit unde!`}
          lastMessageCreated={`August 19, 13:55`} abbrInitials={`N.B`} initials={`Nick Baker`} />
        <ChatPreview
          actionButton={{
            sortParams: [`To Favorites`, `Delete`, `Block User`]
          }}
          online={false}
          href={`/account-settings/chats/1`}
          message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque explicabo ipsa iusto mollitia nam nemo sed soluta suscipit unde!`}
          lastMessageCreated={`August 19, 13:55`} abbrInitials={`N.B`} initials={`Nick Baker`} />
        <ChatPreview
          actionButton={{
            sortParams: [`To Favorites`, `Delete`, `Block User`]
          }}
          online={false}
          href={`/account-settings/chats/1`}
          message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque explicabo ipsa iusto mollitia nam nemo sed soluta suscipit unde!`}
          lastMessageCreated={`August 19, 13:55`} abbrInitials={`N.B`} initials={`Nick Baker`} />
        <ChatPreview
          actionButton={{
            sortParams: [`To Favorites`, `Delete`, `Block User`]
          }}
          online={true}
          href={`/account-settings/chats/1`}
          message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque explicabo ipsa iusto mollitia nam nemo sed soluta suscipit unde!`}
          lastMessageCreated={`August 19, 13:55`} abbrInitials={`N.B`} initials={`Nick Baker`} />
        <ChatPreview
          actionButton={{
            sortParams: [`To Favorites`, `Delete`, `Block User`]
          }}
          online={true}
          href={`/account-settings/chats/1`}
          message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque explicabo ipsa iusto mollitia nam nemo sed soluta suscipit unde!`}
          lastMessageCreated={`August 19, 13:55`} abbrInitials={`N.B`} initials={`Nick Baker`} />
      </div>
      <div>
        <Pagination currentPage={1} onPageChange={() => {
        }} showing={10} total={38} pages={4} />
      </div>
    </>
  );
}
