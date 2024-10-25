'use client';

/*type PropertyCommentsType = {
  // children: ReactNode;
}*/

import BadgeRounded from '@/components/UI/Badge/BadgeRounded';
import { useState } from 'react';
import { ActiveFilterTypeQuestions } from '@/utils/types/activeFilterTypeQuestions';
import Comment from '@/components/Layout/Comment/Comment';


export default function PropertyComments(/*{  }: PropertyCommentsType*/) {
  const [activeFilter, setActiveFilter] = useState<ActiveFilterTypeQuestions>(`Date`);

  return (
    <>
      <div>
        <div className={`flex gap-14`}>
          <h2 className={`text-4xl bg-clip-text text-transparent bg-linear-main-red font-bold flex w-fit 
                  mb-8`}>Comments</h2>
          <div>
                <span
                  className={`bg-clip-text text-transparent inline-block bg-linear-main-dark-blue font-bold px-4 py-2 border-2 
                  border-zinc-100 whitespace-nowrap rounded-full`}>Questions</span>
          </div>
        </div>

        <div className={`flex items-center gap-2.5 mb-12`}>
          <BadgeRounded setActiveFilter={setActiveFilter} label={`Date`} state={activeFilter} />
          <BadgeRounded setActiveFilter={setActiveFilter} label={`Most Liked`} state={activeFilter} />
          <BadgeRounded setActiveFilter={setActiveFilter} label={`Answered`} state={activeFilter} />
        </div>

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


      </div>
    </>
  );
}
