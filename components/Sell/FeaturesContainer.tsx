'use client';

import { ReactNode, useState } from 'react';
import ContainerBox from '@/components/Layout/Container/ContainerBox';

type FeaturesContainerType = {
  children: ReactNode;
  heading: string;
}

export default function FeaturesContainer({ children, heading }: FeaturesContainerType) {
  const [questionMarkVisibility, setQuestionMarkVisibility] = useState<boolean>(false);
  return (
    <>
      <div>
        <ContainerBox
          questionMark={{
            visible: true,
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi labore veritatis.`
          }}
          questionMarkVisibility={questionMarkVisibility}
          setQuestionMarkVisibility={setQuestionMarkVisibility}>
          <div>
            <h3 className={`text-zinc-700 text-xl font-semibold mb-5`}>{heading}</h3>

            <div className={`flex justify-center gap-4 flex-col`}>
              {children}
            </div>
          </div>
        </ContainerBox>
      </div>
    </>
  );
}
