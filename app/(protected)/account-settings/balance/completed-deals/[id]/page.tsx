'use client';

/*type RequestDetailsPageType = {
  // children: ReactNode;
}*/

import MainContainer from '@/components/Layout/Container/MainContainer';
import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import RequestInfo from '@/components/RequestDetails/RequestInfo';
import ExtraFeaturesSelected from '@/components/RequestDetails/ExtraFeaturesSelected';
import RentPeriod from '@/components/RequestDetails/RentPeriod';
import Customer from '@/components/RequestDetails/Customer';
import Actions from '@/components/RequestDetails/Actions';


export default function CompletedDealsPage(/*{  }: RequestDetailsPageType*/) {
  return (
    <MainContainer>

      <div className={`mt-11`}>
        <div className={`max-w-screen-bp-896`}>
          <div>
            <a className={`flex items-center gap-2 bg-clip-text text-transparent bg-linear-main-red font-bold
            border  border-red-500 rounded-full px-4 py-2 text-[15.5px] w-fit mb-5`}
               href={`..`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                <path
                  d="M4.87683 9.16541C4.72949 9.31555 4.52967 9.3999 4.32133 9.3999C4.11298 9.3999 3.91316 9.31555 3.76582 9.16541L0.230049 5.56131C0.0827471 5.41112 -1.32019e-06 5.20744 -1.33876e-06 4.99507C-1.35732e-06 4.7827 0.082747 4.57902 0.230049 4.42882L3.76582 0.824728C3.91401 0.678836 4.11248 0.598108 4.3185 0.599933C4.52451 0.601758 4.72158 0.685988 4.86726 0.834484C5.01294 0.982979 5.09558 1.18386 5.09737 1.39385C5.09916 1.60385 5.01996 1.80616 4.87683 1.95721L2.74987 4.19416L10.2143 4.19416C10.4227 4.19416 10.6225 4.27854 10.7699 4.42874C10.9172 4.57894 11 4.78265 11 4.99507C11 5.20748 10.9172 5.4112 10.7699 5.5614C10.6225 5.7116 10.4227 5.79598 10.2143 5.79598L2.74987 5.79598L4.87683 8.03292C5.02414 8.18311 5.10688 8.38679 5.10688 8.59916C5.10688 8.81154 5.02414 9.01521 4.87683 9.16541Z"
                  fill="#FB3838" />
              </svg>
              Go Back</a>
          </div>
          <div className={`mb-8`}>
            <ViapropertyHeading customClasses={`mb-8`} label={`Request Details`} headingSize={`md`} />
            <Paragraph text={(
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Nam, <HighlightText text={`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.`} />
              </>
            )} />
          </div>
          <RequestInfo
            propertyId={`66cd917717fb802dfbc4e4a9`}
            propertyHref={`/properties/1`}
            total={`$142,999`}
            customer={`Nikolas Baker`}
            propertyStatus={`Pending`}
            propertyTitle={`Lorem Ipsum Dolor Sit Amet, Consectetur..`}
            propertyType={`Sell`} />

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

          <RentPeriod from={`August 1, 2024`} to={`August 30, 2024`} />

          <Customer headingLabel={`Customer`} phone={[`+380508832324`]} initials={`Nikolas Baker`}
                    email={`test@gmail.com`} />

          <Actions chatHref={`/account-settings/chats/1`} type={`forLandlord`} />

        </div>
      </div>
    </MainContainer>
  );
}
