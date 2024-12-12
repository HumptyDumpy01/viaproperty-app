'use client';

/*type LeaveCommentContainerType = {
  // children: ReactNode;
}*/

import LeaveComment from '@/components/PropertyDescription/Layout/LeaveComment';
import BadgeRounded from '@/components/UI/Badge/BadgeRounded';
import React, { useState } from 'react';
import { CommentType } from '@/components/PropertyDescription/Layout/PropertyComments';
import { ActiveFilterTypeQuestions } from '@/utils/types/activeFilterTypeQuestions';
import { PropertyForType } from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';

export type LeaveCommentBadgeType = CommentType | ActiveFilterTypeQuestions | `Leave Review` | `Ask Question`;

export type LeaveCommentContainerType = {
  propertyFor: PropertyForType;
}

export default function LeaveCommentContainer({ propertyFor }: LeaveCommentContainerType) {

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
  return (
    <>
      <div>
        <LeaveComment activeLeaveCommentBadge={activeLeaveCommentBadge} propertyFor={propertyFor}
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
      </div>
    </>
  );
}
