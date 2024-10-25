'use client';

import BadgeRounded from '@/components/UI/Badge/BadgeRounded';
import { ActiveFilterTypeQuestions } from '@/utils/types/activeFilterTypeQuestions';
import { useState } from 'react';

export type CommentType = `Reviews` | `Questions`;

export default function PropertyComments(/*{  }: PropertyCommentsType*/) {
  const [activeFilter, setActiveFilter] = useState<ActiveFilterTypeQuestions>(`Date`);
  const [activeComments, setActiveComments] = useState<CommentType>(`Reviews`);

  const handleSetActiveComments = (switchTo: CommentType | ActiveFilterTypeQuestions) => {
    if (switchTo === 'Reviews' || switchTo === 'Questions') {
      setActiveComments(switchTo);
    }
  };

  const handleSetActiveFilter = (switchTo: CommentType | ActiveFilterTypeQuestions) => {
    if (switchTo === 'Date' || switchTo === 'Most Liked' || switchTo === 'Answered') {
      setActiveFilter(switchTo);
    }
  };

  return (
    <>
      <div>
        <div className={`flex gap-14`}>
          <h2 className={`text-4xl bg-clip-text text-transparent bg-linear-main-red font-bold flex w-fit
                  mb-8`}>Comments</h2>
          <div className={`flex gap-3`}>

            <BadgeRounded setActiveFilter={handleSetActiveComments} label={`Reviews`} color={`blue`} type={`lg`}
                          state={activeComments} />

            <BadgeRounded setActiveFilter={handleSetActiveComments} label={`Questions`} color={`blue`} type={`lg`}
                          state={activeComments} />

          </div>
        </div>

        <div className={`flex items-center gap-2.5 mb-12`}>
          <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Date`} state={activeFilter} />
          <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Most Liked`} state={activeFilter} />
          <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Answered`} state={activeFilter} />
        </div>
      </div>
    </>
  );
}