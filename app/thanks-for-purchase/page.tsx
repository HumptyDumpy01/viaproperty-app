// 'use client';

/*type ThanksForPurchasePageType = {
  // children: ReactNode;
}*/

import MainContainer from '@/components/Layout/Container/MainContainer';
import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';
import OrderStatus from '@/components/ThanksForPurchase/OrderStatus';
import OrderConfirmedAnimation from '@/components/ThanksForPurchase/OrderConfirmedAnimation';
import BulkyLink from '@/components/UI/Link/BulkyLink';

export default function ThanksForPurchasePage(/*{  }: ThanksForPurchasePageType*/) {
  return (
    <MainContainer>
      <div className={`mt-9`}>
        <ViapropertyHeading customClasses={`mb-6`} headingSize={`lg`} label={`Thanks for Purchase!`} />
        <Paragraph customClasses={`max-w-4xl mb-10`} text={(
          <>
            Thanks for your purchase! We will contact you shortly to confirm your purchase. If you have any questions,
            please feel free to contact us at <HighlightText text={
            `test@gmail.com`} />
          </>
        )} />

        <ViapropertyHeading headingSize={`md`} label={`Order details`} />
        <div className={`flex flex-col bp-790:flex-row bp-790:items-center gap-8`}>

          <div className={`flex flex-col justify-center gap-5 mt-8 bp-790:mt-0 order-2 bp-790:order-1`}>
            <ActivityDetail customContainerClasses={``} messageFont={`text-[19px] font-medium`}
                            trashCanVisibility={false}
                            circleColor={`filledBlue`}
                            iconType={
                              AccountActivityIconsTypeEnum.ID} date={`ORDER ID`}
                            message={`66cd917717fb802dfbc4e4a9`} />

            <ActivityDetail customContainerClasses={``}
                            makeMessageLink={{ href: `/properties/1` }}
                            messageFont={`text-[19px] underline font-medium`}
                            trashCanVisibility={false} circleColor={`emptyBorderRed`}
                            iconType={
                              AccountActivityIconsTypeEnum.houseRedUp} date={`Property`}
                            message={`
                          A beautiful house in the heart of the city`} />

            <OrderStatus />

            <ActivityDetail customContainerClasses={``}
                            messageFont={`text-[19px] font-medium`}
                            trashCanVisibility={false} circleColor={`emptyBorderRed`}
                            iconType={
                              AccountActivityIconsTypeEnum.user} date={`Landlord`}
                            message={`Nick Baker`} />

            <ActivityDetail customContainerClasses={``}
                            messageFont={`text-[19px] font-medium`}
                            trashCanVisibility={false} circleColor={`filledRed`}
                            iconType={
                              AccountActivityIconsTypeEnum.dollar} date={`Total`}
                            message={`$165,743`} />
          </div>
          <div className={`max-w-2xl m-auto order-1 bp-790:order-2`}>
            <OrderConfirmedAnimation />
          </div>
        </div>
        <div className={`mt-8`}>
          <Paragraph customClasses={`max-w-5xl`} text={(
            <>
              Thank you for your purchase! Your request to purchase/rent the property has been received. <HighlightText
              text={`The landlord will now review your request. He can either accept or reject it. `} /> We will notify
              you once the
              status of your order changes. Do not worry! If the landlord rejects your request, you will receive a full
              refund.
            </>
          )} />
        </div>
        <div className={`flex flex-col gap-6 mt-11`}>
          <BulkyLink linkStyle={`red`} href={`/account-settings/request-details/1`} label={`See Details`} />
          <BulkyLink linkStyle={`emptyBlack`} href={`/`} label={`Home`} />
        </div>
      </div>
    </MainContainer>
  );
}
