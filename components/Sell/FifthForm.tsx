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
import Button from '@/components/UI/Button/Button';

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

        <div className={`flex bp-620:items-center gap-6 mt-9 mb-7 flex-col bp-620:flex-row`}>
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

        <div className={`flex mt-8`}>
          <InfoBadge extraFeatures={[
            { title: `Garage`, price: 14499, name: `garage` },
            { title: `Garden`, price: 14499, name: `garden` },
            { title: `Balcony`, price: 14499, name: `balcony` },
            { title: `Swimming Pool`, price: 14499, name: `swimmingPool` }
          ]} infoType={`extra`} maxWScreen={`max-w-[515px]`} name={`extraFeatures`} value={``}
                     editable={true}
                     heading={`Extra Features`} />
        </div>

        <div className={`flex mt-8`}>

          <InfoBadge maxWScreen={`max-w-[515px]`} name={`discount`} value={`None`}
                     editable={true}
                     heading={`Discount Applied`} />
        </div>

        <div className={`flex mt-8  mb-12`}>
          <InfoBadge
            infoType={`vitals`}
            vitals={
              {
                title: `lorem ipsum dolor sit amet`,
                description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, harum?`,
                contactAndViewingArrangements: [
                  { initials: `John Doe`, phones: [`+44 123 456 7890`, `+44 123 456 7890`] },
                  { initials: `Nancy Doe`, phones: [`+44 123 456 7890`, `+44 123 456 7890`] }
                ]
              }
            } maxWScreen={`max-w-[515px]`} name={``}
            value={``}
            editable={true}
            heading={``} />
        </div>

        <div className={`mb-6`}>
          <p className={`text-zinc-900 leading-relaxed max-w-4xl`}>Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.
            Accusamus aperiam aut consectetur consequatur
            culpa
            deleniti, dolore harum illo iure molestiae <HighlightText text={`optio pariatur quam quas quia`} /> quo
            similique soluta tempore
            voluptatibus.</p>
        </div>
        <div className={`flex flex-col gap-6`}>
          <Button type={`button`} label={`Confirm`}
            // @ts-ignore
                  onClick={() => setActiveState((prevState: activeStateType) => ({
                    ...prevState, finishingSteps: `completed`
                  }))} />
          <Button mode={`lg`} btnVariant={`black`} type={`button`} label={`Cancel`} />
        </div>

      </form>
    </>
  );
}
