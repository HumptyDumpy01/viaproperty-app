// app/properties/[id]/page.tsx
import React from 'react';
import Accordion from '@/components/Layout/Accordion/AccordionPropertyDescription/Accordion';
import PropertyGallery from '@/components/PropertyDescription/Layout/PropertyGallery';
import PropertyTags from '@/components/PropertyDescription/Layout/PropertyTags';
import PropertyConveniences from '@/components/PropertyDescription/Layout/PropertyConveniences';
import AboutLandlord from '@/components/PropertyDescription/Layout/AboutLandlord';
import PropertyComments from '@/components/PropertyDescription/Layout/PropertyComments';
import HeadingMedium from '@/components/Typography/HeadingMedium';
import RenterReviewsMetrics from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';
import CallToActionBlock from '@/components/Layout/Cta/CallToActionBlock';
import FeaturedProperties from '@/components/Home/Layout/FeaturedProperties';
import LeaveCommentContainer from '@/components/PropertyDescription/Layout/LeaveCommentContainer';
import SidebarContainer from '@/components/PropertyDescription/Layout/SidebarContainer';
import ProviderContainer from '@/components/Layout/Provider/ProviderContainer';
import OpenSidebarBtn from '@/components/PropertyDescription/Layout/OpenSidebarBtn';
import { GET_PROPERTY } from '@/graphql/property';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import NotFound from 'next/dist/client/components/not-found-error';

async function fetchProperty(id: string) {
  const apolloClient = new ApolloClient({
    uri: `${process.env.BACKEND_API_URL}/graphql`,
    cache: new InMemoryCache()
  });
  const { data } = await apolloClient.query({
    query: GET_PROPERTY,
    variables: { id }
  });
  return data.property;
}

export default async function PropertyDescription({ params }: { params: { id: string } }) {
  const property = await fetchProperty(params.id);


  // const property2 = await fetchProperty(`d989027e-bd7f-45dc-9a8a-9ea36c810989`);

  if (!property) return NotFound();
  console.log(`Executing property: `, property);

  return (
    <main className={`mb-24 overflow-hidden`}>
      <div className={`max-w-[1320px] mx-auto w-full px-3 bp-480:px-6`}>
        <div className={`grid bp-1306:grid-cols-property-description grid-cols-1 mt-10 gap-5 pr-5 bp-1306:pr-0`}>
          <div>
            <PropertyGallery
              title={property.title}
              images={property.images} />
            <PropertyTags rating={property.rating.overall}
                          tags={property.tags} />

            <HeadingMedium customClasses={`mb-8`} maxWidthXL heading={property.title} />

            <PropertyConveniences
              additionalConveniences={property.additionalConveniences}
              wifi={true}
              bedrooms={property.propertyHas.bedrooms}
              parkingSpaces={property.propertyHas.parkingSpaces}
              livingRooms={property.propertyHas.livingRooms} bathrooms={property.propertyHas.bathrooms}
              beds={property.propertyHas.beds}
              fullKitchen={property.propertyHas.kitchens > 0}
              sqftSize={property.propertyArea} />
            <Accordion description={property.description} />

            <ProviderContainer>
              <OpenSidebarBtn />
            </ProviderContainer>

            <div className={`mt-14`}>
              <HeadingMedium customClasses={`mb-8`} heading={`About
            Landlord`} />

              <AboutLandlord online={false} initials={`Nikolas Baker`} abbrInitials={`N.B`} text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do
              eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur....`} />


              <RenterReviewsMetrics
                metrics={{
                  location: 4.44,
                  condition: 4.1,
                  ownership: 4.2,
                  noiseLevel: 2,
                  amenities: 4.4,
                  security: 3.8
                }}
                overallRating={4.3} ratings={534} />

              <div className={`mb-16`}>
                <PropertyComments />
              </div>

              <LeaveCommentContainer />

            </div>
          </div>
          <ProviderContainer>
            <SidebarContainer />
          </ProviderContainer>

        </div>
      </div>
      <div className={`mt-20`}>
        <CallToActionBlock rounded={false} fullScreen type={`sell-rent`} />
      </div>
      <div className={`ml-3`}>
        <FeaturedProperties
          headingLabel={`You might also like...`} headingSpan={`based on your search!`} headingHref={`/properties`} />
      </div>
    </main>
  );
}