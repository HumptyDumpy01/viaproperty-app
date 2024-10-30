'use client';

import { activeStateType } from '@/components/Sell/SellInputContent';
import { useState } from 'react';
import ChooseAmount from '@/components/UI/Input/ChooseAmount';
import TagBadge from '@/components/UI/Badge/TagBadge';
import SetOfCheckboxes from '@/components/Sell/SetOfCheckboxes';
import HighlightText from '@/components/Typography/HighlightText';
import Features from '@/components/Sell/Features';
import Button from '@/components/UI/Button/Button';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';

type SecondFormType = {
  setActiveState: (prevState: activeStateType) => void;
  // children: ReactNode;
}

export default function SecondForm({ setActiveState }: SecondFormType) {
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
            Lorem ipsum dolor sit amet, <HighlightText text={`consectetur adipiscing elit, sed do.`} />
          </p>

          <div className={`mb-10`}>
            <div className={`flex gap-3.5 items-center`}>
              <TagBadge label={`Custom Tag 1`} />
              <TagBadge label={`Custom Tag 2`} />
              <TagBadge label={`Custom Tag 3`} />
            </div>
          </div>
          <div className={`mb-10`}>
            <SetOfCheckboxes setOfCheckboxes={[
              { name: `garden`, label: `Garden` }, { name: `balcony`, label: `Balcony` }, {
                name: `swimming-pool`, label: `Swimming Pool`
              }, { name: `fireplace`, label: `Fireplace` },
              { name: `terrace`, label: `Terrace` }, { name: `furnished`, label: `Furnished` },
              { name: `basement`, label: `Basement` },
              { name: `air-conditioning`, label: `Air Conditioning` },
              { name: `security-system`, label: `Security System` }
            ]} questionMark={{
              visible: true,
              content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias asperiores delectus est ipsam mollitia quasi rem repellat rerum soluta.`
            }} label={`Add additional conveniences`} />
            <p className={`leading-relaxed text-zinc-900 text-sm mt-5`}>Ut enim ad minim veniam, quis nostrud
              exercitation
              ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in <HighlightText
                text={`reprehenderit in voluptate velit esse`} /> cillum
              dolore eu
              fugiat nulla
              pariatur. </p>
          </div>

          <div>

            <h2 className={`bg-clip-text text-2xl mb-5 text-transparent bg-linear-main-red font-bold`}>Want to describe
              each Feature?(Optional)</h2>
            <p className={`max-w-3xl text-zinc-900 leading-relaxed mb-6 text-sm`}>Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
          </div>
          <div className={`flex gap-3.5 items-center mb-6`}>
            <TagBadge label={`Custom Feature 1`} />
            <TagBadge label={`Custom Feature 2`} />
            <TagBadge label={`Custom Feature 3`} />
          </div>
          <div className={`mb-10`}>
            <Features />
          </div>

          <div className={`mb-10`}>
            <h3 className={`bg-clip-text text-transparent bg-linear-main-red font-bold
            text-2xl w-fit mb-6`}>Do you want to apply discount? (Optional)</h3>
            <p className={`text-zinc-900 leading-relaxed`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              ad cumque ducimus earum facilis iusto laborum
              maxime, obcaecati officiis <HighlightText text={`recusandae repellendus, tempore voluptate.`} /></p>

            <div className={`mt-4`}>
              <LabelAndInput customClassNames={`w-96`} labelStyle={`grey-and-small`} label={`Sale (In Percentages)`}
                             name={`discount`}
                             placeholder={`e.g. 5`} inputType={`number`} />
            </div>
          </div>

          <div>
            <Button type={`button`} label={`Next`}
              // @ts-ignore
                    onClick={() => setActiveState((prevState: activeStateType) => ({
                      ...prevState, stepTwo: `completed`, stepThree: `active`
                    }))} />
          </div>
        </div>
      </form>
    </>
  );
}
