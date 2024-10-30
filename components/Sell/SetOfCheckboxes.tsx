'use client';

import { useState } from 'react';
import Checkbox from '@/components/UI/Checkbox/Checkbox';
import ContainerBox from '@/components/Layout/Container/ContainerBox';

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
      <ContainerBox
        questionMarkVisibility={questionMarkVisibility}
        setQuestionMarkVisibility={setQuestionMarkVisibility} questionMark={questionMark}>
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
          {(setOfCheckboxes.length > 7 && !seeMoreClicked) && (
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
      </ContainerBox>
    </>
  );
}
