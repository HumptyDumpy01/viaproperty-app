// 'use client';

type ExtraFeaturesSelectedType = {
  extraFeaturesSelected: {
    price: number;
    label: string;
  }[];
  // children: ReactNode;
}

import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';

export default function ExtraFeaturesSelected({ extraFeaturesSelected }: ExtraFeaturesSelectedType) {
  return (
    <>
      <div className={`mb-11`}>
        <ViapropertyHeading customClasses={`mb-8`} label={`Extra Features Selected`} headingSize={`md`} />
        <div className={`flex flex-col gap-5`}>

          {extraFeaturesSelected.map(function(feature) {
            return (
              <ActivityDetail
                key={feature.label}
                customContainerClasses={``}
                messageFont={`text-[19px] font-medium`}
                trashCanVisibility={false} circleColor={`emptyBorderRed`}
                iconType={
                  AccountActivityIconsTypeEnum.confirmed} date={`${feature.price.toString()}$`}
                message={feature.label} />
            );
          })}
        </div>
      </div>
    </>
  );
}
