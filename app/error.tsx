'use client';

import HighlightText from '@/components/Typography/HighlightText';
import MainContainer from '@/components/Layout/Container/MainContainer';
import ErrorLayout from '@/components/Layout/Error/ErrorLayout';

type ErrorPageType = {
  error: Error;
  // children: ReactNode;
}

export default function ErrorPage({ error }: ErrorPageType) {
  return (
    <>
      <MainContainer>
        <ErrorLayout heading={`Oops! Something went 
          wrong here!`} image={`internalError`} text={(
          <>
            Oops! An unexpected error occurred on our side! We are sorry for the inconvenience.
            Please try again later or contact us if the problem persists: <HighlightText
            text={error.message} />
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
        ]} errorCode={500} />
      </MainContainer>
    </>
  );
}
