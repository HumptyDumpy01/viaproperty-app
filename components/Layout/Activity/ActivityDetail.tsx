// 'use client';

import { type ReactNode } from 'react';
import AccountActivityIcon, { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';
import Paragraph from '@/components/Typography/Paragraph';
import { Tooltip } from '@mui/material';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import Link from 'next/link';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import ActivityHeroContent from '@/components/Layout/Activity/ActivityHeroContent';

type ActivityDetailType = {
  date: string;
  message: ReactNode;
  iconType: AccountActivityIconsTypeEnum;
  dollarColor?: `red` | `white`;
  trashCanVisibility: boolean;
  circleColor: `filledBlue` | `filledRed` | `emptyBorderRed` | `emptyBorderBlue` | `emptyBorderGrey`;
  seeDetailsButtonVisibility?: {
    visible: boolean;
    href: string;
    label: string;
  } | null;
  messageFont?: string;
  makeMessageLink?: {
    href: string;
  } | null;
  customContainerClasses?: string;
  copyToClipboard?: boolean;

  // children: ReactNode;
}

export default function
  ActivityDetail({
                   date,
                   message,
                   iconType,
                   trashCanVisibility,
                   circleColor = `filledBlue`,
                   seeDetailsButtonVisibility = null,
                   messageFont = ``,
                   makeMessageLink = null,
                   customContainerClasses = `items-center justify-between flex-col gap-5 bp-620:gap-0 bp-620:flex-row flex w-full`,
                   dollarColor = `white`,
                   copyToClipboard = false
                 }: ActivityDetailType) {
  const filledBlue = `bg-linear-main-dark-blue`;
  const emptyBorderRed = `border border-red-500 bg-white`;
  const filledRed = `bg-linear-main-red`;
  const emptyBorderBlue = `border border-blue-950 bg-white`;
  const emptyBorderGrey = `border border-zinc-500 bg-white`;

  let chosenCircleStyle = null;

  switch (circleColor) {
    case `filledBlue`:
      chosenCircleStyle = filledBlue;
      break;
    case `emptyBorderRed`:
      chosenCircleStyle = emptyBorderRed;
      break;
    case `filledRed`:
      chosenCircleStyle = filledRed;
      break;
    case `emptyBorderBlue`:
      chosenCircleStyle = emptyBorderBlue;
      break;
    case `emptyBorderGrey`:
      chosenCircleStyle = emptyBorderGrey;
  }

  return (
    <>
      <div className={customContainerClasses}>
        <div className={`flex gap-5`}>
          <div className={`uppercase w-fit h-fit text-xl min-w-[72px] min-h-[72px] ${chosenCircleStyle}
                text-white flex justify-center items-center rounded-full font-medium`}>
            <AccountActivityIcon dollarColor={dollarColor} type={iconType} />
          </div>
          <div className={`flex flex-col justify-center gap-2`}>
            <div className={`flex items-center gap-2.5 w-fit`}>
              <span className={`text-zinc-500 text-sm`}>{date}</span>
            </div>
            {!makeMessageLink ? (
              <ActivityHeroContent
                copyToClipboard={copyToClipboard}
                messageFont={messageFont}
                message={message}
              />
            ) : (
              <>
                <Paragraph text={(
                  <Link href={makeMessageLink.href} className={messageFont}>
                    {message}
                  </Link>
                )} />
              </>
            )}
          </div>
        </div>

        {trashCanVisibility && (
          <p className={`flex items-center gap-5`}>
            {(seeDetailsButtonVisibility && seeDetailsButtonVisibility.visible) && (
              <Link href={seeDetailsButtonVisibility.href}>
                <ButtonActive color={`red`} size={`small`}
                              active={true}
                              label={seeDetailsButtonVisibility.label} />
              </Link>
            )}
            <Tooltip title={'Remove this activity from history'}>
              <button className={`flex w-fit`}>
                <ViapropertyIcon icon={`trashCan`} />
              </button>
            </Tooltip>
          </p>
        )}
      </div>
    </>
  );
}
