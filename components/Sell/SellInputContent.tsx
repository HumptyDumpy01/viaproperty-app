// 'use client';

/*type SellInputContentType = {
  // children: ReactNode;
}*/

import SellForms from '@/components/Sell/SellForms';
import NotAuthorized from '@/components/Layout/Auth/NotAuthorized';
import HighlightText from '@/components/Typography/HighlightText';

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
        <NotAuthorized heading={`Only logged in users can start selling or renting their property!`} error={401} text={(
          <>
            Lorem ipsum dolor sit amet, <HighlightText
            text={`consectetur adipiscing elit, `} />sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </>
        )} links={[{
          linkStyle: `red`, href: `/auth?page=login`, label: `Log in`, orSeparator: true
        }, {
          linkStyle: `emptyBlack`, href: `/auth?page=register`, label: `Register`
        }]}
        />
      )}
    </>
  );
}
