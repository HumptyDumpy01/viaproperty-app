'use client';

import { activeStateType } from '@/components/Sell/SellInputContent';
import HighlightText from '@/components/Typography/HighlightText';
import InfoBadge from '@/components/UI/Badge/InfoBadge';
import ImagePreview from '@/components/UI/Input/ChooseImage/ImagePreview';
import PropertyImg1 from '@/assets/sell/property-img/property-img-1.png';
import PropertyImg2 from '@/assets/sell/property-img/property-img-2.png';
import PropertyImg3 from '@/assets/sell/property-img/property-img-3.png';
import PropertyImg4 from '@/assets/sell/property-img/property-img-4.png';
import PropertyImg5 from '@/assets/sell/property-img/property-img-5.png';
import ImageGalleryFullScreen from '@/components/Layout/Gallery/ImageGalleryFullScreen';
import { useState } from 'react';

type FifthFormType = {
  setActiveState: (prevState: activeStateType) => void;
  // children: ReactNode;
}

export default function FifthForm({ setActiveState }: FifthFormType) {
  const [imgGalleryOpen, setImgGalleryOpen] = useState<boolean>(false);
  return (
    <>
      <form className={`flex flex-col mt-9`}>
        <h2 className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-2xl
          mb-10`}>Finally! Let’s be patient and swiftly <br />
          revise crucial information!</h2>
        <p className={`leading-relaxed text-zinc-900`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          illo odio quas quis. Cumque
          et ipsa libero magni maxime obcaecati <HighlightText text={`possimus saepe. Impedit omnis,`} /> praesentium.
        </p>

        <div className={`flex items-center gap-6 mt-9 mb-7`}>
          <InfoBadge name={`propertyFor`} value={`Sale`} editable={false} heading={`A Property is for:`} />
          <InfoBadge name={`location`} value={`UK, Birmingham, Street N`} editable={true}
                     heading={`A property is located at:`} />

        </div>

        <div>
          {imgGalleryOpen && (
            <>
              <ImageGalleryFullScreen layoutOpen={imgGalleryOpen} dispatch={() => setImgGalleryOpen(false)} images={[
                { src: `/images/sell/property-img/property-img-1.png`, alt: `Property Image 1` },
                { src: `/images/sell/property-img/property-img-2.png`, alt: `Property Image 2` },
                { src: `/images/sell/property-img/property-img-3.png`, alt: `Property Image 3` },
                { src: `/images/sell/property-img/property-img-4.png`, alt: `Property Image 4` },
                { src: `/images/sell/property-img/property-img-5.png`, alt: `Property Image 5` }
              ]} />
            </>
          )}
          <span className={`text-zinc-700 font-semibold inline-block mb-2.5`}>Front Images Picked(13)</span>
          <div className={`flex items-center gap-4 max-w-4xl overflow-x-auto scrollbar-thin`}>
            <div onClick={() => setImgGalleryOpen(true)}>
              <ImagePreview imgSrc={PropertyImg1} />
            </div>

            <div onClick={() => setImgGalleryOpen(true)}>
              <ImagePreview imgSrc={PropertyImg2} />
            </div>

            <div onClick={() => setImgGalleryOpen(true)}>
              <ImagePreview imgSrc={PropertyImg3} />
            </div>

            <div onClick={() => setImgGalleryOpen(true)}>
              <ImagePreview imgSrc={PropertyImg4} />
            </div>

            <div onClick={() => setImgGalleryOpen(true)}>
              <ImagePreview imgSrc={PropertyImg5} />
            </div>
          </div>
        </div>
        <div className={`flex mt-8`}>
          <InfoBadge name={`propertyPrice`} value={`149,999$`} editable={true}
                     heading={`Price for Selling is:`} />
        </div>
        <div className={`flex  mt-8 `}>
          <InfoBadge propertyMetric={{
            beds: 3,
            showers: 1,
            baths: 0,
            bedrooms: 2,
            kitchens: 1,
            parkingSlots: 0
          }} infoType={`propertyMetric`} name={`propertyHas`} value={``} editable={true}
                     heading={`Property has:`} />
        </div>

        <div className={`flex mt-8`}>
          <InfoBadge maxWScreen={`max-w-[515px]`} name={`additionalConveniences`} value={`Pet Friendly, Elevator, Fireplace, Smart Home Features,
            Parking Slot, Air Conditioning`}
                     editable={false}
                     heading={`Additional Conveniences`} />
        </div>


      </form>
    </>
  );
}
