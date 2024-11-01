// 'use client';

type UserDataType = {
  abbrInitials: string;
  online: boolean;
  initials: string;
  paragraph: string;
  // children: ReactNode;
}

export default function UserData({ abbrInitials, initials, paragraph, online }: UserDataType) {
  return (
    <>
      <div className={`flex gap-5`}>
        <div
          className={`flex items-center border border-red-500 w-[72px] h-[72px] justify-center rounded-full`}>
                <span
                  className={`inline-block text-xl bg-clip-text text-transparent bg-linear-main-red font-bold`}>{abbrInitials}</span>
        </div>
        <div className={`flex flex-col`}>
          <div className={`flex items-center gap-1`}>
            <div className={`${online ? `bg-green-400` : `bg-gray-500`} w-1.5 h-1.5 rounded-full`}></div>
            <span
              className={`text-[13px] ${online ? `text-green-500` : `text-zinc-500`} font-semibold`}>{online ? `Online` : `Offline`}</span>
          </div>
          <h3 className={`font-medium text-zinc-800`}>{initials}</h3>
          <p className={`text-[13px] text-zinc-400`}>{paragraph}</p>
        </div>
      </div>
    </>
  );
}
