'use client';

/*type FeaturesType = {
  // children: ReactNode;
}*/

import ContainerBox from '@/components/Layout/Container/ContainerBox';
import { useState } from 'react';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import ChooseImage from '@/components/UI/Input/ChooseImage/ChooseImage';

export default function Features(/*{ }: FeaturesType*/) {
  const [questionMarkVisibility, setQuestionMarkVisibility] = useState<boolean>(false);
  return (
    <>
      <div>
        <h3 className={`bg-clip-text text-transparent bg-linear-main-red font-bold
            text-xl w-fit mb-6`}>For Rent</h3>
        <div>
          <ContainerBox
            questionMark={{
              visible: true,
              content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi labore veritatis.`
            }}
            questionMarkVisibility={questionMarkVisibility}
            setQuestionMarkVisibility={setQuestionMarkVisibility}>
            <div>
              <h3 className={`text-zinc-700 text-xl font-semibold mb-5`}>Features</h3>

              <div className={`flex justify-center gap-4 flex-col`}>
                <LabelAndInput labelStyle={`grey-and-small`} name={`heading`} placeholder={`e.g. Posh Fireplace`}
                               customClassNames={`w-72 text-custom-medium`}
                               label={`Heading`} inputType={`text`} />

                <LabelAndInput type={`textarea`} labelStyle={`grey-and-small`} name={`short-description`}
                               placeholder={`e.g. This fireplace is the perfect place to relax after a long day.`}
                               customClassNames={`w-72 h-36 text-custom-medium`}
                               label={`Short Description`} inputType={`text`} />
                <div className={`overflow-x-auto scrollbar-thin max-w-[270px]`}>
                  <ChooseImage max={3} min={0} />
                </div>
                <div className={`mt-3`}>
                  <button className={`bg-clip-text text-lg text-transparent bg-linear-main-red font-bold`}>Add</button>
                </div>
              </div>

            </div>
          </ContainerBox>
        </div>
      </div>
    </>
  );
}
