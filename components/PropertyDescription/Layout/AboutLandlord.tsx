// 'use client';

type AboutLandlordType = {
  abbrInitials: string;
  online: boolean;
  initials: string;
  text: string;
  // children: ReactNode;
}

import Button from '@/components/UI/Button/Button';

export default function AboutLandlord({ abbrInitials, online, initials, text }: AboutLandlordType) {
  return (
    <>
      <div className={`flex flex-col gap-6 mb-16`}>
        <div className={`flex gap-5`}>
          <div
            className={`flex items-center border-2 border-red-500 w-[72px] h-[72px] justify-center rounded-full`}>
                <span
                  className={`inline-block text-xl bg-clip-text text-transparent bg-linear-main-red font-bold`}>{abbrInitials}</span>
          </div>
          <div className={`flex flex-col`}>
            <div className={`flex items-center gap-1`}>
              <div className={`${online ? `bg-green-400` : `bg-gray-500`} w-1.5 h-1.5 rounded-full`}></div>
              <span className={`text-[13px] text-green-500 font-semibold`}>{online ? `Online` : `Offline`}</span>
            </div>
            <h3 className={`font-medium text-zinc-800`}>{initials}</h3>
            <p className={`text-sm text-zinc-400`}>Landlord</p>
          </div>
        </div>

        <p className={`leading-relaxed text-sm mb-7`}>{text}</p>

        <div className={`flex gap-6`}>
          <Button mode={`md`} label={`Chat`} />
          <Button mode={`md`} label={`Call`} btnVariant={`white`} />
        </div>
      </div>
    </>
  );
}
