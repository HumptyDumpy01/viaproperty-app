// 'use client';

/*type CheckoutPageType = {
  // children: ReactNode;
}*/

import MainContainer from '@/components/Layout/Container/MainContainer';
import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import Image from 'next/image';
import React from 'react';
import PropertyImg1 from '@/assets/properties/property-1.png';
import PropertyImg2 from '@/assets/properties/property-2.png';
import PropertyImg3 from '@/assets/properties/property-3.png';
import PropertyImg4 from '@/assets/properties/property-4.png';
import ExtraFeaturesSelected from '@/components/RequestDetails/ExtraFeaturesSelected';
import RentPeriod from '@/components/RequestDetails/RentPeriod';
import Customer from '@/components/RequestDetails/Customer';
import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import Button from '@/components/UI/Button/Button';

export default function CheckoutPage(/*{  }: CheckoutPageType*/) {
  return (
    <MainContainer>
      <div className={`mt-6 max-w-screen-bp-1009`}>
        <ViapropertyHeading headingSize={`lg`} label={`Proceed with the Purchase!`} />
        <Paragraph customClasses={`mt-4`}
                   text={(
                     <>
                       Please fill in the form below to proceed with the purchase. if needed, <HighlightText text={`we may contact you shortly after
              you have submitted the form.`} /> </>
                   )} />

        <div className={`mt-8 mb-12`}>
          <div className={`mb-5`}>
            <ViapropertyHeading headingSize={`md`}
                                label={`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`} />
          </div>
          <div className={`flex items-center gap-28`}>
            <div className={`flex items-center gap-5`}>
            <span className={`inline-block text-xl text-red-500 font-semibold`}>$698<span
              className={`inline-block text-sm font-normal`}>/night</span> </span>
              <span className={`font-semibold text-zinc-500 line-through`}>$718</span>
            </div>
            <div>
              <p className={`bg-zinc-100 rounded-full text-sm truncate px-3 py-1
                          bg-linear-main-red text-white font-semibold`}>20% off</p>
            </div>
          </div>
        </div>

        <div
          className={`grid grid-cols-proceed-with-purchase grid-rows-proceed-with-purchase gap-3.5 pb-12 border-b border-b-blue-100 mb-9`}>
          <div className={`w-full h-full row-span-3 rounded-[30px]`}>
            <Image className={`object-cover w-full h-full rounded-[30px]`} src={PropertyImg1} alt={`Property Image`} />
          </div>
          <div>
            <Image className={`object-cover w-full h-full rounded-[30px]`} src={PropertyImg2} alt={`Property Image`} />
          </div>
          <div className={`row-span-2`}>
            <Image className={`object-cover w-full h-full rounded-[30px]`} src={PropertyImg4} alt={`Property Image`} />
          </div>

          <div className={`row-span-2`}>
            <Image className={`object-cover w-full h-full rounded-[30px]`} src={PropertyImg3} alt={`Property Image`} />
          </div>
        </div>
        <div>

          <div className={`border-b border-b-blue-100 mb-9`}>
            <ExtraFeaturesSelected extraFeaturesSelected={[{
              price: 100,
              label: `Extra Feature 1`
            }, {
              price: 200,
              label: `Extra Feature 2`
            }, {
              price: 300,
              label: `Extra Feature 3`
            }]} />
          </div>

          <div className={`border-b border-b-blue-100 mb-9`}>
            <RentPeriod from={`August 1, 2024`} to={`August 30, 2024`} />
          </div>

          <div className={`border-b border-b-blue-100 mb-9`}>
            <Customer headingLabel={`Landlord`} phone={[`+380508832324`, `+380998278372`]} initials={`Nikolas Baker`}
                      email={`test@gmail.com`} />
          </div>

          <div className={`mt-10 border-b border-b-blue-100 pb-12 mb-9`}>
            <ViapropertyHeading customClasses={`mb-8`} label={`Pricing`} headingSize={`md`} />
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
          </div>

          <div>
            <div className={`mb-9`}>
              <ViapropertyHeading headingSize={`md`} label={`Contact Details`} />
            </div>
            <Paragraph text={(
              <>
                Please provide us with your contact details so we can reach out to you if needed. <HighlightText
                text={`
                This information will not be shared with anyone.`} />
              </>
            )} />
            <div className={`mt-10 mb-8`}>
              <ErrorMessage errorMessage={`This user already exists!`} />
            </div>
            <form className={`flex justify-center flex-col gap-8`}>

              <div className={`flex items-center gap-11 flex-col bp-620:flex-row`}>
                <LabelAndInput
                  labelStyle={`dark-blue`}
                  label={`First Name`}
                  inputType={`text`}
                  name={`firstName`}
                  customClassNames={``}
                  required
                  placeholder={`Your First Name`} />

                <LabelAndInput
                  labelStyle={`dark-blue`}
                  label={`Last Name`}
                  inputType={`text`}
                  name={`lastName`}
                  customClassNames={``}
                  required
                  placeholder={`Your Last Name`} />
              </div>

              <div className={`flex items-center gap-11 flex-col bp-620:flex-row`}>
                <LabelAndInput
                  labelStyle={`dark-blue`}
                  label={`Email`}
                  inputType={`email`}
                  name={`email`}
                  customClassNames={``}
                  required
                  placeholder={`Your Email Address`} />

                <LabelAndInput
                  labelStyle={`dark-blue`}
                  label={`Last Name`}
                  inputType={`text`}
                  name={`firstName`}
                  customClassNames={``}
                  required
                  placeholder={`Your First Name`} />
              </div>
              <div className={`mt-12`}>
                <Button linearGradient label={`Proceed to Payment`} />
              </div>
              <Paragraph text={(
                <>
                  By clicking the button above, you agree to our <HighlightText
                  text={`Terms & Conditions`} /> and <HighlightText
                  text={`Privacy Policy`} />.
                </>
              )} />
            </form>
            <div className={`w-full border-2 border-red-500 rounded-full px-9 py-4 mt-20 cursor-not-allowed`}>
              <ViapropertyHeading headingSize={`lg`} label={`Payment Details`} />
            </div>
          </div>

        </div>

      </div>
    </MainContainer>
  );
}
