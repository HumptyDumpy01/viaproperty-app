'use client';

/*type LeaveCommentContainerType = {
  // children: ReactNode;
}*/

import LeaveComment from '@/components/PropertyDescription/Layout/LeaveComment';
import BadgeRounded from '@/components/UI/Badge/BadgeRounded';
import React, { useEffect, useState } from 'react';
import { CommentType } from '@/components/PropertyDescription/Layout/PropertyComments';
import { ActiveFilterTypeQuestions } from '@/utils/types/activeFilterTypeQuestions';
import { PropertyForType } from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';
import CustomApolloProvider from '@/components/Layout/Provider/ApolloProvider';
import { useUserDataOnClient } from '@/hooks/queries/useUserDataOnClient';

export type LeaveCommentBadgeType = CommentType | ActiveFilterTypeQuestions | `Leave Review` | `Ask Question`;

export type LeaveCommentContainerType = {
  propertyFor: PropertyForType;
  propertyId: string;
  landlordId: string;
}

export default function LeaveCommentContainer({ propertyFor, propertyId, landlordId }: LeaveCommentContainerType) {
  const { userData, loading: loadingUser } = useUserDataOnClient();
  const [showComponent, setShowComponent] = useState<boolean | null>(null);

  useEffect(() => {
    if (userData) {
      if (userData.id !== landlordId) {
        setShowComponent(() => true);
      } else {
        setShowComponent(() => false);
      }
    }
  }, [userData, loadingUser, landlordId]);

  const [activeLeaveCommentBadge, setActiveLeaveCommentBadge] = useState<LeaveCommentBadgeType>(
    propertyFor === `rent` ? `Leave Review` : `Ask Question`
  );
  const [reviewsAvailable, setReviewsAvailable] = useState<boolean>(true);

  const handleSetLeaveCommentBadge = (switchTo: CommentType | ActiveFilterTypeQuestions | LeaveCommentBadgeType) => {

    if (switchTo === 'Leave Review') {
      setReviewsAvailable(true);
    }
    if (switchTo === 'Ask Question') {
      setReviewsAvailable(false);
    }

    if (switchTo === 'Leave Review' || switchTo === 'Ask Question') {
      setActiveLeaveCommentBadge(switchTo);
    }
  };

  if (!showComponent) {
    return;
  }

  return (
    <>
      <CustomApolloProvider>
        <LeaveComment propertyId={propertyId} activeLeaveCommentBadge={activeLeaveCommentBadge}
                      propertyFor={propertyFor}
                      available={{ reviews: reviewsAvailable, questions: true }} badges={
          (
            <>
              {propertyFor === `rent` && (
                <BadgeRounded setActiveFilter={handleSetLeaveCommentBadge} label={`Leave Review`} color={`blue`}
                              type={`lg`}
                              state={activeLeaveCommentBadge} />
              )}

              <BadgeRounded setActiveFilter={handleSetLeaveCommentBadge} label={`Ask Question`} color={`blue`}
                            type={`lg`}
                            state={activeLeaveCommentBadge} />
            </>
          )
        } />
      </CustomApolloProvider>
    </>
  );
}
