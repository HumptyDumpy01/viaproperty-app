// 'use client';

/*type SearchResultsType = {
  // children: ReactNode;
}*/

import FormSearch from '@/components/Layout/Form/FormSearch';
import CardPropertyHorizontal from '@/components/UI/Card/CadPropertyHorizontal';
import PropertyImg1 from '@/assets/properties/property-1.png';
import PropertyImg2 from '@/assets/properties/property-2.png';
import PropertyImg3 from '@/assets/properties/property-3.png';
import PropertyImg4 from '@/assets/properties/property-4.png';
import PropertyImg5 from '@/assets/properties/property-5.png';
import SearchResultsMetrics from '@/components/Layout/Filter/SearchResults/SearchResultsMetrics';

export default function SearchResults(/*{  }: SearchResultsType*/) {
  return (
    <>
      <div className={`ml-11 mr-11`}>
        <h3 className={`bg-clip-text text-transparent bg-linear-main-red mb-6
          text-3xl font-bold`}>Search any property you&#39;d
          like!</h3>
        <FormSearch />
        <SearchResultsMetrics results={547} />
        <div className={`flex flex-col gap-9`}>
          <CardPropertyHorizontal type={`buy`} createdAt={`4`}
                                  heading={`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}
                                  paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod temporconsectetur adipiscing elit..`} imgAlt={`property`}
                                  imgSrc={PropertyImg1} />
          <CardPropertyHorizontal type={`rent`} createdAt={`5`}
                                  heading={`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}
                                  paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                  sed do eiusmod temporconsectetur adipiscing elit..`} imgAlt={`property`}
                                  imgSrc={PropertyImg2} />
          <CardPropertyHorizontal type={`buy`} createdAt={`6`}
                                  heading={`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}
                                  paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                  sed do eiusmod temporconsectetur adipiscing elit..`} imgAlt={`property`}
                                  imgSrc={PropertyImg3} />
          <CardPropertyHorizontal type={`rent`} createdAt={`7`}
                                  heading={`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}
                                  paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                  sed do eiusmod temporconsectetur adipiscing elit..`} imgAlt={`property`}
                                  imgSrc={PropertyImg4} />
          <CardPropertyHorizontal type={`buy`} createdAt={`8`}
                                  heading={`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}
                                  paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                  sed do eiusmod temporconsectetur adipiscing elit..`} imgAlt={`property`}
                                  imgSrc={PropertyImg5} />
        </div>
      </div>
    </>
  );
}
