// 'use client';

import { AuthPageType } from '@/app/auth/page';
import BulkyLink from '@/components/UI/Link/BulkyLink';

type TryToSigninType = {
  setActivePage: (page: AuthPageType) => void;
  // children: ReactNode;
}

export default function TryToSignin({ setActivePage }: TryToSigninType) {
  return (
    <>
      <div>
        <h2 className={`text-2xl font-bold text-zinc-800 mb-3`}>Password Reset Successfully!</h2>
        <p className={`leading-relaxed text-zinc-900 mb-12`}>Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Amet eius labore laudantium recusandae suscipit.</p>

        <div onClick={() => setActivePage(`login`)}>
          <BulkyLink
            linkStyle={`emptyBlack`}
            href={`/auth?page=login`}
            label={`Try to Log In`}
          />
        </div>
      </div>
    </>
  );
}