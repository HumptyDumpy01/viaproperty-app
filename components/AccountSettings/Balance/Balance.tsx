'use client';

/*type BalanceType = {
  // children: ReactNode;
}*/

import { useState } from 'react';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import Button from '@/components/UI/Button/Button';
import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';

type ActiveBalanceType = `Balance & Activity` | `Pending Requests` | `Rejected Requests` | `Completed Deals`;
type AccountActivityFilterType = `Newest` | `Oldest`;

export default function Balance(/*{  }: BalanceType*/) {
  const [activeBalanceSubPage, setActiveBalanceSubPage] = useState<ActiveBalanceType>(`Balance & Activity`);
  const [accountActivityFilter, setAccountActivityFilter] = useState<AccountActivityFilterType>(`Newest`);

  return (
    <div className={`max-w-screen-bp-896`}>
      <div className={`flex gap-2 items-center mb-9`}>
        <ButtonActive color={`red`} size={`small`} onClick={() => setActiveBalanceSubPage('Balance & Activity')}
                      active={activeBalanceSubPage === 'Balance & Activity'}
                      label={`Balance & Activity`} />
        <ButtonActive color={`red`} size={`small`} onClick={() => setActiveBalanceSubPage('Pending Requests')}
                      active={activeBalanceSubPage === 'Pending Requests'}
                      label={`Pending Requests`} />
        <ButtonActive color={`red`} size={`small`} onClick={() => setActiveBalanceSubPage('Completed Deals')}
                      active={activeBalanceSubPage === 'Completed Deals'}
                      label={`Completed Deals`} />
      </div>
      <div className={`flex flex-col justify-center gap-3.5 mb-9`}>
        <h1 className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-[50px] w-fit`}>Current
          Balance</h1>
        <span
          className={`bg-clip-text text-transparent bg-linear-main-dark-blue font-bold text-7xl w-fit`}>$144,998</span>
      </div>
      <Paragraph text={(
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, <HighlightText text={`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.`} />
        </>
      )}
      />
      <div className={`mt-9 mb-16`}>
        <Button linearGradient label={`Withdraw Funds`} color={`red`} />
      </div>

      <div className={`mb-8`}>
        <h2 className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-4xl w-fit mb-8`}>Account
          Activity</h2>
        <Paragraph text={(
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, <HighlightText text={`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.`} />
          </>
        )}
        />
      </div>
      <div className={`flex items-center justify-between mb-9`}>
        <div className={`flex gap-2 items-center`}>
          <ButtonActive color={`red`} size={`small`} onClick={() => setAccountActivityFilter('Newest')}
                        active={accountActivityFilter === 'Newest'}
                        label={`Newest`} />
          <ButtonActive color={`red`} size={`small`} onClick={() => setAccountActivityFilter('Oldest')}
                        active={accountActivityFilter === 'Oldest'}
                        label={`Oldest`} />
        </div>
        <div>
          <ButtonActive color={`red`} size={`small`}
                        active={false}
                        label={`Clear all`} />
        </div>
      </div>
      <div className={`flex flex-col justify-center gap-4`}>

        <ActivityDetail iconType={AccountActivityIconsTypeEnum.dollar} date={`August 29, 14:33`} message={(<>
          You withdrew <HighlightText text={`$130,999`} /> from your balance to ****4998 card.
        </>)} />
      </div>

    </div>
  )
    ;
}
