// 'use client';

import { useState } from 'react';
import { Tooltip } from '@mui/material';
import MetricNumbersAndInput from '@/components/UI/MetricDisplay/MetricNumbersAndInput';

type InfoBadgeType = {
  editable?: boolean;
  heading: string;
  value: string;
  name: string;
  infoType?: `default` | `propertyMetric`;
  propertyMetric?: {
    beds: number;
    showers: number;
    baths: number;
    bedrooms: number;
    kitchens: number;
    parkingSlots: number;
  };
  placeholder?: string;
  maxWScreen?: string;
  // children: ReactNode;
}

export default function
  InfoBadge({
              heading,
              editable = true,
              value,
              name,
              infoType = `default`,
              propertyMetric,
              placeholder,
              maxWScreen = `max-w-screen-md`
            }: InfoBadgeType) {
  const [btnClicked, setBtnClicked] = useState<boolean>(false);
  return (
    <>
      <div className={`flex flex-col ${maxWScreen} gap-2 px-7 py-5 rounded-3xl border border-red-500 relative`}>
        <h3 className={`bg-clip-text text-xl text-transparent bg-linear-main-red font-bold`}>{heading}</h3>
        {infoType === `default` && (
          <>
            {editable && (
              <>
                <input readOnly={!btnClicked} name={name}
                       className={`text-zinc-900 border-b border-transparent focus:outline-none ${editable ? `focus:border-b focus:border-b-red-500` : ``}`}
                       placeholder={placeholder ? placeholder : ``}
                       defaultValue={value} />

              </>
            )}
            {!editable && (
              <p className={`text-zinc-900 leading-relaxed`}>{value}</p>
            )}
          </>
        )}
        {infoType === `propertyMetric` && (
          <div className={`flex flex-col`}>
            <div className={`flex gap-4`}>
              <MetricNumbersAndInput metric={`Beds:`} defaultValue={propertyMetric!.beds} editable={true}
                                     inputName={`beds`} btnClicked={btnClicked} />

              <MetricNumbersAndInput metric={`Showers:`} defaultValue={propertyMetric!.showers} editable={true}
                                     inputName={`showers`} btnClicked={btnClicked} />

              <MetricNumbersAndInput metric={`Baths:`} defaultValue={propertyMetric!.baths} editable={true}
                                     inputName={`baths`} btnClicked={btnClicked} />
            </div>

            <div className={`flex gap-4`}>

              <MetricNumbersAndInput metric={`Bedrooms:`} defaultValue={propertyMetric!.bedrooms} editable={true}
                                     inputName={`bedrooms`} btnClicked={btnClicked} />

              <MetricNumbersAndInput metric={`Kitchens:`} defaultValue={propertyMetric!.kitchens} editable={true}
                                     inputName={`kitchens`} btnClicked={btnClicked} />

              <MetricNumbersAndInput metric={`Parking Slots:`} defaultValue={propertyMetric!.parkingSlots}
                                     editable={true}
                                     inputName={`parkingSlots`} btnClicked={btnClicked} />
            </div>
          </div>
        )}
        {(editable && !btnClicked) && (
          <Tooltip title={`Unlock the ability to edit this information.`}>
            <button onClick={() => setBtnClicked(true)} type={`button`} className={`flex items-center justify-center absolute -top-3 -right-6 rounded-full w-12 h-12
              border border-red-500 bg-white`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 21V16.75L16.2 3.575C16.4 3.39167 16.621 3.25 16.863 3.15C17.105 3.05 17.359 3 17.625 3C17.891 3 18.1493 3.05 18.4 3.15C18.6507 3.25 18.8673 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.771 5.4 20.863 5.65C20.955 5.9 21.0007 6.15 21 6.4C21 6.66667 20.9543 6.921 20.863 7.163C20.7717 7.405 20.6257 7.62567 20.425 7.825L7.25 21H3ZM17.6 7.8L19 6.4L17.6 5L16.2 6.4L17.6 7.8Z"
                  fill="url(#paint0_linear_1055_6836)" />
                <defs>
                  <linearGradient id="paint0_linear_1055_6836" x1="3" y1="12" x2="21" y2="12"
                                  gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FB3838" />
                    <stop offset="1" stop-color="#F27155" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </Tooltip>
        )}
      </div>
    </>
  );
}
