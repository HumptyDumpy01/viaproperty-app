'use client';

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
import { useFetchProperty } from '@/hooks/useFetchProperty';
import { calculateTheAverage } from '@/utils/functions/calculateTheAverage';

// import { GET_PROPERTY } from '@/graphql/property';
// import { ApolloClient, DefaultOptions, InMemoryCache } from '@apollo/client';
// import NotFound from 'next/dist/client/components/not-found-error';
import { abbreviateInitials } from '@/utils/functions/abbreviateInitials';
import { DEFAULT_ERROR_MESSAGE } from '@/utils/generics/generics';
import LoadingScreen from '@/components/Layout/Loading/LoadingScreen';

/*

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
};

async function fetchProperty(id: string) {
  const apolloClient = new ApolloClient({
    uri: `${process.env.BACKEND_API_URL}/graphql`,
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
  });
  const { data } = await apolloClient.query({
    query: GET_PROPERTY,
    variables: { id }
  });
  return data.property;
}
*/

export default function PropertyDescription({ params }: { params: { id: string } }) {
// export default async function PropertyDescription({ params }: { params: { id: string } }) {
  const { error, data, loading } = useFetchProperty(params.id);
  if (loading) return (
    <LoadingScreen />
  );

  if (error) throw new Error(error.message || DEFAULT_ERROR_MESSAGE);

  const property = data.property;

  // const property = await fetchProperty(params.id);
  // if (!property) return NotFound();

  // format the abbreviated initials of the house owner
  // e.f. if the initial is Jane Doe, the abbrInitials will be J.D
  // if the initial is Jane, the abbrInitials will be J.
  const abbrInitials = abbreviateInitials(property.landlord.initials);

  return (
    <main className={`mb-24 overflow-hidden`}>
      <div className={`max-w-[1320px] mx-auto w-full px-3 bp-480:px-6`}>
        <div className={`grid bp-1306:grid-cols-property-description grid-cols-1 mt-10 gap-5 pr-5 bp-1306:pr-0`}>
          <div>
            <PropertyGallery title={property.title} images={property.images} />
            <PropertyTags rating={property.rating.overall} tags={property.tags} />
            <HeadingMedium maxWidthXL={false} customClasses={`mb-8 max-w-screen-xl`} heading={property.title} />
            <PropertyConveniences
              additionalConveniences={property.additionalConveniences}
              wifi={true}
              bedrooms={property.propertyHas.bedrooms}
              parkingSpaces={property.propertyHas.parkingSpaces}
              livingRooms={property.propertyHas.livingRooms}
              bathrooms={property.propertyHas.bathrooms}
              beds={property.propertyHas.beds}
              fullKitchen={property.propertyHas.kitchens > 0}
              sqftSize={property.propertyArea}
            />
            <Accordion propertyFor={property.propertyFor} description={property.description} />
            <ProviderContainer>
              <OpenSidebarBtn />
            </ProviderContainer>
            <div className={`mt-14`}>
              <HeadingMedium customClasses={`mb-8`} heading={`About Landlord`} />
              <AboutLandlord
                online={property.landlord.online}
                initials={property.landlord.initials}
                abbrInitials={abbrInitials}
                text={property.landlord.bio}
              />
              <RenterReviewsMetrics
                propertyFor={property.propertyFor}
                metrics={{
                  location: calculateTheAverage(property.rating.location),
                  condition: calculateTheAverage(property.rating.condition),
                  ownership: calculateTheAverage(property.rating.ownership),
                  noiseLevel: calculateTheAverage(property.rating.noiseLevel),
                  amenities: calculateTheAverage(property.rating.amenities),
                  security: calculateTheAverage(property.rating.security)
                }}
                overallRating={property.rating.overall}
                ratings={property.rating.count}
              />
              <div className={`mb-16`}>
                <PropertyComments questions={property.questions} reviews={property.reviews}
                                  propertyFor={property.propertyFor} />
              </div>
              <LeaveCommentContainer propertyFor={property.propertyFor} />
            </div>
          </div>
          <ProviderContainer>
            <SidebarContainer propertyDetails={{
              landlordData: {
                email: property.landlord.email,
                contacts: property.description.contacts.contacts
              },
              dataForCheckout: {
                title: property.title,
                propertyId: property.id,
                images: property.images
              },
              price: property.description.priceAndTaskHistory.price,
              onSale: property.onSale,
              propertyFor: property.propertyFor,
              location: property.description.location.title,
              extraPricing: property.extraPricing
            }} />
          </ProviderContainer>
        </div>
      </div>
      <div className={`mt-20`}>
        <CallToActionBlock rounded={false} fullScreen type={`sell-rent`} />
      </div>
      <div className={`ml-3`}>
        <FeaturedProperties filter={{ tags: [...property.tags], limit: 22 }} headingLabel={`You might also like...`}
                            headingSpan={`based on your search!`}
                            headingHref={`/properties`} />
      </div>
    </main>
  );
}