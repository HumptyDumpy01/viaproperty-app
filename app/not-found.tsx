// 'use client';

/*type NotFoundPageType = {
  // children: ReactNode;
}*/

import MainContainer from '@/components/Layout/Container/MainContainer';
import ErrorLayout from '@/components/Layout/Error/ErrorLayout';

export default function NotFoundPage(/*{  }: NotFoundPageType*/) {
  return (
    <MainContainer>
      <ErrorLayout heading={`Oops! We were not
able to find this resource!`} image={`notFound`} text={(
        <>
          The page you are looking for might have been removed, had its name changed, or is temporarily
          unavailable.
          We apologize for the inconvenience. Please try again later.
        </>
      )} links={[{
        href: `/`,
        label: `Home`,
        style: `blue`
      },
        {
          href: `/properties`,
          label: `Search Properties`,
          style: `blue`
        },
        {
          href: `/blog`,
          label: `Blog`,
          style: `blue`
        },
        {
          href: `/sell`,
          label: `Sell/Rent my property`,
          style: `blue`
        },
        {
          href: `..`,
          label: `Go Back`,
          style: `red`
        }
      ]} errorCode={404} />
    </MainContainer>
  );
}
