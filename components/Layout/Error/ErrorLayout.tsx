// 'use client';

import { type ReactNode } from 'react';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import Paragraph from '@/components/Typography/Paragraph';
import BigInput from '@/components/UI/Input/BigInput';
import Button from '@/components/UI/Button/Button';
import Image from 'next/image';
import NotFoundImg from '@/assets/error/Streamline-Bangalore.png';
import WeGotProblemImg from '@/assets/error/Product-We-got-a-problem-01.png';
import CosmosHumanImg from '@/assets/error/Technology-Virtual-reality-01.png';
import LinkWithArrow from '@/components/UI/Link/LinkWithArrow';
import HighlightText from '@/components/Typography/HighlightText';

type ErrorLayoutType = {
  errorCode: 404 | 500;
  heading: string;
  text: ReactNode;
  links: { href: string, label: string, style: `red` | `blue` }[];
  image: `internalError` | `notFound`;
  // children: ReactNode;
}

export default function ErrorLayout({ errorCode, heading, text, links, image }: ErrorLayoutType) {
  const errorCodeApplied = errorCode === 404 ? `404 NOT FOUND` : `500 SERVER ERROR`;
  const chosenImage = image === `internalError` ? WeGotProblemImg : NotFoundImg;
  return (
    <>
      <section className={`mt-8`}>
        <div className={`flex flex-col bp-896:flex-row gap-6 bp-896:gap-0`}>
          <div>
            <div className={`mb-3`}>
              <ButtonActive color={`red`} size={`small`}
                            active={true}
                            label={errorCodeApplied} />
            </div>
            <div className={`mb-7`}>
              <ViapropertyHeading customClasses={`max-w-3xl`} headingSize={`lg`}
                                  label={heading} />
            </div>
            <div className={`mb-12`}>
              <Paragraph customClasses={`max-w-3xl`} text={(
                <>
                  {text}
                </>
              )} />
            </div>

            <div>
              <form className={`flex bp-620:items-center gap-5 flex-col bp-620:flex-row`}>
                <BigInput
                  placeholder={`Tell us how it happened`}
                  name={`whatHappened`}
                  type={`text`}
                />
                <div>
                  <Button
                    type={`submit`}
                    label={`Send`}
                    mode={`lg`}
                    linearGradient
                  />
                </div>

              </form>
              <div className={`mt-4`}>
                <Paragraph text={(
                  <HighlightText text={`Your 
                  feedback is important to us and will help us improve our platform.
                  `} />
                )}
                />
              </div>
            </div>
          </div>
          <div>
            <Image src={chosenImage} alt={
              image === `internalError` ? `We've got a problem Image` : `Not Found Image`
            } />
          </div>
        </div>
        <div
          className={`flex items-center gap-5 mb-8 ${image === `internalError` ? `mt-6` : `mt-20`} flex-col bp-620:flex-row`}>
          <h2 className={`bg-clip-text text-transparent bg-linear-main-dark-blue font-bold text-4xl w-fit
          leading-normal`}>Or explore
            more <br /> of our
            website</h2>
          <Image className={`w-32`} src={CosmosHumanImg} alt={`Cosmos Human`} />
        </div>
        <div className={`flex  items-center gap-3.5 flex-wrap max-w-screen-bp-620`}>
          {links.map((link, index) => (
            <LinkWithArrow key={index} href={link.href} label={link.label} style={link.style} />
          ))}
        </div>
      </section>
    </>
  );
}
