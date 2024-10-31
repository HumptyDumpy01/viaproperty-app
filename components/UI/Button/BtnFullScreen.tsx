// 'use client';

import { ComponentPropsWithoutRef } from 'react';
import MetaIcon from '@/components/UI/Icon/MetaIcon';

type BtnFullScreenType = {
  size: `sm` | `md` | `lg`;
  icon?: `google` | undefined;
  label: string;
  // children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export default function BtnFullScreen({ size, icon = undefined, label, ...props }: BtnFullScreenType) {
  const largeBtnStyles = `py-6 rounded-full text-2xl`;
  const mediumBtnStyles = `py-5 rounded-full`;

  const appliedStyles = size === `lg` ? largeBtnStyles : size === `md` ? mediumBtnStyles : ``;

  return (
    <>
    {!icon && (
      <>
        <button {...props} className={`w-full bg-linear-main-dark-blue text-white font-bold ${appliedStyles}`}>
          {label}
        </button>
      </>
    )}

      {icon === `google` && size === `md` && (
        <>
          <button {...props}
                  className={`flex items-center justify-center gap-6 bg-linear-main-dark-blue w-full text-white py-3 rounded-full`}>
            <div>
              <MetaIcon type={`google`} />
            </div>
            <span className={`text-xl font-bold text-white`}>Sign in with Google</span>
          </button>
        </>
      )}
    </>
  );
}