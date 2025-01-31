// 'use client';

/*type RejectedRequestsType = {
  // children: ReactNode;
}*/

import AccountActivityDetails from '@/components/AccountSettings/Balance/AccountActivityDetails';
import HighlightText from '@/components/Typography/HighlightText';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';
import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';

export default function RejectedRequests(/*{  }: RejectedRequestsType*/) {
  return (
    <>
      <AccountActivityDetails pagination={{
        showing: 7,
        total: 20,
        pages: 3
      }} headingLabel={`Rejected Requests`} paragraph={(
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore
          magna aliqua. Ut enim ad minim veniam, <HighlightText text={`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.`} />
        </>
      )} activity={(
        <>

          <ActivityDetail
            requestType={`rejected`}
            seeDetailsButtonVisibility={{
              visible: true,
              label: `See Details`,
              href: `/account-settings/request-details/1`
            }}
            circleColor={`emptyBorderGrey`}
            trashCanVisibility={true}
            iconType={AccountActivityIconsTypeEnum.houseGreyMinus}
            date={`Rejected at August 29, 14:33`} message={(<>
            <HighlightText text={`John Doe `} style={`grey`} /> wants to buy your property <HighlightText
            style={`grey`}
            text={`Lorem ipsum dolor sit...`} /> !
          </>)} />

          <ActivityDetail
            requestType={`rejected`}
            seeDetailsButtonVisibility={{
              visible: true,
              label: `See Details`,
              href: `/account-settings/request-details/1`
            }}
            circleColor={`emptyBorderGrey`}
            trashCanVisibility={true}
            iconType={AccountActivityIconsTypeEnum.houseGreyMinus}
            date={`Rejected at August 29, 14:33`} message={(<>
            <HighlightText text={`John Doe `} style={`grey`} /> wants to buy your property <HighlightText
            style={`grey`}
            text={`Lorem ipsum dolor sit...`} /> !
          </>)} />

          <ActivityDetail
            requestType={`rejected`}
            seeDetailsButtonVisibility={{
              visible: true,
              label: `See Details`,
              href: `/account-settings/request-details/1`
            }}
            circleColor={`emptyBorderGrey`}
            trashCanVisibility={true}
            iconType={AccountActivityIconsTypeEnum.houseGreyMinus}
            date={`Rejected at August 29, 14:33`} message={(<>
            <HighlightText text={`John Doe `} style={`grey`} /> wants to buy your property <HighlightText
            style={`grey`}
            text={`Lorem ipsum dolor sit...`} /> !
          </>)} />
        </>
      )} />
    </>
  );
}
