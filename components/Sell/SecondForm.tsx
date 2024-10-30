'use client';

/*type SecondFormType = {
  // children: ReactNode;
}*/

import { useState } from 'react';
import ChooseAmount from '@/components/UI/Input/ChooseAmount';
import TagBadge from '@/components/UI/Badge/TagBadge';
import SetOfCheckboxes from '@/components/Layout/SetOfCheckboxes';

export default function SecondForm(/*{  }: SecondFormType*/) {
  const [beds, setBeds] = useState<number>(0);
  const [showers, setShowers] = useState<number>(0);
  const [baths, setBaths] = useState<number>(0);
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [kitchens, setKitchens] = useState<number>(0);
  const [parkingSlots, setParkingSlots] = useState<number>(0);

  return (
    <>
      <form className={`flex flex-col mt-9`}>
        <h2 className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-2xl
          mb-10`}>My Property has..</h2>
        <div className={`flex items-center  mb-12`}>
          <div className={`flex justify-center flex-col gap-7`}>
            <div className={`flex items-center gap-12 justify-between`}>
              <ChooseAmount label={`Beds`} item={beds} setItem={setBeds} />
              <ChooseAmount label={`Bedrooms`} item={bedrooms} setItem={setBedrooms} />
            </div>

            <div className={`flex items-center gap-12 justify-between`}>
              <ChooseAmount label={`Showers`} item={showers} setItem={setShowers} />
              <ChooseAmount label={`Kitchens`} item={kitchens} setItem={setKitchens} />
            </div>

            <div className={`flex items-center gap-12 justify-between`}>
              <ChooseAmount label={`Baths`} item={baths} setItem={setBaths} />
              <ChooseAmount label={`Parking Slots`} item={parkingSlots} setItem={setParkingSlots} />
            </div>
          </div>
        </div>

        <div>
          <h2 className={`bg-clip-text text-2xl mb-5 text-transparent bg-linear-main-red font-bold`}>Add Property Tags!
            (Optional)</h2>
          <p className={`max-w-3xl text-zinc-900 leading-relaxed mb-6`}>Lorem ipsum dolor sit amet, consectetur
            adipiscing
            elit, sed do eiusmod tempor incididunt.
            Lorem ipsum dolor sit amet, <span className={`text-red-500 font-semibold`}>consectetur adipiscing elit, sed do.</span>
          </p>

          <div className={`mb-10`}>
            <div className={`flex gap-3.5 items-center`}>
              <TagBadge label={`Custom Tag 1`} />
              <TagBadge label={`Custom Tag 2`} />
              <TagBadge label={`Custom Tag 3`} />
            </div>
          </div>
          <SetOfCheckboxes setOfCheckboxes={[
            { name: `garden`, label: `Garden` }, { name: `balcony`, label: `Balcony` }, {
              name: `swimming-pool`, label: `Swimming Pool`
            }, { name: `fireplace`, label: `Fireplace` },
            { name: `terrace`, label: `Terrace` }, { name: `furnished`, label: `Furnished` },
            { name: `basement`, label: `Basement` }
          ]} questionMark={{
            visible: true,
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias asperiores delectus est ipsam mollitia quasi rem repellat rerum soluta.`
          }} label={`Add additional conveniences`} />
        </div>
      </form>
    </>
  );
}
