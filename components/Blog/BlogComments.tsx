'use client';

/*type BlogCommentsType = {
  // children: ReactNode;
}*/

// ignore the entire file for ts errors
import React, { useState } from 'react';
import { ActiveFilterTypeQuestions } from '@/utils/types/activeFilterTypeQuestions';
import { CommentType } from '@/components/PropertyDescription/Layout/PropertyComments';
import BadgeRounded from '@/components/UI/Badge/BadgeRounded';
import Comment from '@/components/Layout/Comment/Comment';
import Button from '@/components/UI/Button/Button';

export default function BlogComments(/*{  }: BlogCommentsType*/) {

  const [activeFilter, setActiveFilter] = useState<ActiveFilterTypeQuestions>(`Date`);

  const handleSetActiveFilter = (switchTo: CommentType | ActiveFilterTypeQuestions) => {
    if (switchTo === 'Date' || switchTo === 'Most Liked' || switchTo === 'Answered'
      || switchTo === 'From Higher Rating' || switchTo === 'From Lower Rating') {
      setActiveFilter(switchTo);
    }
  };

  return (
    <>
      <div>
        <div className={`flex bp-620:gap-14 flex-col bp-620:flex-row mb-7 bp-620:mb-0`}>
          <h2 className={`text-4xl bg-clip-text text-transparent bg-linear-main-red font-bold flex w-fit
                  mb-8`}>Comments</h2>
          <div className={`flex gap-3 flex-wrap`}>
            <div>
              <BadgeRounded setActiveFilter={() => {
              }} label={`Reviews`} color={`blue`} type={`lg`} state={`Reviews`} />
            </div>
          </div>
        </div>

        <div className={`flex items-center gap-2.5 mb-12 overflow-x-auto scrollbar-thin`}>
          <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Date`} state={activeFilter} />
          <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Most Liked`} state={activeFilter} />
          <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`From Higher Rating`} state={activeFilter} />
          <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`From Lower Rating`} state={activeFilter} />
        </div>

        <div className={`flex flex-col gap-12`}>
          <Comment newReplies={[]} propertyId={'1'} commentMode={'BlogReview'} id={'1'} rating={4.3}
                   initials={`John Doe`} abbrInitials={`J.D`}
                   text={` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`}
                   likes={['']} createdAt={`August 2024, May 02 at 14:55`} responses={[{
            // @ts-ignore
            userType: `landlord`,
            abbrInitials: `N.B`,
            initials: `Nikolas Baker`,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`,
            createdAt: `August 2024, May 02 at 14:55`
          }, {
            // @ts-ignore
            userType: `user`,
            abbrInitials: `J.D`,
            initials: `John Doe`,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`,
            createdAt: `August 2024, May 02 at 14:55`
          }
            // @ts-ignore
          ]} userType={`user`}
          />

          <Comment newReplies={[]} propertyId={'1'} commentMode={'BlogReview'} id={'2'} rating={4.5}
                   initials={`John Doe`} abbrInitials={`J.D`}
                   text={` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`}
                   likes={['']} createdAt={`August 2024, May 02 at 14:55`} responses={[{
            // @ts-ignore
            userType: `landlord`,
            abbrInitials: `N.B`,
            initials: `Nikolas Baker`,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`,
            createdAt: `August 2024, May 02 at 14:55`
          }, {
            // @ts-ignore
            userType: `user`,
            abbrInitials: `J.D`,
            initials: `John Doe`,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`,
            createdAt: `August 2024, May 02 at 14:55`
          }
            // @ts-ignore
          ]} userType={`user`} />

          <Comment newReplies={[]} propertyId={'1'} commentMode={'BlogReview'} id={'3'} rating={4.1}
                   initials={`John Doe`} abbrInitials={`J.D`}
                   text={` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`}
                   likes={['1', '2']} createdAt={`August 2024, May 02 at 14:55`} responses={[{
            // @ts-ignore
            userType: `landlord`,
            abbrInitials: `N.B`,
            initials: `Nikolas Baker`,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`,
            createdAt: `August 2024, May 02 at 14:55`
          }, {
            // @ts-ignore
            userType: `user`,
            abbrInitials: `J.D`,
            initials: `John Doe`,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis harum hic id nemo officia quae quas voluptatibus? Accusamus aperiam architecto aut consectetur explicabo impedit in nemo nihil quas ut.`,
            createdAt: `August 2024, May 02 at 14:55`
          }
            // @ts-ignore
          ]} userType={`user`} />
        </div>

        <div className={`w-fit mt-14`}>
          <Button label={`See more`} mode={`md`} linearGradient />
        </div>
      </div>
    </>
  );
}
