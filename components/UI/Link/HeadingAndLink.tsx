// 'use client';

type HeadingAndLinkType = {
  heading: string;
  headingSpan: string;
  linkLabel: string;
  linkHref: string;
  // children: ReactNode;
}

import Heading from '@/components/Typography/Heading';
import Link from 'next/link';
import React from 'react';

export default function HeadingAndLink({ headingSpan, heading, linkLabel, linkHref }: HeadingAndLinkType) {
  return (
    <>
      <div className={`flex items-center gap-9 mb-11`}>
        <Heading span={headingSpan} heading={heading} />
        <div className={`flex gap-2 text-[15px] items-center cursor-pointer`}>
          <Link className={`uppercase font-semibold`} href={linkHref}>{linkLabel}</Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path
              d="M6.47954 1.12341C6.62019 0.9828 6.81094 0.903809 7.00982 0.903809C7.20871 0.903809 7.39945 0.9828 7.54011 1.12341L10.9153 4.49864C11.0559 4.63929 11.1349 4.83004 11.1349 5.02892C11.1349 5.22781 11.0559 5.41855 10.9153 5.55921L7.54011 8.93443C7.39865 9.07106 7.20918 9.14666 7.01252 9.14495C6.81586 9.14324 6.62774 9.06436 6.48867 8.9253C6.34961 8.78623 6.27073 8.59811 6.26902 8.40145C6.26731 8.20479 6.34291 8.01532 6.47954 7.87386L8.50992 5.77897H1.38445C1.18552 5.77897 0.994746 5.69995 0.854084 5.55929C0.713422 5.41863 0.634399 5.22785 0.634399 5.02892C0.634399 4.83 0.713422 4.63922 0.854084 4.49856C0.994746 4.3579 1.18552 4.27887 1.38445 4.27887H8.50992L6.47954 2.18398C6.33893 2.04333 6.25993 1.85258 6.25993 1.6537C6.25993 1.45481 6.33893 1.26407 6.47954 1.12341Z"
              fill="#00202A" />
          </svg>
        </div>
      </div>
    </>
  );
}
