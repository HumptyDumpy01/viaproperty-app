// 'use client';

/*type ChatHistoryPageType = {
  // children: ReactNode;
}*/

import MainContainer from '@/components/Layout/Container/MainContainer';
import Link from 'next/link';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import UserMessage from '@/components/Chats/UserMessage';
import TelegramIcon from '@/components/UI/Icon/TelegramIcon';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';

export default function ChatHistoryPage(/*{  }: ChatHistoryPageType*/) {
  return (
    <MainContainer>

      <div className={`mt-11 `}>
        <div className={`max-w-screen-bp-896`}>
          <h1 className={`bg-clip-text text-transparent bg-linear-main-red font-bold
        text-5xl w-fit mb-8 leading-tight`}>Account Activities</h1>
          <p className={`leading-relaxed text-zinc-900 text-[15.5px] mb-9`}>Lorem ipsum dolor sit amet, consectetur
            adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. </p>
          <div>
            <Link className={`flex items-center gap-2 bg-clip-text text-transparent bg-linear-main-red font-bold
            border  border-red-500 rounded-full px-4 py-2 text-[15.5px] w-fit mb-5`}
                  href={`/account-settings?page=chats`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                <path
                  d="M4.87683 9.16541C4.72949 9.31555 4.52967 9.3999 4.32133 9.3999C4.11298 9.3999 3.91316 9.31555 3.76582 9.16541L0.230049 5.56131C0.0827471 5.41112 -1.32019e-06 5.20744 -1.33876e-06 4.99507C-1.35732e-06 4.7827 0.082747 4.57902 0.230049 4.42882L3.76582 0.824728C3.91401 0.678836 4.11248 0.598108 4.3185 0.599933C4.52451 0.601758 4.72158 0.685988 4.86726 0.834484C5.01294 0.982979 5.09558 1.18386 5.09737 1.39385C5.09916 1.60385 5.01996 1.80616 4.87683 1.95721L2.74987 4.19416L10.2143 4.19416C10.4227 4.19416 10.6225 4.27854 10.7699 4.42874C10.9172 4.57894 11 4.78265 11 4.99507C11 5.20748 10.9172 5.4112 10.7699 5.5614C10.6225 5.7116 10.4227 5.79598 10.2143 5.79598L2.74987 5.79598L4.87683 8.03292C5.02414 8.18311 5.10688 8.38679 5.10688 8.59916C5.10688 8.81154 5.02414 9.01521 4.87683 9.16541Z"
                  fill="#FB3838" />
              </svg>
              Go Back</Link>
            <div className={`mb-11 flex items-center justify-between`}>
              <p className={`text-zinc-800`}>Conversation with <span
                className={`bg-clip-text text-transparent bg-linear-main-red font-bold
               mb-11`}>John Doe</span>
              </p>
              <div className={`flex items-center gap-2`}>
                <ButtonActive color={`red`} size={`small`}
                              active={false}
                              label={`Clear Chat`} />

                <ButtonActive color={`red`} size={`small`}
                              active={false}
                              label={`Report Spam`} />
              </div>
            </div>
            <div className={`flex flex-col gap-6 justify-center max-h-[700px] overflow-y-auto scrollbar-thin`}>
              <UserMessage
                message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque cum eveniet expedita harum, nisi nulla obcaecati quos sit unde.`}
                date={`August 29, 13:44`} messageStatus={`read`} userLogo={`empty`} userName={`J.D`} />

              <UserMessage
                message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque cum eveniet expedita harum, nisi nulla obcaecati quos sit unde.`}
                date={`August 29, 13:45`} messageStatus={`delivering`} userLogo={`filled`} userName={`YOU`} />

              <UserMessage
                message={`Lorem ipsum dolor sit amet, consectetur.`}
                date={`August 29, 13:45`} messageStatus={`failed`} userLogo={`filled`} userName={`YOU`} />


              <UserMessage
                message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quidem?`}
                date={`August 29, 13:45`} messageStatus={`unread`} userLogo={`filled`} userName={`YOU`} />
              <UserMessage
                message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque cum eveniet expedita harum, nisi nulla obcaecati quos sit unde.`}
                date={`August 29, 13:44`} messageStatus={`read`} userLogo={`empty`} userName={`J.D`} />

              <UserMessage
                message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque cum eveniet expedita harum, nisi nulla obcaecati quos sit unde.`}
                date={`August 29, 13:45`} messageStatus={`delivering`} userLogo={`filled`} userName={`YOU`} />
              <UserMessage
                message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque cum eveniet expedita harum, nisi nulla obcaecati quos sit unde.`}
                date={`August 29, 13:44`} messageStatus={`read`} userLogo={`empty`} userName={`J.D`} />

              <UserMessage
                message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque cum eveniet expedita harum, nisi nulla obcaecati quos sit unde.`}
                date={`August 29, 13:45`} messageStatus={`delivering`} userLogo={`filled`} userName={`YOU`} />
              <UserMessage
                message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque cum eveniet expedita harum, nisi nulla obcaecati quos sit unde.`}
                date={`August 29, 13:44`} messageStatus={`read`} userLogo={`empty`} userName={`J.D`} />

              <UserMessage
                message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque cum eveniet expedita harum, nisi nulla obcaecati quos sit unde.`}
                date={`August 29, 13:45`} messageStatus={`delivering`} userLogo={`filled`} userName={`YOU`} />
              <UserMessage
                message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque cum eveniet expedita harum, nisi nulla obcaecati quos sit unde.`}
                date={`August 29, 13:44`} messageStatus={`read`} userLogo={`empty`} userName={`J.D`} />

              <UserMessage
                message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque cum eveniet expedita harum, nisi nulla obcaecati quos sit unde.`}
                date={`August 29, 13:45`} messageStatus={`delivering`} userLogo={`filled`} userName={`YOU`} />
            </div>
            <div className={`mt-16 max-w-[760px]`}>
              <form className={`flex bp-620:items-center gap-3 flex-col bp-620:flex-row`}>
                <input type={`text`} placeholder={`Your message goes here!`}
                       className={`w-full rounded-full bg-neutral-50 px-8 py-6
                       transition-all duration-300 focus:outline-none focus:bg-white 
                       border-2 border-transparent
                       focus:border-blue-800`} required />
                <button
                  className={`flex items-center justify-center bg-linear-dark-blue-to-orange py-5 px-8 rounded-full w-fit`}>
                  <TelegramIcon />
                </button>
              </form>
              <div className={`mt-6 flex flex-col justify-center gap-3.5`}>
                <div className={`flex gap-2.5`}>
                  <ViapropertyIcon icon={`questionMark`} />
                  <Paragraph text={(
                    <>
                      Please <HighlightText text={`DO NOT`} /> share any personal, confidential, or sensitive
                      information in this chat, such as
                      passwords, credit card details, or identification numbers. For your safety, we are not liable for
                      any personal data shared here.
                    </>
                  )}
                  />
                </div>
                <div className={`flex gap-2.5`}>
                  <ViapropertyIcon icon={`questionMark`} />
                  <Paragraph text={(
                    <>
                      This chat is for general informational purposes only. Additionally, be cautious of external links
                      or prompts to provide sensitive data. Always verify the source before clicking on any links
                      provided. We <HighlightText text={`strongly discourage`} /> purchasing or sharing financial
                      information through this chat
                      platform.
                    </>
                  )}
                  />
                </div>
                <div className={`mt-12 flex items-center gap-6`}>
                  <Link className={`flex items-center gap-2 bg-clip-text text-transparent bg-linear-main-red font-bold
            border  border-red-500 rounded-full px-4 py-2 text-[15.5px] w-fit`}
                        href={`/account-settings?page=chats`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                      <path
                        d="M4.87683 9.16541C4.72949 9.31555 4.52967 9.3999 4.32133 9.3999C4.11298 9.3999 3.91316 9.31555 3.76582 9.16541L0.230049 5.56131C0.0827471 5.41112 -1.32019e-06 5.20744 -1.33876e-06 4.99507C-1.35732e-06 4.7827 0.082747 4.57902 0.230049 4.42882L3.76582 0.824728C3.91401 0.678836 4.11248 0.598108 4.3185 0.599933C4.52451 0.601758 4.72158 0.685988 4.86726 0.834484C5.01294 0.982979 5.09558 1.18386 5.09737 1.39385C5.09916 1.60385 5.01996 1.80616 4.87683 1.95721L2.74987 4.19416L10.2143 4.19416C10.4227 4.19416 10.6225 4.27854 10.7699 4.42874C10.9172 4.57894 11 4.78265 11 4.99507C11 5.20748 10.9172 5.4112 10.7699 5.5614C10.6225 5.7116 10.4227 5.79598 10.2143 5.79598L2.74987 5.79598L4.87683 8.03292C5.02414 8.18311 5.10688 8.38679 5.10688 8.59916C5.10688 8.81154 5.02414 9.01521 4.87683 9.16541Z"
                        fill="#FB3838" />
                    </svg>
                    Go Back</Link>

                  <ButtonActive color={`red`} size={`small`}
                                active={false}
                                label={`Clear Chat`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
