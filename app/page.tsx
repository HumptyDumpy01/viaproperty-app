import React from 'react';
import Navigation from '@/components/UI/Navigation/Navigation';
import SupportManager1 from '@/assets/home/contact-us/support-1.png';
import SupportManager2 from '@/assets/home/contact-us/support-2.png';
import SupportManager3 from '@/assets/home/contact-us/support-3.png';
import SupportManager4 from '@/assets/home/contact-us/support-4.png';
import Image from 'next/image';
import HeroImg1 from '@/assets/home/hero-second-col/image-1.png';
import HeroImg2 from '@/assets/home/hero-second-col/image-2.jpg';
import HeroImg3 from '@/assets/home/hero-second-col/image-3.png';

export default function Home() {
  return (
    <main className={``}>
      <Navigation />
      <header>
        <div
          className={`max-w-7xl mx-auto w-full mt-9 bg-zinc-50 pt-12 pb-11 rounded-2xl pr-14 bg-linear-white-to-blue`}>
          <div className={`flex pl-16`}>
            <div className={`flex flex-col my-auto min-w-[450px]`}>
              <h1 className={`text-5xl font-bold tracking-wide leading-11
                bg-clip-text text-transparent bg-linear-main-red mb-6`}>Exquisite design <br />
                combined with <br />
                posh interior</h1>
              <p className={`max-w-md text-[15px] mb-6`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
                tempor
                incididunt ut labore et
                dolore magna aliqua.</p>
              <div className={`flex bg-linear-white-to-red rounded-full py-3 px-3 items-center w-80 relative
              mb-10`}>
                <div className={`flex`}>
                  <Image className={`w-10 h-10 -mr-4`} src={SupportManager1} alt={`Boby Maker - Manager`} />
                  <Image className={`w-10 h-10 -mr-3`} src={SupportManager2} alt={`Mark Johnson - Manager`} />
                  <Image className={`w-10 h-10 -mr-3`} src={SupportManager3} alt={`Nikolai Hustav - Manager`} />
                  <Image className={`w-10 h-10`} src={SupportManager4} alt={`John Doe - Manager`} />
                </div>
                <h3 className={`absolute -right-32 top-5 text-[14px] font-semibold`}>
                  <span className={`text-white`}>Contact our w</span>onderful support!</h3>
              </div>
              <button className={`font-bold bg-red-500 rounded-full flex 
               w-fit h-19 text-white 
              px-12 py-6`}> Shop Now!
              </button>
            </div>
            <div className={`grid grid-cols-3 gap-6`}>
              <div className={`self-end`}>
                <Image className={`object-fit ml-auto rounded-2xl`} src={HeroImg1} alt={`Hero Image 1`} />
              </div>
              <div className={`relative`}>
                <Image className={`object-cover w-full h-full rounded-3xl`} src={HeroImg2} alt={`Hero Image 2`} />
                <div
                  className={`w-16 h-9 absolute bg-neutral-50 bottom-4 left-3 flex items-center justify-center rounded-full`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path
                      d="M11.1783 4.96441C11.3766 4.76616 11.6455 4.65479 11.9259 4.65479C12.2063 4.65479 12.4753 4.76616 12.6736 4.96441L17.4324 9.72325C17.6307 9.92157 17.7421 10.1905 17.7421 10.4709C17.7421 10.7513 17.6307 11.0203 17.4324 11.2186L12.6736 15.9774C12.4741 16.1701 12.207 16.2767 11.9297 16.2742C11.6525 16.2718 11.3872 16.1606 11.1911 15.9645C10.9951 15.7685 10.8839 15.5032 10.8814 15.226C10.879 14.9487 10.9856 14.6815 11.1783 14.4821L14.041 11.5284H3.99453C3.71406 11.5284 3.44508 11.417 3.24675 11.2187C3.04843 11.0204 2.93701 10.7514 2.93701 10.4709C2.93701 10.1904 3.04843 9.92146 3.24675 9.72314C3.44508 9.52482 3.71406 9.4134 3.99453 9.4134H14.041L11.1783 6.45975C10.98 6.26143 10.8686 5.9925 10.8686 5.71208C10.8686 5.43166 10.98 5.16273 11.1783 4.96441Z"
                      fill="#00202A" />
                  </svg>
                </div>
                <div className={`absolute top-3 left-3 bg-neutral-50 rounded-xl py-2.5 px-3 `}>
                  <h3 className={`text-zinc-600 text-[17px] font-semibold truncate max-w-screen-xs`}>Woodie House</h3>
                  <p className={`text-sm`}>California, <span className={`text-red-600`}>215,000$</span></p>
                </div>
              </div>
              <div className={`relative`}>
                <div className={`relative`}>
                  <Image src={HeroImg3} alt={`Hero Image 3`} />
                  <div className={`absolute top-3 left-3 bg-neutral-50 rounded-xl py-2.5 px-3 `}>
                    <h3 className={`text-zinc-600 text-[17px] font-semibold truncate max-w-screen-xs`}>Woodie House</h3>
                    <p className={`text-sm`}>California, <span className={`text-red-600`}>215,000$</span></p>
                  </div>
                  <div
                    className={`w-16 h-9 absolute bg-linear-main-red bottom-4 left-3 flex items-center justify-center rounded-full`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                      <path
                        d="M11.1783 4.96441C11.3766 4.76616 11.6455 4.65479 11.9259 4.65479C12.2063 4.65479 12.4753 4.76616 12.6736 4.96441L17.4324 9.72325C17.6307 9.92157 17.7421 10.1905 17.7421 10.4709C17.7421 10.7513 17.6307 11.0203 17.4324 11.2186L12.6736 15.9774C12.4741 16.1701 12.207 16.2767 11.9297 16.2742C11.6525 16.2718 11.3872 16.1606 11.1911 15.9645C10.9951 15.7685 10.8839 15.5032 10.8814 15.226C10.879 14.9487 10.9856 14.6815 11.1783 14.4821L14.041 11.5284H3.99453C3.71406 11.5284 3.44508 11.417 3.24675 11.2187C3.04843 11.0204 2.93701 10.7514 2.93701 10.4709C2.93701 10.1904 3.04843 9.92146 3.24675 9.72314C3.44508 9.52482 3.71406 9.4134 3.99453 9.4134H14.041L11.1783 6.45975C10.98 6.26143 10.8686 5.9925 10.8686 5.71208C10.8686 5.43166 10.98 5.16273 11.1783 4.96441Z"
                        fill="#fff" />
                    </svg>
                  </div>
                </div>
                <div className={`border border-red-500 h-auto rounded-2xl flex items-center justify-center flex-col
                pb-4 mt-6`}>
                  <span className={`uppercase text-white text-xl font-bold
                  text-center inline-block mt-5 mb-1.5`}>on sale!</span>
                  <p className={`text-white text-[12px] text-center mb-5`}>Lorem ipsum dolor sit amet</p>
                  <button className={`h-11 bg-linear-main-red rounded-full px-5 font-semibold text-white`}>Explore
                    More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
