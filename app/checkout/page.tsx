'use client';

/*type CheckoutPageType = {
  // children: ReactNode;
}*/

import MainContainer from '@/components/Layout/Container/MainContainer';
import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import React, { useEffect, useState } from 'react';
import ExtraFeaturesSelected from '@/components/RequestDetails/ExtraFeaturesSelected';
import RentPeriod from '@/components/RequestDetails/RentPeriod';
import Customer from '@/components/RequestDetails/Customer';
import CheckoutHeading from '@/components/Checkout/CheckoutHeading';
import CheckoutPropertyImages from '@/components/Checkout/CheckoutPropertyImages';

import CheckoutContactDetailsForm from '@/components/Checkout/CheckoutContactDetailsForm';
import { Tooltip } from '@mui/material';
import CheckoutInputs from '@/components/Checkout/CheckoutInputs';
import { PropertyOnSaleType } from '@/components/Layout/Sidebar/ViapropertySidebar';
import LoadingScreen from '@/components/Layout/Loading/LoadingScreen';
import { PropertyForType } from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';

export type CheckoutDataType = {
  dateRange?: { from: string; to: string };
  extras: { checked: boolean; label: string; price: number }[];
  propertyDetails: {
    images: string[];
    onSale: PropertyOnSaleType;
    price: string;
    propertyId: string;
    selectedExtras: { checked: boolean; label: string; price: number }[];
    title: string;
    propertyFor: PropertyForType;
  },
  totalPrice: number,
}

export default function CheckoutPage(/*{  }: CheckoutPageType*/) {
  const [checkoutData, setCheckoutData] = useState<CheckoutDataType>();

  useEffect(() => {
    const storedCheckoutData = localStorage.getItem(`checkoutData`);
    if (storedCheckoutData) {
      setCheckoutData(JSON.parse(storedCheckoutData));
    }
  }, []);

  if (!checkoutData) {
    return <LoadingScreen />;
  }

  console.log(`Executing checkoutData: `, checkoutData);

  const extraFeaturesSelected = checkoutData.propertyDetails.selectedExtras.length > 0 ?
    checkoutData.propertyDetails.selectedExtras.filter(extra => extra.checked)
      .map(extra => ({
        price: extra.price,
        label: extra.label
      })) : [];

  return (
    <MainContainer>
      <div className={`mt-6 max-w-screen-bp-1009`}>
        <ViapropertyHeading headingSize={`lg`} label={`Proceed with the Purchase!`} />
        <Paragraph customClasses={`mt-4 max-w-screen-bp-750`}
                   text={(
                     <>
                       Please fill in the form below to proceed with the purchase. if needed, <HighlightText text={`we may contact you shortly after
              you have submitted the form.`} /> </>
                   )} />

        <CheckoutHeading discount={checkoutData.propertyDetails.onSale.discount}
                         propertyDiscountPrice={checkoutData.propertyDetails.onSale.newPrice}
                         propertyPrice={checkoutData.propertyDetails.price}
                         propertyTitle={checkoutData.propertyDetails.title}
                         propertyFor={checkoutData.propertyDetails.propertyFor} />

        <CheckoutPropertyImages title={checkoutData.propertyDetails.title}
                                images={checkoutData.propertyDetails.images} />

        <div>
          <div className={`border-b border-b-blue-100 mb-9`}>
            <ExtraFeaturesSelected extraFeaturesSelected={extraFeaturesSelected} />
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
