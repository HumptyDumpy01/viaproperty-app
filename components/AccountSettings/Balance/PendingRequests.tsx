// 'use client';

/*type PendingRequestsType = {
  // children: ReactNode;
}*/

import AccountActivityDetails from '@/components/AccountSettings/Balance/AccountActivityDetails';
import HighlightText from '@/components/Typography/HighlightText';
import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';

export default function PendingRequests(/*{  }: PendingRequestsType*/) {
  return (
    <>
      <AccountActivityDetails pagination={{
        showing: 7,
        total: 20,
        pages: 3
      }} headingLabel={`Pending Requests`} paragraph={(
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore
          magna aliqua. Ut enim ad minim veniam, <HighlightText text={`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.`} />
        </>
      )} activity={(
        <>

          <ActivityDetail
            seeDetailsButtonVisibility={{
              visible: true,
              label: `See Details`,
              href: `/account-settings/request-details/1`
            }}
            circleColor={`emptyBorderBlue`}
            trashCanVisibility={true}
            iconType={AccountActivityIconsTypeEnum.houseBluePlus}
            date={`Pending from August 29, 14:33`} message={(<>
            <HighlightText text={`John Doe `} style={`black`} /> wants to buy your property <HighlightText
            text={`Lorem ipsum dolor sit...`} /> !
          </>)} />

          <ActivityDetail
            seeDetailsButtonVisibility={{
              visible: true,
              label: `See Details`,
              href: `/account-settings/request-details/1`
            }}
            circleColor={`emptyBorderBlue`}
            trashCanVisibility={true}
            iconType={AccountActivityIconsTypeEnum.houseBluePlus}
            date={`Pending from August 29, 14:33`} message={(<>
            <HighlightText text={`Lily Twin`} style={`black`} /> wants to rent your property <HighlightText
            text={`Lorem ipsum dolor sit...`} /> !
          </>)} />

          <ActivityDetail
            seeDetailsButtonVisibility={{
              visible: true,
              label: `See Details`,
              href: `/account-settings/request-details/1`
            }}
            circleColor={`emptyBorderRed`}
            trashCanVisibility={true}
            iconType={AccountActivityIconsTypeEnum.houseRedUp}
            date={`Pending from August 29, 14:33`} message={(<>
            <HighlightText text={`You`} style={`black`} /> requested to rent property <HighlightText
            text={`Lorem ipsum dolor sit...`} /> !
          </>)} />
          <ActivityDetail
            seeDetailsButtonVisibility={{
              visible: true,
              label: `See Details`,
              href: `/account-settings/request-details/1`
            }}
            circleColor={`emptyBorderBlue`}
            trashCanVisibility={true}
            iconType={AccountActivityIconsTypeEnum.houseBluePlus}
            date={`Pending from August 29, 14:33`} message={(<>
            <HighlightText text={`John Doe `} style={`black`} /> wants to buy your property <HighlightText
            text={`Lorem ipsum dolor sit...`} /> !
          </>)} />

          <ActivityDetail
            seeDetailsButtonVisibility={{
              visible: true,
              label: `See Details`,
              href: `/account-settings/request-details/1`
            }}
            circleColor={`emptyBorderBlue`}
            trashCanVisibility={true}
            iconType={AccountActivityIconsTypeEnum.houseBluePlus}
            date={`Pending from August 29, 14:33`} message={(<>
            <HighlightText text={`Lily Twin`} style={`black`} /> wants to rent your property <HighlightText
            text={`Lorem ipsum dolor sit...`} /> !
          </>)} />

        </>
      )} />
    </>
  );
}
