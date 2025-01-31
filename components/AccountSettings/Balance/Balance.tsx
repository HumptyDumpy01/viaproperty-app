'use client';

import LoadingScreen from '@/components/Layout/Loading/LoadingScreen';
import { ReactNode, useEffect, useState } from 'react';
import ButtonActive from '@/components/UI/Button/ButtonActive';

type BalanceType = {
  children: ReactNode;
}

type ActiveBalanceType = `activity` | `pending-requests` | `rejected-requests` | `completed-deals`;

export default function Balance({ children }: BalanceType) {
  const [activeBalanceSubPage, setActiveBalanceSubPage] = useState<ActiveBalanceType>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const possibleBalanceSubPages = ['activity', `pending-requests`, `rejected-requests`, `completed-deals`];
    if (window) {
      let newPath = window.location.href.split(
        `/account-settings/balance/`)[1] || `activity` as ActiveBalanceType;

      if (!possibleBalanceSubPages.includes(newPath)) {
        newPath = `balance/activity`;
      }


      // @ts-ignore
      setActiveBalanceSubPage(() => newPath);
      setLoading(() => false);
    }

  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  function handleRedirection(route: ActiveBalanceType) {
    if (activeBalanceSubPage === route) {
      return;
    }

    if (window) {
      window.location.href = `/account-settings/balance/${route}`;
    }
  }

  return (
    <div className={`max-w-screen-bp-896`}>
      <div className={`flex gap-2 items-center mb-9 overflow-x-auto scrollbar-thin`}>
        <ButtonActive color={`red`} size={`small`} onClick={() => handleRedirection('activity')}
                      active={activeBalanceSubPage === 'activity'}
                      label={`Balance & Activity`} />
        <ButtonActive color={`red`} size={`small`} onClick={() => handleRedirection('pending-requests')}
                      active={activeBalanceSubPage === 'pending-requests'}
                      label={`Pending Requests`} />
        <ButtonActive color={`red`} size={`small`} onClick={() => handleRedirection('rejected-requests')}
                      active={activeBalanceSubPage === 'rejected-requests'}
                      label={`Rejected Requests`} />
        <ButtonActive color={`red`} size={`small`} onClick={() => handleRedirection('completed-deals')}
                      active={activeBalanceSubPage === 'completed-deals'}
                      label={`Completed Deals`} />
      </div>
      {children}
    </div>
  );
}
