'use client';

import { ReactNode, Suspense, useEffect, useState } from 'react';
import MainContainer from '@/components/Layout/Container/MainContainer';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import LoadingScreen from '@/components/Layout/Loading/LoadingScreen';

type AccountSettingsContainerType = {
  children: ReactNode;
}

type ActiveAccSettingsRoute = `` | `chats` | `balance`;

export default function AccountSettingsContainer({ children }: AccountSettingsContainerType) {
  const [activePage, setActivePage] = useState<ActiveAccSettingsRoute>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window) {
      let newPath = window.location.href.split(
        `/account-settings/`)[1] || `` as ActiveAccSettingsRoute;

      if (newPath !== `` && newPath !== `chats` && newPath !== `balance`) {
        newPath = ``;
      }


      // @ts-ignore
      setActivePage(() => newPath);
      setLoading(() => false);
    }

  }, []);

  if (loading) {
    return <LoadingScreen />;
  }


  function handleChangeRoute(route: ActiveAccSettingsRoute) {
    if (activePage === route) {
      return;
    }

    if (window) {
      window.location.href = `/account-settings/${route}`;
    }
  }

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
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
                <ButtonActive onClick={() => handleChangeRoute(`chats`)} active={activePage === `chats`}
                              label={`Chats`} />
                <ButtonActive onClick={() => handleChangeRoute(``)}
                              active={activePage === ``}
                              label={`Account Settings`} />
                <ButtonActive onClick={() => handleChangeRoute(`balance`)} active={activePage === `balance`}
                              label={`Balance`} />
              </div>
            </div>
            {children}
          </div>
        </MainContainer>
      </Suspense>
    </>
  );
}
