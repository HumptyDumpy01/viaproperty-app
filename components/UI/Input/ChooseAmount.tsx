// 'use client';

import { PropertyHasType } from '@/components/Sell/SecondForm';
import { Dispatch, SetStateAction } from 'react';
import { windowExists } from '@/utils/functions/windowExists';

type PropertyLabelType = `beds` | `showers` | `bedrooms` | `kitchens` | `parkingSlots` | `baths`;

type ChooseAmountType = {
  label: string;
  items: number;
  propertyLabel: PropertyLabelType;
  setItems: Dispatch<SetStateAction<PropertyHasType>>;
  // children: ReactNode;
}

export default function ChooseAmount({ label, items, setItems, propertyLabel }: ChooseAmountType) {
  function handleBtnClick(action: `decrease` | `increase`) {
    setItems((prevState) => {
      const newState = { ...prevState };
      switch (action) {
        case 'decrease':
          newState[propertyLabel] = newState[propertyLabel] - 1;
          if (windowExists()) {
            window.localStorage.setItem('propertyHas', JSON.stringify(newState));
          }
          break;
        case 'increase':
          newState[propertyLabel] = newState[propertyLabel] + 1;
          if (windowExists()) {
            window.localStorage.setItem('propertyHas', JSON.stringify(newState));
          }
          break;
      }
      return newState;
    });
  }

  return (
    <>
      <div className={`flex items-center justify-between min-w-80 gap-7`}>
        <div className={`mr-auto`}>
          <label className={`text-2xl bg-clip-text text-transparent bg-linear-main-red font-bold`}>{label}</label>
        </div>
        <div className={`flex items-center gap-2`}>
          <button onClick={items !== 0 ? () => handleBtnClick(`decrease`) : undefined}
                  type={`button`}
                  className={`bg-linear-main-red text-white text-xl w-8 h-8 flex items-center justify-center rounded-full`}>-
          </button>
          <span
            className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-2xl w-11 text-center appearance-none
                         transition-all duration-300 border-2 border-transparent focus:border-red-500 focus:outline-none rounded`}
          >{items}</span>
          <button type={`button`} onClick={() => handleBtnClick(`increase`)}
                  className={`bg-linear-main-red text-white text-xl w-8 h-8 flex items-center justify-center rounded-full`}>+
          </button>
        </div>
      </div>
    </>
  );
}
