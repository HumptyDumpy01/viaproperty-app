'use client';

/*type RequestDetailsPageType = {
  // children: ReactNode;
}*/

import MainContainer from '@/components/Layout/Container/MainContainer';
import Link from 'next/link';
import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';
import { useState } from 'react';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import Tooltip from '@/components/Layout/Tooltip/Tooltip';

export default function RequestDetailsPage(/*{  }: RequestDetailsPageType*/) {
  const [questionMarkVisibility, setQuestionMarkVisibility] = useState<boolean>(true);
  return (
    <MainContainer>

      <div className={`mt-11`}>
        <div className={`max-w-screen-bp-896`}>
          <h1 className={`bg-clip-text text-transparent bg-linear-main-red font-bold
        text-5xl w-fit mb-8 leading-tight`}>Account Activities</h1>
          <div>
            <Link className={`flex items-center gap-2 bg-clip-text text-transparent bg-linear-main-red font-bold
            border  border-red-500 rounded-full px-4 py-2 text-[15.5px] w-fit mb-5`}
                  href={`/account-settings?page=chats`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                <path
                  d="M4.87683 9.16541C4.72949 9.31555 4.52967 9.3999 4.32133 9.3999C4.11298 9.3999 3.91316 9.31555 3.76582 9.16541L0.230049 5.56131C0.0827471 5.41112 -1.32019e-06 5.20744 -1.33876e-06 4.99507C-1.35732e-06 4.7827 0.082747 4.57902 0.230049 4.42882L3.76582 0.824728C3.91401 0.678836 4.11248 0.598108 4.3185 0.599933C4.52451 0.601758 4.72158 0.685988 4.86726 0.834484C5.01294 0.982979 5.09558 1.18386 5.09737 1.39385C5.09916 1.60385 5.01996 1.80616 4.87683 1.95721L2.74987 4.19416L10.2143 4.19416C10.4227 4.19416 10.6225 4.27854 10.7699 4.42874C10.9172 4.57894 11 4.78265 11 4.99507C11 5.20748 10.9172 5.4112 10.7699 5.5614C10.6225 5.7116 10.4227 5.79598 10.2143 5.79598L2.74987 5.79598L4.87683 8.03292C5.02414 8.18311 5.10688 8.38679 5.10688 8.59916C5.10688 8.81154 5.02414 9.01521 4.87683 9.16541Z"
                  fill="#FB3838" />
              </svg>
              Go Back</Link>
          </div>
          <div className={`mb-8`}>
            <ViapropertyHeading customClasses={`mb-8`} label={`Request Details`} headingSize={`md`} />
            <Paragraph text={(
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Nam, <HighlightText text={`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.`} />
              </>
            )} />
          </div>
          <div className={`flex flex-col gap-4`}>
            <ActivityDetail messageFont={`text-[19px] font-medium`} trashCanVisibility={false}
                            circleColor={`filledBlue`}
                            iconType={
                              AccountActivityIconsTypeEnum.ID} date={`PROPERTY ID`}
                            message={`66cd917717fb802dfbc4e4a9`} />

            <ActivityDetail messageFont={`text-[19px] font-medium`} trashCanVisibility={false}
                            circleColor={`emptyBorderRed`}
                            iconType={
                              AccountActivityIconsTypeEnum.houseRedPlus} date={`Property Type`}
                            message={`Sell`} />
            <ActivityDetail
              makeMessageLink={{ href: `/properties/1` }}
              messageFont={`text-[19px] underline font-medium`}
              trashCanVisibility={false} circleColor={`emptyBorderRed`}
              iconType={
                AccountActivityIconsTypeEnum.houseRedUp} date={`Title`}
              message={`Lorem ipsum dolor sit amet, consectetur adipiscing elit..`} />

            <div className={`relative w-fit`}>
              <ActivityDetail
                messageFont={`text-[19px] font-medium`}
                trashCanVisibility={false} circleColor={`emptyBorderRed`}
                iconType={
                  AccountActivityIconsTypeEnum.loading} date={`Status`}
                message={`Pending`} />

              <div>
                <button onClick={() => setQuestionMarkVisibility(prevState => !prevState)} type={`button`}
                        className={`absolute top-6 -right-9`}>
                  <ViapropertyIcon icon={`questionMark`} />
                </button>
                <Tooltip
                  setQuestionMarkVisibility={setQuestionMarkVisibility}
                  questionMarkVisibility={questionMarkVisibility}
                  content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quaerat.`} />
              </div>
            </div>

            <ActivityDetail
              messageFont={`text-[19px] font-medium`}
              trashCanVisibility={false} circleColor={`emptyBorderRed`}
              iconType={
                AccountActivityIconsTypeEnum.user} date={`Customer`}
              message={`Nikolas Baker`} />

            <ActivityDetail
              messageFont={`text-[19px] font-medium`}
              trashCanVisibility={false} circleColor={`filledRed`}
              iconType={
                AccountActivityIconsTypeEnum.dollar} date={`Total`}
              message={`$165,999`} />
          </div>

        </div>
      </div>
    </MainContainer>
  );
}
