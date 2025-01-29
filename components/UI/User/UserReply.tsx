import User from '@/components/UI/User/User';
import { abbreviateInitials } from '@/utils/functions/abbreviateInitials';
import { formatDate } from '@/utils/functions/formatDate';
import { UserType } from '@/components/PropertyDescription/Layout/PropertyComments';

type UserReplyType = {
  userType: UserType;
  initials: string;
  createdAt: string;
  comment: string;
}

export default function UserReply({ userType, initials, createdAt, comment }: UserReplyType) {
  return (
    <>
      <div className={`pl-12 flex flex-col gap-4 border-l-2 border-r-zinc-200 `}>
        <User type={userType} abbrInitials={abbreviateInitials(initials)}
              initials={initials}
              createdAt={formatDate(createdAt)} />
        <p className={`leading-relaxed text-zinc-800`}>{comment}</p>
      </div>
    </>
  );
}
