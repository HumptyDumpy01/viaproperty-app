'use client';

import { type ReactNode } from 'react';
import Lottie from 'lottie-react';
import AnimationNotFoundJSON from '@/animations/animation-not-found.json';
import BulkyLink from '@/components/UI/Link/BulkyLink';

type NotAuthorizedType = {
  error: 401 | 404 | 500;
  heading: string;
  text: ReactNode;
  links: {
    linkStyle: `red` | `emptyBlack`, href: string;
    label: string;
    orSeparator?: boolean;
  }[]

  // children: ReactNode;
}

export default function NotAuthorized({ error, text, heading, links }: NotAuthorizedType) {
  return (
    <>
      <div
        className={`max-w-screen-bp-1009 flex flex-col items-center bp-896:items-start bp-896:flex-row gap-7 m-auto`}>
        <div className={`flex w-96 h-56 items-center justify-center mt-7 bp-620:mt-0`}>
          <Lottie className={`w-96`} animationData={AnimationNotFoundJSON} />
        </div>
        <div className={`flex flex-col`}>
          <span
            className={`uppercase bg-clip-text text-transparent inline-block bg-linear-main-red font-bold
            px-4 py-2 border border-red-500 w-fit rounded-full mb-5`}>
            {error} {error === 401 ? `Unauthorized` : error === 404 ? `Not Found` : `Server Error`}
          </span>
          <h1
            className={`bg-clip-text mb-6 leading-normal text-transparent bg-linear-main-red font-bold text-3xl`}>{heading}</h1>
          <p className={`text-zinc-800 leading-relaxed mb-10`}>{text}</p>

          <div className={`flex gap-4 items-center flex-col bp-620:flex-row justify-center bp-896:justify-start`}>
            {links.map((link, index) => (
                <BulkyLink
                  key={index}
                  linkStyle={link.linkStyle}
                  href={link.href}
                  label={link.label}
                  orSeparator={link.orSeparator}
                />
              )
            )}
          </div>

        </div>
      </div>
    </>
  );
}
