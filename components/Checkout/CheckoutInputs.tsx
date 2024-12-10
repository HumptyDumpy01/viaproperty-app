// 'use client';

import { PropertyOnSaleType } from '@/components/Layout/Sidebar/ViapropertySidebar';
import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';
import React from 'react';
import { transformStrToNum } from '@/utils/functions/transformStrToNum';
import { PropertyForType } from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';

type CheckoutInputsType = {
  selectedExtras: { checked: boolean; label: string; price: number }[];
  onSale: PropertyOnSaleType;
  totalPrice: number;
  propertyPrice: string;
  propertyFor: PropertyForType;
  // children: ReactNode;
}

export default function
  CheckoutInputs({
                   selectedExtras,
                   totalPrice,
                   onSale,
                   propertyPrice,
                   propertyFor
                 }: CheckoutInputsType) {
  const calculateTheDiscount = onSale.isOnSale ? transformStrToNum(propertyPrice) - transformStrToNum(onSale.newPrice!) : 0;

  return (
    <>
      <div className={`flex flex-col gap-5`}>
        <div>
          <ActivityDetail
            dollarColor={`red`}
            customContainerClasses={``}
            messageFont={`text-[19px] font-medium`}
            trashCanVisibility={false} circleColor={`emptyBorderRed`}
            iconType={AccountActivityIconsTypeEnum.dollar} date={`Property price`}
            message={`${propertyPrice}${propertyFor === `rent` ? `/day` : ``}`} />
        </div>

        {onSale.isOnSale && (
          <>
            <div>
              <ActivityDetail
                dollarColor={`red`}
                customContainerClasses={``}
                messageFont={`text-[19px] font-medium`}
                trashCanVisibility={false} circleColor={`emptyBorderRed`}
                iconType={AccountActivityIconsTypeEnum.dollar} date={`Discount ${onSale.discount}`}
                message={`-${calculateTheDiscount}$`} />
            </div>
          </>
        )}
        {selectedExtras && selectedExtras
          .filter((extra) => extra.checked)
          .map(function(extra) {
            return (
              <>
                <div>
                  <ActivityDetail
                    dollarColor={`red`}
                    customContainerClasses={``}
                    messageFont={`text-[19px] font-medium`}
                    trashCanVisibility={false} circleColor={`emptyBorderRed`}
                    iconType={AccountActivityIconsTypeEnum.dollar} date={extra.label}
                    message={`${extra.price.toString()}$`} />
                </div>
              </>
            );
          })}
        <div>
          <ActivityDetail
            customContainerClasses={``}
            messageFont={`text-[19px] font-medium`}
            trashCanVisibility={false} circleColor={`filledRed`}
            iconType={AccountActivityIconsTypeEnum.dollar} date={`TOTAL`}
            message={`${totalPrice}$`} />
        </div>
      </div>
    </>
  );
}
