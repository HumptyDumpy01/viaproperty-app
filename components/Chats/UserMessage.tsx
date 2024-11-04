// 'use client';

import { Tooltip } from '@mui/material';

type UserMessageType = {
  userLogo: `empty` | `filled`;
  userName: string;
  message: string;
  date: string;
  messageStatus?: `unread` | `delivering` | `read` | `failed`;
  // children: ReactNode;
}

export default function UserMessage({ userLogo, userName, message, date, messageStatus = `unread` }: UserMessageType) {
  const userLogoStyle = userLogo === `empty` ? `uppercase w-fit h-fit text-xl min-w-[72px] min-h-[72px] 
               bg-clip-text text-transparent bg-linear-main-dark-blue
                text-white flex justify-center items-center rounded-full font-medium 
                border border-blue-950` : `uppercase w-fit h-fit text-xl min-w-[72px] min-h-[72px] bg-linear-main-dark-blue
                text-white flex justify-center items-center rounded-full font-medium`;

  let messageStatusStyle = ``;

  switch (messageStatus) {
    case `unread`:
      messageStatusStyle = `bg-zinc-500`;
      break;
    case `delivering`:
      messageStatusStyle = `bg-yellow-500`;
      break;
    case `read`:
      messageStatusStyle = `bg-green-500`;
      break;
    case `failed`:
      messageStatusStyle = `bg-red-500`; break;
  }

  return (
    <>
      <div className={`flex gap-5`}>
        <div className={userLogoStyle}>{userName}</div>
        <div className={`flex flex-col justify-center gap-2`}>
          <p className={`text-zinc-800`}>{message}</p>
          <Tooltip title={`Status: ${messageStatus}`}>
            <div className={`flex items-center gap-2.5 w-fit`}>
              <span className={`text-zinc-500 text-sm`}>{date}</span>
              <span className={`h-2 w-2 rounded-full ${messageStatusStyle}`}></span>
            </div>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
