'use client';

import User from '@/components/UI/User/User';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import Button from '@/components/UI/Button/Button';
import { useState } from 'react';

type CommentType = {
  userType: `user` | `landlord`;
  abbrInitials: string;
  initials: string;
  text: string;
  likes: number;
  createdAt: string;
  responses: {
    userType: `user` | `landlord`;
    abbrInitials: string;
    initials: string;
    text: string;
    createdAt: string;
  }[]

  // children: ReactNode;
}

export default function Comment({ userType, createdAt, likes, responses, text, abbrInitials, initials }: CommentType) {

  const [showReplies, setShowReplies] = useState<boolean>(false);

  return (
    <>
      <div className={`flex flex-col gap-5`}>

        <User type={userType} abbrInitials={abbrInitials} initials={initials}
              createdAt={createdAt} />
        <div>
          <p className={`leading-relaxed text-zinc-800`}>{text}</p>
        </div>
        <div className={`flex items-center gap-1`}>
          <ViapropertyIcon icon={`heart`} />
          <span className={`bg-clip-text text-transparent bg-linear-main-red font-bold`}>{likes}</span>
        </div>
        <div className={`flex-col gap-7 ${showReplies ? `flex` : `hidden`}`}>
          {responses.map(function(response) {
            return (
              <>
                <div className={`pl-12 flex flex-col gap-4 border-l-2 border-r-zinc-200 `}>
                  <User type={response.userType} abbrInitials={response.abbrInitials} initials={response.initials}
                        createdAt={response.createdAt} />
                  <p className={`leading-relaxed text-zinc-800`}>{response.text}</p>
                </div>
              </>
            );
          })}
        </div>

        {responses.length > 0 && (
          <div onClick={!showReplies ? () => setShowReplies(true) : () => setShowReplies(false)}>
            <Button mode={`sm`} label={!showReplies ? `See answers (${responses.length})` : `Hide`}
                    btnVariant={`white`} />
          </div>
        )}
      </div>
    </>
  );
}
