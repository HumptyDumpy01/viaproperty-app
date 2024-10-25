'use client';

import BadgeRounded from '@/components/UI/Badge/BadgeRounded';
import { ActiveFilterTypeQuestions } from '@/utils/types/activeFilterTypeQuestions';
import { useState } from 'react';
import Button from '@/components/UI/Button/Button';
import Comment from '@/components/Layout/Comment/Comment';

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
    if (switchTo === 'Date' || switchTo === 'Most Liked' || switchTo === 'Answered'
      || switchTo === 'Positive' || switchTo === 'Negative') {
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
          {activeComments === `Questions` && (
            <>
              <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Answered`} state={activeFilter} />
            </>
          )}
          {activeComments === `Reviews` && (
            <>
              <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Positive`} state={activeFilter} />
              <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Negative`} state={activeFilter} />
            </>
          )}
        </div>

        {activeComments === `Questions` && (
          <>
            <div className={`flex flex-col gap-12`}>
              <Comment initials={`John Doe`} abbrInitials={`J.D`}
                       text={` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`}
                       likes={13} createdAt={`August 2024, May 02 at 14:55`} responses={[{
                userType: `landlord`,
                abbrInitials: `N.B`,
                initials: `Nikolas Baker`,
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`,
                createdAt: `August 2024, May 02 at 14:55`
              }, {
                userType: `user`,
                abbrInitials: `J.D`,
                initials: `John Doe`,
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`,
                createdAt: `August 2024, May 02 at 14:55`
              }
              ]} userType={`user`}
              />

              <Comment initials={`John Doe`} abbrInitials={`J.D`}
                       text={` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`}
                       likes={13} createdAt={`August 2024, May 02 at 14:55`} responses={[{
                userType: `landlord`,
                abbrInitials: `N.B`,
                initials: `Nikolas Baker`,
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`,
                createdAt: `August 2024, May 02 at 14:55`
              }, {
                userType: `user`,
                abbrInitials: `J.D`,
                initials: `John Doe`,
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`,
                createdAt: `August 2024, May 02 at 14:55`
              }
              ]} userType={`user`} />

              <Comment initials={`John Doe`} abbrInitials={`J.D`}
                       text={` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`}
                       likes={13} createdAt={`August 2024, May 02 at 14:55`} responses={[{
                userType: `landlord`,
                abbrInitials: `N.B`,
                initials: `Nikolas Baker`,
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`,
                createdAt: `August 2024, May 02 at 14:55`
              }, {
                userType: `user`,
                abbrInitials: `J.D`,
                initials: `John Doe`,
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`,
                createdAt: `August 2024, May 02 at 14:55`
              }
              ]} userType={`user`} />
            </div>

            <div className={`w-fit mt-14`}>
              <Button label={`See more`} mode={`md`} linearGradient />
            </div>
          </>
        )}

      </div>
    </>
  );
}