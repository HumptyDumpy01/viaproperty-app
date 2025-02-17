// 'use client';

/*type SellInputContentType = {
  // children: ReactNode;
}*/

import SellForms from '@/components/Sell/SellForms';
import NotAuthorized from '@/components/Layout/Auth/NotAuthorized';
import { useUserDataOnClient } from '@/hooks/queries/useUserDataOnClient';
import LoadingScreen from '@/components/Layout/Loading/LoadingScreen';

export type activeStateType = {
  stepOne: `disabled` | `active` | `completed`;
  stepTwo: `disabled` | `active` | `completed`;
  stepThree: `disabled` | `active` | `completed`;
  stepFour: `disabled` | `active` | `completed`;
  finishingSteps: `disabled` | `active` | `completed`;
};

export default function SellInputContent(/*{  }: SellInputContentType*/) {
  const { userData, loading } = useUserDataOnClient();

  if (loading) {
    return <LoadingScreen />;
  }

  const isAuthenticated = userData !== null;
  return (
    <>
      {isAuthenticated && (
        <SellForms mode={`createAdvert`} />
      )}
      {!isAuthenticated && (
        <NotAuthorized heading={`Only logged in users can start selling or renting their property!`} error={401} text={(
          <>
            Please log in in order to sell your property or rent it to your customers. We do care about security!
          </>
        )} links={[{
          linkStyle: `red`, href: `/auth/login`, label: `Log in`, orSeparator: true
        }, {
          linkStyle: `emptyBlack`, href: `/auth/register`, label: `Register`
        }]}
        />
      )}
    </>
  );
}
