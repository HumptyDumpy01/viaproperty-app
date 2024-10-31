// 'use client';

/*type SellInputContentType = {
  // children: ReactNode;
}*/

import SellForms from '@/components/Sell/SellForms';
import NotAuthorized from '@/components/Layout/Auth/NotAuthorized';

export type activeStateType = {
  stepOne: `disabled` | `active` | `completed`;
  stepTwo: `disabled` | `active` | `completed`;
  stepThree: `disabled` | `active` | `completed`;
  stepFour: `disabled` | `active` | `completed`;
  finishingSteps: `disabled` | `active` | `completed`;
};

export default function SellInputContent(/*{  }: SellInputContentType*/) {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated && (
        <SellForms />
      )}
      {!isAuthenticated && (
        <NotAuthorized />
      )}
    </>
  );
}
