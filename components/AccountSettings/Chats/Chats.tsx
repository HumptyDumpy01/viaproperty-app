'use client';

/*type ChatsType = {
  // children: ReactNode;
}*/

import BigInput from '@/components/UI/Input/BigInput';
import Button from '@/components/UI/Button/Button';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import { useState } from 'react';
import AllChats from '@/components/AccountSettings/Chats/AllChats';
import FavoriteChats from '@/components/AccountSettings/Chats/FavoriteChats';
import BlockedUsers from '@/components/AccountSettings/Chats/BlockedUsers';


type ActiveChatsType = `All` | `Favorites` | `Blocked Users`;

export default function Chats(/*{  }: ChatsType*/) {
  const [activeChats, setActiveChats] = useState<ActiveChatsType>(`All`);
  return (
    <div className={`max-w-screen-bp-896`}>
      <div className={`flex justify-center flex-col`}>
        <form className={`flex bp-620:items-center 
        gap-5 flex-col bp-620:flex-row mb-4`}>
          <BigInput placeholder={`Search by context`} name={`searchTerm`} type={`text`} />
          <div>
            <Button type={`submit`} label={`Search`} mode={`lg`} linearGradient />
          </div>
        </form>
        <div>
          <ButtonActive color={`red`} size={`small`}
                        active={true}
                        label={`Powered by AI Layla 2.0`} />
        </div>
      </div>

      <div className={`flex gap-2 items-center my-8`}>
        <ButtonActive color={`red`} size={`small`} onClick={() => setActiveChats('All')}
                      active={activeChats === 'All'}
                      label={`All`} />
        <ButtonActive color={`red`} size={`small`} onClick={() => setActiveChats('Favorites')}
                      active={activeChats === 'Favorites'}
                      label={`Favorites`} />
        <ButtonActive color={`red`} size={`small`} onClick={() => setActiveChats('Blocked Users')}
                      active={activeChats === 'Blocked Users'}
                      label={`Blocked Users`} />
      </div>
      <div className={`flex flex-col`}>
        {activeChats === `All` && (
          <>
            <AllChats />
          </>
        )}
        {activeChats === `Favorites` && (
          <>
            <FavoriteChats />
          </>
        )}

        {activeChats === `Blocked Users` && (
          <>
            <BlockedUsers />
          </>
        )}
      </div>
    </div>
  );
}
