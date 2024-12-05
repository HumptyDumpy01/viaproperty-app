// components/UI/FeatureList/FoldList.tsx
import React, { useState } from 'react';
import ExpandIcon from '@/components/UI/Icon/ExpandIcon';
import CheckboxAndLabelBetween from '@/components/UI/Checkbox/CheckboxAndLabelBetween';

type FoldListType = {
  label: string;
  type: `checkbox` | `default`;
  checkboxes?: {
    checkboxLabel: string;
    checkboxName: string;
    spanLabel: string;
    onChange?: (isChecked: boolean) => void;
    checked?: boolean;
  }[];
  enableFold?: boolean;
  defaultProperties?: { label: string; span: string; type?: `discount` | `property-price` }[];
};

export default function FoldList({ label, checkboxes, type, defaultProperties, enableFold = true }: FoldListType) {
  const [listUnfolded, setListUnfolded] = useState<boolean>(true);
  return (
    <div className={`flex flex-col gap-2 justify-center`}>
      <div className={`flex justify-between items-center mb-4`}>
        <h3 onClick={enableFold ? () => setListUnfolded((state) => !state) : undefined}
            className={`bg-clip-text cursor-pointer text-xl select-none text-transparent bg-linear-main-red font-bold`}>{label}</h3>
        <div onClick={enableFold ? () => setListUnfolded((state) => !state) : undefined}>
          <ExpandIcon state={listUnfolded} />
        </div>
      </div>
      {listUnfolded && (
        <>
          <div className={`flex flex-col gap-1`}>
            {checkboxes && type === `checkbox` && checkboxes.map((checkbox) => (
              <CheckboxAndLabelBetween key={checkbox.checkboxName} {...checkbox} />
            ))}
          </div>
          {type === `default` && (
            <div className={`flex flex-col justify-between gap-3 border border-zinc-200 p-5 rounded-2xl`}>
              {defaultProperties && defaultProperties.map((item) => (
                <div key={item.label} className={`flex items-center justify-between`}>
                  <span className={`text-[14px] truncate text-zinc-500 font-medium`}>{item.label}</span>
                  <div className={`bg-zinc-100 rounded-xl`}>
                    <p className={`bg-zinc-100 rounded-xl text-sm truncate px-2 py-1
                      ${item.type === `discount` ? `bg-clip-text text-transparent bg-linear-main-red font-semibold` : ``}`}>{item.span}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}