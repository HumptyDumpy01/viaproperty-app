'use client';

import ButtonPropertyType from '@/components/UI/Button/ButtonPropertyType';
import Checkbox from '@/components/UI/Checkbox/Checkbox';
import Range from '@/components/UI/Input/Range';
import SelectQuantity from '@/components/UI/Input/SelectQuantity';

export default function Properties() {
  return (
    <main className={`overflow-hidden max-w-7xl mx-auto w-full`}>
      <div className={`grid grid-cols-custom-3-cols mt-12`}>
        <div>
          <div className={`flex items-center justify-between mb-5`}>
            <h1 className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-3xl`}>Filters</h1>
            <button className={`text-zinc-600`}>Clear Filters</button>
          </div>
          <div>
            <h2 className={`text-zinc-900 font-bold text-xl mb-3.5`}>Property Type</h2>
            <div className={`grid grid-cols-2 gap-y-3.5`}>
              <ButtonPropertyType icon={`home`} label={`Home`} />
              <ButtonPropertyType icon={`apartment`} label={`Apartment`} />
              <ButtonPropertyType icon={`commercial`} label={`Commercial`} />
              <ButtonPropertyType icon={`cottage`} label={`Cottage`} />
            </div>
          </div>
          <div className={`mt-4`}>
            <h2 className={`text-zinc-900 font-bold text-[16px] mb-3.5`}>Searching for</h2>
            <div className={`flex flex-col gap-2`}>
              <Checkbox name={`buy`} label={`Buying Property`} />
              <Checkbox name={`rent`} label={`Renting Property`} />
            </div>
          </div>
          <div className={`mt-6`}>
            <h2 className={`text-zinc-900 font-bold text-[16px] mb-3.5`}>Price range</h2>
            <Range metric={`dollars`} name={`pricingRange`} step={500} max={1988987} maxFormatted={`1,988,987`}
                   min={3888} />
          </div>
          <div className={`mt-7 flex items-center gap-10`}>
            <div>
              <h3 className={`text-zinc-900 font-bold text-[16px] mb-6`}>Bedrooms</h3>
              <SelectQuantity />
            </div>
            <div>
              <h3 className={`text-zinc-900 font-bold text-[16px] mb-6`}>Bathrooms</h3>
              <SelectQuantity type={`light`} />
            </div>
          </div>

          <div className={`mt-6`}>
            <h2 className={`text-zinc-900 font-bold text-[16px] mb-3.5`}>Property area range</h2>
            <Range metric={`sqft`} name={`areaRange`} step={40} max={10000} maxFormatted={`10,000`} min={500} />
          </div>

          <div className={`mt-7`}>
            <h2 className={`text-zinc-900 font-bold text-[16px] mb-3.5`}>Additional Conveniences</h2>

            <div className={`flex flex-col gap-2`}>
              <Checkbox name={`parkingSlot`} label={`Parking slot`} />
              <Checkbox name={`elevator`} label={`Elevator`} />
              <Checkbox name={`fireplace`} label={`Fireplace`} />
              <Checkbox name={`outdoorSpace`} label={`Outdoor Space`} />
              <Checkbox name={`smartHomeFeatures`} label={`Smart Home Features`} />
              <Checkbox name={`garden`} label={`Garden`} />
            </div>
          </div>

        </div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}