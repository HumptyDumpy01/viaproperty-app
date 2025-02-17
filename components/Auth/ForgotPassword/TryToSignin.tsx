// 'use client';

import BulkyLink from '@/components/UI/Link/BulkyLink';

// type TryToSigninType = {}

export default function TryToSignin(/*{ setActivePage }: TryToSigninType*/) {
  return (
    <>
      <div>
        <h2 className={`text-2xl font-bold text-zinc-800 mb-3`}>Password Reset Successfully!</h2>
        <p className={`leading-relaxed text-zinc-900 mb-12`}>Success, it seems! Try to log in again with your new
          password.</p>

        <div>
          <BulkyLink
            linkStyle={`emptyBlack`}
            href={`/auth/login`}
            label={`Try to Log In`}
          />
        </div>
      </div>
    </>
  );
}