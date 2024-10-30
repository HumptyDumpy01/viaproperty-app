'use client';

import { useState } from 'react';
import Checkbox from '@/components/UI/Checkbox/Checkbox';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import CloseLayoutIcon from '@/components/UI/Button/CloseLayoutIcon';

type SetOfCheckboxesType = {
  label: string;
  questionMark?: {
    visible: boolean;
    content: string;
  };
  setOfCheckboxes: { name: string; label: string }[];
  // children: ReactNode;
}

export default function
  SetOfCheckboxes({
                    label,
                    questionMark = { visible: false, content: `` },
                    setOfCheckboxes
                  }: SetOfCheckboxesType) {
  const [seeMoreClicked, setSeeMoreClicked] = useState<boolean>(false);
  const [questionMarkVisibility, setQuestionMarkVisibility] = useState<boolean>(false);
  return (
    <>
      <div className={`flex gap-5`}>
        <div className={`border border-red-500 rounded-3xl px-7 py-6 pr-11 relative`}>
          <h3 className={`text-zinc-700 font-semibold mb-5`}>{label}</h3>
          <div className={`flex flex-col justify-center gap-3`}>
            {setOfCheckboxes.length > 7 ? setOfCheckboxes.slice(0, 7).map(({ name, label }) => (
              <div key={name}>
                <Checkbox name={name} label={label} />
              </div>
            )) : setOfCheckboxes.map(({ name, label }) => (
              <div key={name}>
                <Checkbox name={name} label={label} />
              </div>
            ))}
            {setOfCheckboxes.length > 7 && (
              <div onClick={() => setSeeMoreClicked(true)}>
                <button type={`button`} className={`font-semibold text-zinc-900`}>See More</button>
              </div>
            )}
          </div>
          {seeMoreClicked && (
            <div className={`flex flex-col gap-3 mt-5`}>
              {setOfCheckboxes.slice(7).map(({ name, label }) => (
                <div key={name}>
                  <Checkbox name={name} label={label} />
                </div>
              ))}
            </div>
          )}
          {questionMark?.visible && (
            // <Tooltip title={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, totam.`}>
            <button onClick={() => setQuestionMarkVisibility(prevState => !prevState)} type={`button`}
                    className={`absolute top-4 right-4`}>
              <ViapropertyIcon icon={`questionMark`} />
            </button>
            // </Tooltip>
          )}
          {questionMark?.visible && (
            <>
              <div
                className={`w-80 h-60 bg-white border border-zinc-200 absolute -top-[210px] -right-[290px] rounded-3xl p-5
                transition-all duration-200 z-10
                ${!questionMarkVisibility ? `pointer-events-none opacity-0 translate-y-2/4` : `pointer-events-auto opacity-100 
                translate-y-0`}`}>
                <div className={`flex items-center gap-2.5 mb-5`}>
                  <CloseLayoutIcon
                    iconWidth={20}
                    iconHeight={20}
                    layoutOpen={questionMarkVisibility}
                    dispatch={() => setQuestionMarkVisibility(false)}
                    extraClasses={`w-8 h-8`}
                    fixedPosition={`top-3 right-3`} />
                  <ViapropertyIcon icon={`questionMark`} />
                  <div
                    className={`border border-red-500 rounded-full uppercase py-[6px] px-4 bg-clip-text text-transparent bg-linear-main-red font-bold`}>tip
                  </div>
                </div>
                <p className={`text-zinc-700 text-[15px] leading-relaxed`}>{questionMark?.content}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
