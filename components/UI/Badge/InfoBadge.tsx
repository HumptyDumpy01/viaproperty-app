// 'use client';

import { useState } from 'react';
import { Tooltip } from '@mui/material';
import MetricNumbersAndInput from '@/components/UI/MetricDisplay/MetricNumbersAndInput';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';

type InfoBadgeType = {
  editable?: boolean;
  heading: string;
  value: string;
  name: string;
  infoType?: `default` | `propertyMetric` | `extra` | `vitals`;
  propertyMetric?: {
    beds: number;
    showers: number;
    baths: number;
    bedrooms: number;
    kitchens: number;
    parkingSlots: number;
  };
  extraFeatures?: {
    title: string;
    price: number;
    name: string;
  }[];
  placeholder?: string;
  maxWScreen?: string;
  vitals?: {
    title: string;
    description: string;
    contactAndViewingArrangements: { initials: string; phones: string[] }[];
  }
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
              maxWScreen = `max-w-screen-md`,
              extraFeatures,
              vitals
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
            <div className={`flex gap-4 flex-col bp-620:flex-row`}>
              <MetricNumbersAndInput metric={`Beds:`} defaultValue={propertyMetric!.beds} editable={true}
                                     inputName={`beds`} btnClicked={btnClicked} />

              <MetricNumbersAndInput metric={`Showers:`} defaultValue={propertyMetric!.showers} editable={true}
                                     inputName={`showers`} btnClicked={btnClicked} />

              <MetricNumbersAndInput metric={`Baths:`} defaultValue={propertyMetric!.baths} editable={true}
                                     inputName={`baths`} btnClicked={btnClicked} />
            </div>

            <div className={`flex gap-4 flex-col bp-620:flex-row`}>

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

        {(infoType === `extra` && extraFeatures) && (
          <div className={`flex flex-col gap-2`}>
            {extraFeatures.map(function(feature) {
              return (
                <>
                  <div className={`flex items-center bp-620:w-[332px] justify-between`}>
                    <h3 className={`text-zinc-900`}>{feature.title}</h3>
                    <div className={`flex`}>
                      <input name={feature.name} readOnly={!btnClicked} type={`number`} defaultValue={feature.price}
                             className={`inline-block text-end font-semibold border-b border-transparent
                             focus:outline-none focus:border-b focus:border-b-red-500`}
                             placeholder={`0`} />
                      <span className={`text-zinc-900 font-semibold`}>$</span>
                    </div>
                  </div>
                </>
              );
            })}

          </div>
        )}

        {(infoType === `vitals` && vitals) && (
          <div className={`flex flex-col gap-6 bp-620:w-[690px] w-full`}>

            <div className={`flex bp-620:w-[332px] flex-col gap-2`}>
              <h3 className={`bg-clip-text text-xl text-transparent bg-linear-main-red font-bold`}>Title</h3>
              <div className={`flex`}>
                <input readOnly={!btnClicked} name={`title`}
                       className={`text-zinc-900 w-full border-b border-transparent focus:outline-none ${editable ? `focus:border-b focus:border-b-red-500` : ``}`}
                       placeholder={`title`}
                       defaultValue={vitals.title} />
              </div>
            </div>

            <div className={`flex flex-col gap-2`}>
              <h3 className={`bg-clip-text text-xl text-transparent bg-linear-main-red font-bold`}>Description</h3>
              <div className={`flex`}>
                <textarea readOnly={!btnClicked} name={`description`}
                          className={`text-zinc-900 bp-620:w-96 border-b border-transparent focus:outline-none ${editable ? `focus:border-b focus:border-b-red-500` : ``}`}
                          placeholder={`description`}
                          defaultValue={vitals.description} />
              </div>
            </div>

            <h3
              className={`bg-clip-text text-xl text-transparent bg-linear-main-red font-bold`}>Contact & Viewing
              Arrangements</h3>
            {vitals.contactAndViewingArrangements.map(function(contact) {
              return (
                <>
                  <div className={`flex flex-col gap-2`}>
                    <div className={`flex`}>
                      <input readOnly={!btnClicked} name={`initials`}
                             className={`text-red-500 font-medium 
                             border-b border-transparent focus:outline-none ${editable ? `focus:border-b focus:border-b-red-500` : ``}`}
                             placeholder={`Initials`}
                             defaultValue={contact.initials} type={`text`} />
                    </div>
                    {contact.phones.map(function(phone) {
                      return (
                        <>
                          <div className={`flex`}>
                            <input readOnly={!btnClicked} name={`phone`}
                                   className={`text-zinc-600 font-semibold 
                                   border-b border-transparent focus:outline-none ${editable ? `focus:border-b focus:border-b-red-500` : ``}`}
                                   placeholder={`Phone`}
                                   defaultValue={phone} type={`tel`} />
                          </div>
                        </>
                      );
                    })}

                  </div>
                </>
              );
            })}

          </div>
        )}

        {(editable && !btnClicked) && (
          <Tooltip title={`Unlock the ability to edit this information.`}>
            <button onClick={() => setBtnClicked(true)} type={`button`} className={`flex items-center justify-center absolute -top-3 -right-6 rounded-full w-12 h-12
              border border-red-500 bg-white`}>
              <ViapropertyIcon icon={`edit`} />
            </button>
          </Tooltip>
        )}
      </div>
    </>
  );
}
