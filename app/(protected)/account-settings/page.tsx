'use client';

/*type AccountSettingsPageType = {
  // children: ReactNode;
}*/

import MainContainer from '@/components/Layout/Container/MainContainer';
import { useRouter, useSearchParams } from 'next/navigation';
import NotFound from 'next/dist/client/components/not-found-error';
import { useEffect, useState } from 'react';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import AccountSettings from '@/components/AccountSettings/AccountSettings';

export type AccountSettingsPageType = `account-settings` | `chats` | `balance`;

export default function AccountSettingsPage(/*{  }: AccountSettingsPageType*/) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get('page') as AccountSettingsPageType | null;

  const availablePages = ['account-settings', 'chats'];

  if (page && !availablePages.includes(page)) {
    NotFound();
  }

  const [activePage, setActivePage] = useState<AccountSettingsPageType | null>(page);

  useEffect(() => {
    // @ts-ignore
    router.push(`?page=${activePage}`, undefined, { shallow: true });
  }, [activePage, router]);


  return (
    <MainContainer>
      <div className={`mt-11 `}>
        <div className={`max-w-screen-bp-896`}>
          <h1 className={`bg-clip-text text-transparent bg-linear-main-red font-bold
        text-5xl w-fit mb-8 leading-tight`}>Account Activities</h1>
          <p className={`leading-relaxed text-zinc-900 text-[15.5px] mb-9`}>Lorem ipsum dolor sit amet, consectetur
            adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. </p>

          <div className={`flex items-center gap-2.5 text-left mb-9 overflow-x-auto scrollbar-corner-red-400`}>
            <ButtonActive onClick={() => setActivePage('chats')} active={activePage === 'chats'} label={`Chats`} />
            <ButtonActive onClick={() => setActivePage('account-settings')} active={activePage === 'account-settings'}
                          label={`Account Settings`} />
            <ButtonActive onClick={() => setActivePage('balance')} active={activePage === 'balance'}
                          label={`Balance`} />
          </div>
        </div>

        {activePage === `account-settings` && (
          <>
            <AccountSettings />
          </>
        )}
      </div>
    </MainContainer>
  );
}
