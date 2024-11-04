// 'use client';

/*type BalanceAndActivityType = {
  // children: ReactNode;
}*/

import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import Button from '@/components/UI/Button/Button';
import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import AccountActivityDetails from '@/components/AccountSettings/Balance/AccountActivityDetails';
import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';

export default function BalanceAndActivity(/*{  }: BalanceAndActivityType*/) {
  return (
    <>
      <div>
        <div className={`flex flex-col justify-center gap-3.5 mb-9`}>
          <ViapropertyHeading label={`Current Balance`} headingSize={`lg`} />
          <span
            className={`bg-clip-text text-transparent bg-linear-main-dark-blue font-bold text-7xl w-fit`}>$144,998</span>
        </div>
        <Paragraph text={(
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, <HighlightText text={`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.`} />
          </>
        )}
        />
        <div className={`mt-9 mb-16`}>
          <Button linearGradient label={`Withdraw Funds`} color={`red`} />
        </div>

        <AccountActivityDetails pagination={{
          visible: true,
          showing: 7,
          total: 20,
          pages: 3
        }} headingLabel={`Account Activity`} paragraph={(
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, <HighlightText text={`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.`} />
          </>
        )} activity={(
          <>
            <ActivityDetail
              circleColor={`filledBlue`}
              trashCanVisibility={true}
              iconType={AccountActivityIconsTypeEnum.dollar}
              date={`August 29, 14:33`} message={(<>
              You withdrew <HighlightText text={`$130,999`} /> from your balance to ****4998 card.
            </>)} />

            <ActivityDetail
              seeDetailsButtonVisibility={{
                visible: true,
                label: `See Details`,
                href: `/`
              }}
              circleColor={`emptyBorderRed`}
              trashCanVisibility={true}
              iconType={AccountActivityIconsTypeEnum.confirmed}
              date={`August 29, 14:33`} message={(<>
              The deal <HighlightText text={`tb242334b..`} /> from <HighlightText style={`black`}
                                                                                  text={`John Doe`} /> is
              now complete.
            </>)} />

            <ActivityDetail
              circleColor={`filledRed`}
              trashCanVisibility={true}
              iconType={AccountActivityIconsTypeEnum.dollar}
              date={`August 29, 14:33`} message={(<>
              You received <HighlightText text={`$130,999`} /> from John Doe for <HighlightText
              text={`tb242334b...`} /> deal.
            </>)} />

            <ActivityDetail
              circleColor={`emptyBorderRed`}
              trashCanVisibility={true}
              iconType={AccountActivityIconsTypeEnum.houseRedPlus}
              date={`August 29, 14:33`} message={(<>
              You approved the deal <HighlightText text={`tb242334b...`} /> proposed by <HighlightText text={`John Doe`}
                                                                                                       style={`black`} />
            </>)} />

            <ActivityDetail
              seeDetailsButtonVisibility={{
                visible: true,
                label: `See Details`,
                href: `/`
              }}
              circleColor={`emptyBorderBlue`}
              trashCanVisibility={true}
              iconType={AccountActivityIconsTypeEnum.houseBluePlus}
              date={`August 29, 14:33`} message={(<>
              <HighlightText text={`John Doe `} style={`black`} /> wants to buy your property <HighlightText
              text={`Lorem ipsum dolor sit...`} /> !
            </>)} />

            <ActivityDetail
              seeDetailsButtonVisibility={{
                visible: true,
                label: `See Details`,
                href: `/`
              }}
              circleColor={`emptyBorderBlue`}
              trashCanVisibility={true}
              iconType={AccountActivityIconsTypeEnum.houseBluePlus}
              date={`August 29, 14:33`} message={(<>
              <HighlightText text={`Lily Twin`} style={`black`} /> wants to buy your property <HighlightText
              text={`Lorem ipsum dolor sit...`} /> !
            </>)} />

            <ActivityDetail
              seeDetailsButtonVisibility={{
                visible: true,
                label: `See Details`,
                href: `/`
              }}
              circleColor={`emptyBorderRed`}
              trashCanVisibility={true}
              iconType={AccountActivityIconsTypeEnum.houseRedMinus}
              date={`August 29, 14:33`} message={(<>
              You rejected the deal <HighlightText text={`tb242334b...`} /> proposed by <HighlightText
              text={`Billy Marks`} />
            </>)} />
          </>
        )} />
      </div>
    </>
  );
}
