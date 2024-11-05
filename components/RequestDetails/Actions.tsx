// 'use client';

type ActionsType = {
  type: `forCustomer` | `forLandlord`;
  chatHref: string;
  // children: ReactNode;
}

import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import Link from 'next/link';

export default function Actions({ type, chatHref }: ActionsType) {
  return (
    <>
      <div>
        <ViapropertyHeading customClasses={`mb-8`} label={`Actions`} headingSize={`md`} />
        <Paragraph text={(
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Nam, <HighlightText text={`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.`} />
          </>
        )} />

        <form>
          {type === `forLandlord` && (
            <>
              <div className={`flex flex-col mt-8`}>
                <div className={`flex flex-col gap-4`}>
                  <button className={`bg-linear-green text-white font-bold text-2xl rounded-full px-7 py-5 w-fit`}>
                    Approve
                  </button>

                  <Paragraph text={(
                    <>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore
                      et
                      dolore magna aliqua. Nam, <HighlightText text={`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.`} />
                    </>
                  )} />

                </div>
              </div>
            </>
          )}

          <div className={`flex flex-col mt-8`}>
            <div className={`flex flex-col gap-4`}>
              <button className={`bg-linear-main-red text-white font-bold text-2xl rounded-full px-7 py-5 w-fit`}>
                {type === `forLandlord` ? `Decline` : `Cancel`}
              </button>

              <Paragraph text={(
                <>
                  {type === `forLandlord` && (
                    <>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore
                      et
                      dolore magna aliqua. Nam, <HighlightText text={`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.`} />
                    </>
                  )}

                  {type === `forCustomer` && (
                    <>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore
                      et
                      dolore magna aliqua. Nam, <HighlightText text={`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.`} />
                    </>
                  )}
                </>
              )} />

            </div>
          </div>

          <div className={`flex flex-col mt-8`}>
            <div className={`flex flex-col gap-4`}>
              <Link href={chatHref}
                    className={`bg-linear-main-dark-blue text-white font-bold text-2xl rounded-full px-7 py-5 w-fit 
                    transition-all duration-200 hover:bg-white`}>
                Chat
              </Link>

              <Paragraph text={(
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore
                  et
                  dolore magna aliqua. Nam, <HighlightText text={`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.`} />
                </>
              )} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
