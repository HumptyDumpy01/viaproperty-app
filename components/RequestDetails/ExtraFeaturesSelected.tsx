// 'use client';

import Paragraph from '@/components/Typography/Paragraph';
import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';

type ExtraFeaturesSelectedType = {
  extraFeaturesSelected: {
    price: number;
    label: string;
  }[];
  // children: ReactNode;
}

export default function ExtraFeaturesSelected({ extraFeaturesSelected }: ExtraFeaturesSelectedType) {
  return (
    <>
      <div className={`${extraFeaturesSelected.length === 0 ? `mb-2` : `mb-11`}`}>
        <ViapropertyHeading customClasses={`mb-8`} label={`Extra Features Selected`} headingSize={`md`} />
        <div className={`flex flex-col gap-5`}>
          {extraFeaturesSelected.length === 0 && (
            <Paragraph text={`No extra features selected`} customClasses={`mb-9`} />
          )}

          {extraFeaturesSelected && extraFeaturesSelected.map(function(feature) {
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
