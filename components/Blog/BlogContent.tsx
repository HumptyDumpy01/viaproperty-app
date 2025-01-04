'use client';

/*type BlogContentType = {
  // children: ReactNode;
}*/

import BigInput from '@/components/UI/Input/BigInput';
import Button from '@/components/UI/Button/Button';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import BlogCard from '@/components/UI/Card/BlogCard';
import PropertyImg1 from '@/assets/properties/property-1.png';
import Pagination from '@/components/UI/Pagination/Pagination';
import { useState } from 'react';

export type BlogPageFilterType = `Newest` | `Oldest` | `Top Trends` | `All`;

export default function BlogContent(/*{  }: BlogContentType*/) {
  const [activeFilter, setActiveFilter] = useState<BlogPageFilterType>(`All`);

  return (
    <>
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
            <div className={`flex gap-2 items-center overflow-x-auto scrollbar-thin`}>
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

          <div className={`grid bp-1087:grid-cols-2 gap-5`}>
            <BlogCard tags={[`Top Trending`, `Newest`, `Hot`]} image={{
              src: PropertyImg1,
              alt: `Property 1`
            }} title={`Wonderful Home with a Great View..`}
                      timeToReadInMins={5} />
            <BlogCard tags={[`Top Trending`, `Newest`, `Hot`]} image={{
              src: PropertyImg1,
              alt: `Property 1`
            }} title={`Wonderful Home with a Great View..`}
                      timeToReadInMins={5} />
            <BlogCard tags={[`Top Trending`, `Newest`, `Hot`]} image={{
              src: PropertyImg1,
              alt: `Property 1`
            }} title={`Wonderful Home with a Great View..`}
                      timeToReadInMins={5} />
            <BlogCard tags={[`Top Trending`, `Newest`, `Hot`]} image={{
              src: PropertyImg1,
              alt: `Property 1`
            }} title={`Wonderful Home with a Great View..`}
                      timeToReadInMins={5} />
            <BlogCard tags={[`Top Trending`, `Newest`, `Hot`]} image={{
              src: PropertyImg1,
              alt: `Property 1`
            }} title={`Wonderful Home with a Great View..`}
                      timeToReadInMins={5} />
            <BlogCard tags={[`Top Trending`, `Newest`, `Hot`]} image={{
              src: PropertyImg1,
              alt: `Property 1`
            }} title={`Wonderful Home with a Great View..`}
                      timeToReadInMins={5} />
          </div>
          <div>
            <Pagination currentPage={1} onPageChange={() => {
            }} showing={6} total={38} pages={3} />
          </div>
        </div>
      </div>
    </>
  );
}
