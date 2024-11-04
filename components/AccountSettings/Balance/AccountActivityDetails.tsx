// 'use client';


import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import Paragraph from '@/components/Typography/Paragraph';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import Pagination from '@/components/UI/Pagination/Pagination';
import { type ReactNode, useState } from 'react';

type AccountActivityDetailsType = {
  headingLabel: string;
  paragraph: ReactNode;
  activity: ReactNode;
  pagination: {
    visible?: boolean;
    showing: number;
    total: number;
    pages: number;
  }
  // children: ReactNode;
}


type AccountActivityFilterType = `Newest` | `Oldest`;

export default function
  AccountActivityDetails({
                           headingLabel,
                           paragraph,
                           activity,
                           pagination
                         }: AccountActivityDetailsType) {
  const [accountActivityFilter, setAccountActivityFilter] = useState<AccountActivityFilterType>(`Newest`);

  return (
    <>
      <div>
        <div className={`mb-8`}>
          <ViapropertyHeading customClasses={`mb-8`} label={headingLabel} headingSize={`md`} />
          <Paragraph text={paragraph}
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
        <div className={`flex justify-center flex-col gap-4`}>
          {activity}
        </div>
        <div>
          {pagination.visible && (
            <>
              <Pagination showing={pagination.showing} total={pagination.total} pages={pagination.pages} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
