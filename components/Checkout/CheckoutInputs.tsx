// 'use client';

/*type CheckoutInputsType = {
  // children: ReactNode;
}*/

import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';
import React from 'react';

export default function CheckoutInputs(/*{  }: CheckoutInputsType*/) {
  return (
    <>
      <div className={`flex flex-col gap-5`}>
        <div>
          <ActivityDetail
            dollarColor={`red`}
            customContainerClasses={``}
            messageFont={`text-[19px] font-medium`}
            trashCanVisibility={false} circleColor={`emptyBorderRed`}
            iconType={AccountActivityIconsTypeEnum.dollar} date={`$20,999`}
            message={`30 Nights`} />
        </div>
        <div>
          <ActivityDetail
            dollarColor={`red`}
            customContainerClasses={``}
            messageFont={`text-[19px] font-medium`}
            trashCanVisibility={false} circleColor={`emptyBorderRed`}
            iconType={AccountActivityIconsTypeEnum.dollar} date={`-$21,999`}
            message={`Discount 20%`} />
        </div>
        <div>
          <ActivityDetail
            dollarColor={`red`}
            customContainerClasses={``}
            messageFont={`text-[19px] font-medium`}
            trashCanVisibility={false} circleColor={`emptyBorderRed`}
            iconType={AccountActivityIconsTypeEnum.dollar} date={`$1997`}
            message={`Parking Slot`} />
        </div>
        <div>
          <ActivityDetail
            dollarColor={`red`}
            customContainerClasses={``}
            messageFont={`text-[19px] font-medium`}
            trashCanVisibility={false} circleColor={`emptyBorderRed`}
            iconType={AccountActivityIconsTypeEnum.dollar} date={`$444`}
            message={`Allow Pet`} />
        </div>
        <div>
          <ActivityDetail
            customContainerClasses={``}
            messageFont={`text-[19px] font-medium`}
            trashCanVisibility={false} circleColor={`filledRed`}
            iconType={AccountActivityIconsTypeEnum.dollar} date={`TOTAL`}
            message={`$24,898`} />
        </div>
      </div>
    </>
  );
}
