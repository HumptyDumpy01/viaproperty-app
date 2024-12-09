'use client';

/*type CheckoutPageType = {
  // children: ReactNode;
}*/

import MainContainer from '@/components/Layout/Container/MainContainer';
import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import React from 'react';
import ExtraFeaturesSelected from '@/components/RequestDetails/ExtraFeaturesSelected';
import RentPeriod from '@/components/RequestDetails/RentPeriod';
import Customer from '@/components/RequestDetails/Customer';
import CheckoutHeading from '@/components/Checkout/CheckoutHeading';
import CheckoutPropertyImages from '@/components/Checkout/CheckoutPropertyImages';

import PropertyImg1 from '@/assets/properties/property-1.png';
import PropertyImg2 from '@/assets/properties/property-2.png';
import PropertyImg4 from '@/assets/properties/property-4.png';
import PropertyImg3 from '@/assets/properties/property-3.png';
import CheckoutContactDetailsForm from '@/components/Checkout/CheckoutContactDetailsForm';
import { Tooltip } from '@mui/material';
import CheckoutInputs from '@/components/Checkout/CheckoutInputs';

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

        <CheckoutHeading discount={10} propertyDiscountPrice={699} propertyPrice={788}
                         propertyTitle={`A beautiful house in the heart of the city`}
                         propertyFor={`rent`} />

        <CheckoutPropertyImages images={[PropertyImg1, PropertyImg2, PropertyImg3, PropertyImg4]} />

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
            <CheckoutInputs />
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
            <CheckoutContactDetailsForm />
            <Tooltip title={`Please fill in the form to proceed with the purchase`} followCursor>
              <div className={`w-full border-2 border-red-500 rounded-full px-9 py-4 mt-20 cursor-not-allowed`}>
                <ViapropertyHeading headingSize={`lg`} label={`Payment Details`} />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
