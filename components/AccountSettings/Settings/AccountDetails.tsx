'use client';

import ButtonActive from '@/components/UI/Button/ButtonActive';
import ActionBadge from '@/components/UI/Badge/ActionBadge';
import InputSearch from '@/components/UI/Input/InputSearch';
import BadgeSmall from '@/components/UI/Badge/BadgeSmall';
import CardPropertyHorizontal from '@/components/UI/Card/CardPropertyHorizontal';
import Pagination from '@/components/UI/Pagination/Pagination';
import React, { SetStateAction, useEffect, useState } from 'react';
import { ActiveFilterType } from '@/components/AccountSettings/Settings/MyAdverts/MyAdverts';
import { PropertyForType } from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';

export type CardItemsType = {
  id: string;
  title: string;
  propertyFor: PropertyForType,
  description: {
    overall: string;
    priceAndTaskHistory: {
      price: string;
    }
  },
  images: string[],
  createdAt: string;
}

type ActiveSortingFilterType = `Sort by Newest` | `Sort by Oldest`;

type AccountDetailsType = {
  heading: string;
  searchPlaceholder: string;
  cards: {
    btnLink: {
      label: string;
    };
    btnSecondary: {
      label: string;
      visible: boolean;
    };
  },
  cardItems: CardItemsType[];
  itemType: `wishlist` | `advert` | `purchase`;
  errorMessage?: string;
  totalItems: number;
  onPageChange: (pageNumber: number) => void;
  currentPageState: { value: number, setValue: React.Dispatch<SetStateAction<number>> }
  skipAmount: number;
  // children: ReactNode;
}

export default function
  AccountDetails({
                   heading,
                   searchPlaceholder,
                   cards,
                   cardItems,
                   itemType,
                   errorMessage = ``,
                   totalItems,
                   onPageChange,
                   currentPageState,
                   skipAmount
                 }: AccountDetailsType) {
  const [totalResults, setTotalResults] = useState<number>();
  const [activeCardItemsFilter, setActiveCardItemsFilter] = useState<ActiveFilterType>(`All`);
  const [activeSortingFilter, setActiveSortingFilter] = useState<ActiveSortingFilterType>(`Sort by Newest`);
  const { value: currentPage, setValue: setCurrentPage } = currentPageState;

  // calculate the total amount of pages overall, based on the fact that each page should
  // have 4 items
  const totalPages = Math.ceil(totalItems / 4);

  const [copiedCardItems, setCopiedCardItems] = useState<CardItemsType[]>([]);

  useEffect(() => {
    setTotalResults(() => totalItems);
    setCopiedCardItems(cardItems);
  }, [cardItems, totalItems]);

  function handleWhenSortParamClicked(param: string) {
    setActiveSortingFilter(() => param as ActiveSortingFilterType);
  }


  function handlePaginationBtnClick(pageNumber: number) {
    onPageChange(pageNumber);
  }

  return (
    <div>
      <div className={`flex items-center justify-between mb-7 max-w-screen-bp-896`}>
        <div className={`flex items-center gap-2`}>
          <div className={`flex gap-2 items-center`}>
            <ButtonActive disabledTooltipText={`The Filtering is disabled: No Items.`} disabled={cardItems.length === 0}
                          color={`red`} size={`small`}
                          onClick={() => setActiveCardItemsFilter('All')}
                          active={activeCardItemsFilter === 'All'}
                          label={`All`} />
            <ButtonActive
              disabledTooltipText={`The Filtering is disabled: No Items.`}
              disabled={cardItems.length === 0} color={`red`} size={`small`}
              onClick={() => setActiveCardItemsFilter('Rent')}
              active={activeCardItemsFilter === 'Rent'}
              label={`Rent`} />

            <ButtonActive
              disabledTooltipText={`The Filtering is disabled: No Items.`}
              disabled={cardItems.length === 0} color={`red`} size={`small`}
              onClick={() => setActiveCardItemsFilter('Sell')}
              active={activeCardItemsFilter === 'Sell'}
              label={`Sell`} />
          </div>
        </div>
        <ActionBadge disabledTooltipText={`Sorting is disabled: No items.`} disabled={cardItems.length === 0}
                     whenParamClicked={handleWhenSortParamClicked}
                     sortParams={[`Sort by Newest`, `Sort by Oldest`]} />
      </div>
      <div>
        <h2
          className={`bg-clip-text text-transparent w-fit bg-linear-main-red font-bold text-[40px] mb-7
          account-details-heading`}>{heading}</h2>
        <div className={`flex mb-4`}>
          <InputSearch disabled={cardItems.length === 0} placeholder={searchPlaceholder} />
        </div>
        <div className={`flex items-center gap-2 mb-6`}>
          <span className={`text-zinc-600 font-semibold`}>Current Filter:</span>
          <div className={`flex items-center gap-2`}>
            <BadgeSmall label={activeCardItemsFilter} active={true} />
            <BadgeSmall label={activeSortingFilter} active={false} />
          </div>
        </div>
        <div className={`mb-6`}>
          <p className={`font-semibold text-zinc-500`}>Results: <span>{totalItems}</span></p>
        </div>
        <div className={`grid bp-896:grid-cols-2 gap-y-9 gap-8 pb-9`}>

          {errorMessage && (
            <ErrorMessage errorMessage={errorMessage} />
          )}

          {!errorMessage && copiedCardItems.length === 0 && (
            <>
              <p className={`text-zinc-800 font-semibold text-2xl text-center`}>Oops! No Items to be seen here!
                Let&#39;s add
                some!</p>
            </>
          )}
          {copiedCardItems.length > 0 && copiedCardItems.map((item, i) => {
            let href = ``;

            switch (itemType) {
              case 'wishlist':
                href = `/properties/${item.id}`;
                break;
              case 'advert':
                href = `/account-settings/edit-property-advert/${item.id}`;
                break;
              case 'purchase':
                href = `/account-settings/purchase-details/${item.id}`;
                break;
            }

            return <CardPropertyHorizontal
              price={item.description.priceAndTaskHistory.price}
              key={item.id}
              btnSecondary={cards.btnSecondary}
              btnLink={{ href, label: cards.btnLink.label }} type={item.propertyFor} createdAt={item.createdAt}
              paragraph={item.description.overall}
              heading={item.title}
              imgAlt={`${item.title} Image`} imgSrc={item.images[0]} />;
          })}
        </div>
        {totalResults && totalResults > 4 && (
          <>
            <div>
              <Pagination afterPaginationBtnClickedConfig={{ selector: `.account-details-heading`, top: false }}
                          currentPage={currentPage} onPageChange={handlePaginationBtnClick}
                          showing={cardItems.length + skipAmount}
                          total={totalItems} pages={totalPages} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
