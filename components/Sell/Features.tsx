'use client';

import { ReactNode } from 'react';

type FeaturesType = {
  mainHeading?: string;
  featureHeading: string;
  children: ReactNode;
}

import FeaturesContainer from '@/components/Sell/FeaturesContainer';

export default function Features({ children, mainHeading, featureHeading }: FeaturesType) {
  return (
    <>
      <div>
        {mainHeading && (
          <>
            <h3 className={`bg-clip-text text-transparent bg-linear-main-red font-bold
            text-xl w-fit mb-6`}>{mainHeading}</h3>
          </>
        )}
        <div>
          <FeaturesContainer heading={featureHeading}>
            {children}
          </FeaturesContainer>
        </div>
      </div>
    </>
  );
}
