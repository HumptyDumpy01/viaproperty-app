'use client';

/*type BalanceType = {
  // children: ReactNode;
}*/

import { useState } from 'react';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import BalanceAndActivity from '@/components/AccountSettings/Balance/BalanceAndActivity';
import PendingRequests from '@/components/AccountSettings/Balance/PendingRequests';
import CompletedDeals from '@/components/AccountSettings/Balance/CompletedDeals';
import RejectedRequests from '@/components/AccountSettings/Balance/RejectedRequests';

type ActiveBalanceType = `Balance & Activity` | `Pending Requests` | `Rejected Requests` | `Completed Deals`;
export default function Balance(/*{  }: BalanceType*/) {
  const [activeBalanceSubPage, setActiveBalanceSubPage] = useState<ActiveBalanceType>(`Balance & Activity`);
  return (
    <div className={`max-w-screen-bp-896`}>
      <div className={`flex gap-2 items-center mb-9 overflow-x-auto scrollbar-thin`}>
        <ButtonActive color={`red`} size={`small`} onClick={() => setActiveBalanceSubPage('Balance & Activity')}
                      active={activeBalanceSubPage === 'Balance & Activity'}
                      label={`Balance & Activity`} />
        <ButtonActive color={`red`} size={`small`} onClick={() => setActiveBalanceSubPage('Pending Requests')}
                      active={activeBalanceSubPage === 'Pending Requests'}
                      label={`Pending Requests`} />
        <ButtonActive color={`red`} size={`small`} onClick={() => setActiveBalanceSubPage('Rejected Requests')}
                      active={activeBalanceSubPage === 'Rejected Requests'}
                      label={`Rejected Requests`} />
        <ButtonActive color={`red`} size={`small`} onClick={() => setActiveBalanceSubPage('Completed Deals')}
                      active={activeBalanceSubPage === 'Completed Deals'}
                      label={`Completed Deals`} />
      </div>

      {activeBalanceSubPage === `Balance & Activity` && (
        <>
          <BalanceAndActivity />
        </>
      )}
      {activeBalanceSubPage === `Pending Requests` && (
        <>
          <PendingRequests />
        </>
      )}

      {activeBalanceSubPage === `Rejected Requests` && (
        <>
          <RejectedRequests />
        </>
      )}

      {activeBalanceSubPage === `Completed Deals` && (
        <>
          <CompletedDeals />
        </>
      )}

    </div>
  )
    ;
}
