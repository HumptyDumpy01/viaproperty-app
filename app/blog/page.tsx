'use client';

/*type BlogPageType = {
  // children: ReactNode;
}*/

import MainContainer from '@/components/Layout/Container/MainContainer';
import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import BigInput from '@/components/UI/Input/BigInput';
import Button from '@/components/UI/Button/Button';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import { useState } from 'react';
import BlogCard from '@/components/UI/Card/BlogCard';
import Propertyimg1 from '@/assets/properties/property-1.png';
import Pagination from '@/components/UI/Pagination/Pagination';
import CallToActionBlock from '@/components/Layout/Cta/CallToActionBlock';

export type BlogPageFilterType = `Newest` | `Oldest` | `Top Trends` | `All`;

export default function BlogPage(/*{  }: BlogPageType*/) {
  const [activeFilter, setActiveFilter] = useState<BlogPageFilterType>(`All`);

  return (
    <>
      <MainContainer>
        <div className={`mt-8`}>
          <ViapropertyHeading headingSize={`lg`} label={`Explore countless articles`} />
          <Paragraph customClasses={`max-w-4xl`} text={(
            <>
              Explore countless articles on the latest trends in the real estate industry,
              from buying and selling to renting and investing. <HighlightText
              text={`This is the place to be for all things real estate.`} />
            </>
          )} />

          <div className={`mb-16`}>
            <div className={`mt-12`}>
              <form className={`flex bp-620:items-center gap-5 flex-col bp-620:flex-row
            mb-7`}>
                <BigInput
                  placeholder={`Search by topic, country, or author`}
                  name={`deleteAdvert`}
                  type={`text`}
                />
                <div>
                  <Button
                    btnVariant={`red`}
                    type={`submit`}
                    label={`Search`}
                    mode={`lg`}
                    linearGradient
                  />
                </div>
              </form>

              <div className={`flex items-center mb-12`}>
                <div className={`flex gap-2 items-center`}>
                  <ButtonActive color={`red`} size={`small`} onClick={() => setActiveFilter('All')}
                                active={activeFilter === 'All'}
                                label={`Newest`} />
                  <ButtonActive color={`red`} size={`small`} onClick={() => setActiveFilter('Newest')}
                                active={activeFilter === 'Newest'}
                                label={`Newest`} />
                  <ButtonActive color={`red`} size={`small`} onClick={() => setActiveFilter('Oldest')}
                                active={activeFilter === 'Oldest'}
                                label={`Oldest`} />
                  <ButtonActive color={`red`} size={`small`} onClick={() => setActiveFilter('Top Trends')}
                                active={activeFilter === 'Top Trends'}
                                label={`Top Trends`} />
                </div>
              </div>

              <div className={`grid grid-cols-2 gap-5`}>
                <BlogCard tags={[`Top Trending`, `Newest`, `Hot`]} image={{
                  src: Propertyimg1,
                  alt: `Property 1`
                }} title={`Wonderful Home with a Great View..`}
                          timeToReadInMins={5} />
                <BlogCard tags={[`Top Trending`, `Newest`, `Hot`]} image={{
                  src: Propertyimg1,
                  alt: `Property 1`
                }} title={`Wonderful Home with a Great View..`}
                          timeToReadInMins={5} />
                <BlogCard tags={[`Top Trending`, `Newest`, `Hot`]} image={{
                  src: Propertyimg1,
                  alt: `Property 1`
                }} title={`Wonderful Home with a Great View..`}
                          timeToReadInMins={5} />
                <BlogCard tags={[`Top Trending`, `Newest`, `Hot`]} image={{
                  src: Propertyimg1,
                  alt: `Property 1`
                }} title={`Wonderful Home with a Great View..`}
                          timeToReadInMins={5} />
                <BlogCard tags={[`Top Trending`, `Newest`, `Hot`]} image={{
                  src: Propertyimg1,
                  alt: `Property 1`
                }} title={`Wonderful Home with a Great View..`}
                          timeToReadInMins={5} />
                <BlogCard tags={[`Top Trending`, `Newest`, `Hot`]} image={{
                  src: Propertyimg1,
                  alt: `Property 1`
                }} title={`Wonderful Home with a Great View..`}
                          timeToReadInMins={5} />
              </div>
              <div>
                <Pagination showing={6} total={38} pages={3} />
              </div>

            </div>
          </div>

        </div>
      </MainContainer>
      <CallToActionBlock fullScreen rounded={false} />
    </>
  );
}
