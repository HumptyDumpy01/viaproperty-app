'use client';

import { useState } from 'react';
import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import Tooltip from '@/components/Layout/Tooltip/Tooltip';

type RequestInfoType = {
  propertyId: string;
  propertyType: string;
  propertyTitle: string;
  propertyStatus: string;
  customer: string;
  total: string;
  propertyHref: string;
  // children: ReactNode;
}

export default function
  RequestInfo({
                propertyId, propertyType,
                propertyTitle, propertyStatus, customer, total, propertyHref
              }: RequestInfoType) {
  const [questionMarkVisibility, setQuestionMarkVisibility] = useState<boolean>(false);
  return (
    <>

      <div className={`flex flex-col gap-4 mb-12`}>
        <ActivityDetail customContainerClasses={``} messageFont={`text-[19px] font-medium`} trashCanVisibility={false}
                        circleColor={`filledBlue`}
                        iconType={
                          AccountActivityIconsTypeEnum.ID} date={`PROPERTY ID`}
                        message={propertyId} />

        <ActivityDetail customContainerClasses={``} messageFont={`text-[19px] font-medium`} trashCanVisibility={false}
                        circleColor={`emptyBorderRed`}
                        iconType={
                          AccountActivityIconsTypeEnum.houseRedPlus} date={`Property Type`}
                        message={propertyType} />
        <ActivityDetail customContainerClasses={``}
                        makeMessageLink={{ href: propertyHref }}
                        messageFont={`text-[19px] underline font-medium`}
                        trashCanVisibility={false} circleColor={`emptyBorderRed`}
                        iconType={
                          AccountActivityIconsTypeEnum.houseRedUp} date={`Title`}
                        message={propertyTitle} />

        <div className={`relative w-fit`}>
          <ActivityDetail customContainerClasses={``}
                          messageFont={`text-[19px] font-medium`}
                          trashCanVisibility={false} circleColor={`emptyBorderRed`}
                          iconType={
                            AccountActivityIconsTypeEnum.loading} date={`Status`}
                          message={propertyStatus} />

          <div>
            <button onClick={() => setQuestionMarkVisibility(prevState => !prevState)} type={`button`}
                    className={`absolute top-6 -right-9`}>
              <ViapropertyIcon icon={`questionMark`} />
            </button>
            <Tooltip
              setQuestionMarkVisibility={setQuestionMarkVisibility}
              questionMarkVisibility={questionMarkVisibility}
              content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quaerat.`} />
          </div>
        </div>

        <ActivityDetail customContainerClasses={``}
                        messageFont={`text-[19px] font-medium`}
                        trashCanVisibility={false} circleColor={`emptyBorderRed`}
                        iconType={
                          AccountActivityIconsTypeEnum.user} date={`Customer`}
                        message={customer} />

        <ActivityDetail customContainerClasses={``}
                        messageFont={`text-[19px] font-medium`}
                        trashCanVisibility={false} circleColor={`filledRed`}
                        iconType={
                          AccountActivityIconsTypeEnum.dollar} date={`Total`}
                        message={total} />
      </div>
    </>
  );
}
