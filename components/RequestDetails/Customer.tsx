// 'use client';

type CustomerType = {
  initials: string;
  email: string;
  phone: string;
  // children: ReactNode;
}

import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';

export default function Customer({ initials, email, phone }: CustomerType) {
  return (
    <>
      <div className={`mb-11`}>
        <ViapropertyHeading customClasses={`mb-8`} label={`Customer`} headingSize={`md`} />
        <div className={`flex flex-col gap-5`}>
          <div>
            <ActivityDetail
              messageFont={`text-[19px] font-medium`}
              trashCanVisibility={false} circleColor={`emptyBorderRed`}
              iconType={
                AccountActivityIconsTypeEnum.user} date={`CUSTOMER`}
              message={initials} />
          </div>

          <div>
            <ActivityDetail
              messageFont={`text-[19px] font-medium`}
              trashCanVisibility={false} circleColor={`emptyBorderRed`}
              iconType={
                AccountActivityIconsTypeEnum.email} date={`EMAIL`}
              message={email} />
          </div>

          <div>
            <ActivityDetail
              messageFont={`text-[19px] font-medium`}
              trashCanVisibility={false} circleColor={`emptyBorderRed`}
              iconType={
                AccountActivityIconsTypeEnum.phone} date={`PHONE NUMBER`}
              message={phone} />
          </div>
        </div>
      </div>
    </>
  );
}
