'use client';

import ButtonActive from '@/components/UI/Button/ButtonActive';
import SortItems from '@/components/Layout/Filter/Sorting/SortItems';
import InputSearch from '@/components/UI/Input/InputSearch';
import BadgeSmall from '@/components/UI/Badge/BadgeSmall';
import CardPropertyHorizontal from '@/components/UI/Card/CardPropertyHorizontal';
import PropertyImg1 from '@/assets/properties/property-1.png';
import Pagination from '@/components/UI/Pagination/Pagination';
import { useState } from 'react';
import { ActiveFilterType } from '@/components/AccountSettings/MyAdverts/MyAdverts';

type AccountDetailsType = {
  heading: string;
  searchPlaceholder: string;
  cards: {
    btnLink: {
      href: string;
      label: string;
    };
    btnSecondary: {
      label: string;
      visible: boolean;
    };
  }
  // children: ReactNode;
}

export default function AccountDetails({ heading, searchPlaceholder, cards }: AccountDetailsType) {
  const [activeAdvertFilter, setActiveAdvertFilter] = useState<ActiveFilterType>(`all`);
  return (
    <div>
      <div className={`flex items-center justify-between mb-7 max-w-screen-bp-896`}>
        <div className={`flex items-center gap-2`}>
          <div className={`flex gap-2 items-center`}>
            <ButtonActive color={`red`} size={`small`} onClick={() => setActiveAdvertFilter('all')}
                          active={activeAdvertFilter === 'all'}
                          label={`All`} />
            <ButtonActive color={`red`} size={`small`} onClick={() => setActiveAdvertFilter('rent')}
                          active={activeAdvertFilter === 'rent'}
                          label={`Rent`} />

            <ButtonActive color={`red`} size={`small`} onClick={() => setActiveAdvertFilter('sell')}
                          active={activeAdvertFilter === 'sell'}
                          label={`Sell`} />
          </div>
        </div>
        <SortItems sortParams={[`Sort by Newest`, `Sort by Oldest`]} />
      </div>
      <div>
        <h2
          className={`bg-clip-text text-transparent w-fit bg-linear-main-red font-bold text-[40px] mb-7`}>{heading}</h2>
        <div className={`flex mb-4`}>
          <InputSearch placeholder={searchPlaceholder} />
        </div>
        <div className={`flex items-center gap-2 mb-6`}>
          <span className={`text-zinc-600 font-semibold`}>Current Filter:</span>
          <div className={`flex items-center gap-2`}>
            <BadgeSmall label={`All`} active={true} />
            <BadgeSmall label={`Sort by Newest`} active={false} />
          </div>
        </div>
        <div className={`mb-6`}>
          <p className={`font-semibold text-zinc-500`}>Results: <span>19</span></p>
        </div>
        <div className={`grid bp-896:grid-cols-2 gap-y-9 gap-8 pb-9`}>

          {Array.from({ length: 6 }).map((_, i) => (
            <CardPropertyHorizontal
              key={i}
              btnSecondary={cards.btnSecondary}
              btnLink={cards.btnLink} type={`rent`} createdAt={`4 days ago`} paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod temporconsectetur adipiscing elit..`}
              heading={`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}
              imgAlt={`Property Image`} imgSrc={PropertyImg1} />
          ))}
        </div>
        <div>
          <Pagination showing={6} total={19} pages={3} />
        </div>
      </div>
    </div>
  );
}
