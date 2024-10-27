'use client';

import ExpandIcon from '@/components/UI/Icon/ExpandIcon';
import React, { useState } from 'react';
import CheckboxAndLabelBetween from '@/components/UI/Checkbox/CheckboxAndLabelBetween';

type FoldListType = {
  label: string;
  type: `checkbox` | `default`;
  checkboxes?: { checkboxLabel: string; checkboxName: string, spanLabel: string }[];
  defaultProperties?: { label: string; span: string, type?: `discount` | `property-price` }[];
  // children: ReactNode;
}

export default function FoldList({ label, checkboxes, type, defaultProperties }: FoldListType) {
  const [listUnfolded, setListUnfolded] = useState<boolean>(true);
  return (
    <>
      <div className={`flex flex-col gap-2 justify-center`}>
        <div className={`flex justify-between items-center mb-4`}>
          <h3 onClick={() => setListUnfolded((state) => !state)}
              className={`bg-clip-text cursor-pointer text-xl select-none text-transparent bg-linear-main-red font-bold`}>{label}</h3>
          <div onClick={() => setListUnfolded((state) => !state)}>
            <ExpandIcon state={listUnfolded} />
          </div>
        </div>
        {listUnfolded && (
          <>
            <div className={`flex flex-col gap-1`}>
              {checkboxes && type === `checkbox` && checkboxes.map(function(checkbox) {
                return (
                  <>
                    <CheckboxAndLabelBetween {...checkbox} />
                  </>
                );
              })}
            </div>
            {type === `default` && (
              <>
                <div className={`flex flex-col justify-between gap-3 border border-zinc-200 p-5 rounded-2xl`}>
                  {defaultProperties && type === `default` && defaultProperties.map(function(item) {
                    return (
                      <>
                        <div className={`flex items-center justify-between`}>
                          <span className={`text-[14px] truncate text-zinc-500 font-medium`}>{item.label}</span>
                          <div className={`bg-zinc-100 rounded-xl`}>
                            <p className={`bg-zinc-100 rounded-xl text-sm truncate px-2 py-1
                          ${item.type === `discount` ? `bg-clip-text text-transparent bg-linear-main-red font-semibold` : ``}`}>{item.span}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            )}
          </>
        )}
      </div>

    </>
  );
}
