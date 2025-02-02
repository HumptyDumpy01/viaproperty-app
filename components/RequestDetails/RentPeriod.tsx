// 'use client';

type RentPeriodType = {
  from: string;
  to: string;
  // children: ReactNode;
}

import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';

export default function RentPeriod({ from, to }: RentPeriodType) {
  return (
    <>
      <div className={`mb-11`}>
        <ViapropertyHeading customClasses={`mb-8`} label={`Rent Period`} headingSize={`md`} />
        <div className={`flex gap-12 flex-col bp-620:flex-row`}>
          <div>
            <ActivityDetail
              requestType={`formal`}
              customContainerClasses={``}
              messageFont={`text-[19px] font-medium`}
              trashCanVisibility={false} circleColor={`emptyBorderRed`}
              iconType={
                AccountActivityIconsTypeEnum.time} date={`FROM`}
              message={from} />
          </div>
          <div>
            <ActivityDetail
              requestType={`formal`}
              customContainerClasses={``}
              messageFont={`text-[19px] font-medium`}
              trashCanVisibility={false} circleColor={`emptyBorderRed`}
              iconType={
                AccountActivityIconsTypeEnum.time} date={`TO`}
              message={to} />
          </div>

        </div>
      </div>
    </>
  );
}
