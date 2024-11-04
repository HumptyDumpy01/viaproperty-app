// 'use client';

/*type CompletedDealsType = {
  // children: ReactNode;
}*/

import AccountActivityDetails from '@/components/AccountSettings/Balance/AccountActivityDetails';
import HighlightText from '@/components/Typography/HighlightText';
import ActivityDetail from '@/components/Layout/Activity/ActivityDetail';
import { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';

export default function CompletedDeals(/*{  }: CompletedDealsType*/) {
  return (
    <>
      <AccountActivityDetails pagination={{
        visible: true,
        showing: 7,
        total: 20,
        pages: 3
      }} headingLabel={`Completed Deals`} paragraph={(
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
              href: `/`
            }}
            circleColor={`emptyBorderRed`}
            trashCanVisibility={true}
            iconType={AccountActivityIconsTypeEnum.confirmed}
            date={`Completed at August 29, 14:33`} message={(<>
            The deal <HighlightText text={`tb242334b..`} /> from <HighlightText text={`John Doe`} style={`black`} /> is
            now complete.
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
            date={`Completed at August 29, 14:33`} message={(<>
            The deal <HighlightText text={`tb242334b..`} /> from <HighlightText text={`John Doe`} style={`black`} /> is
            now complete.
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
            date={`Completed at August 29, 14:33`} message={(<>
            The deal <HighlightText text={`tb242334b..`} /> from <HighlightText text={`John Doe`} style={`black`} /> is
            now complete.
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
            date={`Completed at August 29, 14:33`} message={(<>
            The deal <HighlightText text={`tb242334b..`} /> from <HighlightText text={`John Doe`} style={`black`} /> is
            now complete.
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
            date={`Completed at August 29, 14:33`} message={(<>
            The deal <HighlightText text={`tb242334b..`} /> from <HighlightText text={`John Doe`} style={`black`} /> is
            now complete.
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
            date={`Completed at August 29, 14:33`} message={(<>
            The deal <HighlightText text={`tb242334b..`} /> from <HighlightText text={`John Doe`} style={`black`} /> is
            now complete.
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
            date={`Completed at August 29, 14:33`} message={(<>
            The deal <HighlightText text={`tb242334b..`} /> from <HighlightText text={`John Doe`} style={`black`} /> is
            now complete.
          </>)} />
        </>
      )} />
    </>
  );
}
