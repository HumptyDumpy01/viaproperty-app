// BadgeRounded.tsx
import { ActiveFilterTypeQuestions } from '@/utils/types/activeFilterTypeQuestions';
import { CommentType } from '@/components/PropertyDescription/Layout/PropertyComments';
import { LeaveCommentBadgeType } from '@/components/PropertyDescription/Layout/LeaveCommentContainer';

type BadgeRoundedType = {
  state?: ActiveFilterTypeQuestions | CommentType | LeaveCommentBadgeType;
  label: ActiveFilterTypeQuestions | CommentType | LeaveCommentBadgeType;
  setActiveFilter: (switchTo: ActiveFilterTypeQuestions | CommentType) => void;
  type?: `md` | `lg`;
  color?: `red` | `blue`;
}

export default function BadgeRounded({ state, label, setActiveFilter, type = `md`, color = `red` }: BadgeRoundedType) {
  const activeStateStyles = `text-red-500 border-red-100 font-bold`;
  const inactiveStateStyles = `text-zinc-400 border-zinc-100 font-medium`;

  const blueActiveStyles = `bg-clip-text text-transparent bg-linear-main-dark-blue font-bold`;
  const blueInactiveStyles = `font-medium text-zinc-400`;

  return (
    <>
      {color === `red` && (
        <div className={`cursor-pointer`}>
          {/*@ts-ignore*/}
          <span onClick={() => setActiveFilter(label)}
                className={`${state === label ? activeStateStyles : inactiveStateStyles} w-fit text-[14px] inline-block px-4 py-2 border-2 
            whitespace-nowrap rounded-full`}>{label}</span>
        </div>
      )}

      {color === `blue` && type === `lg` && (
        /*@ts-ignore*/
        <span onClick={() => setActiveFilter(label)}
              className={`${state === label ? blueActiveStyles : blueInactiveStyles} h-fit cursor-pointer inline-block px-4 py-2 border-2 
                  border-zinc-100 whitespace-nowrap rounded-full`}>{label}</span>
      )}

    </>
  );
}