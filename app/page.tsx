import LogoImg from '@/assets/logo.png';
import Image from 'next/image';
import React from 'react';
import NavLink from '@/components/UI/Link/NavLInk';

export default function Home() {
  return (
    <main className={``}>
      <div className={`max-w-7xl mx-auto w-full mt-9`}>
        <nav className={`flex items-center`}>
          <div className={`flex items-center gap-1 mr-16`}>
            <Image className={`w-[45.7px]`} src={LogoImg} alt={`Viaproperty logo`} />
            <h3
              className={`text-[13.163px] uppercase font-bold bg-clip-text text-transparent bg-linear-main-red font-montserrat-alternates`}>Viaproperty</h3>
          </div>
          <div className={`flex gap-12 mr-20`}>
            <NavLink label={`Home`} path={`/`} type={`active`} />
            <NavLink label={`Properties`} path={`/properties`} type={`default`} />
            <NavLink label={`Sell My Property`} path={`/sell`} type={`default`} />
          </div>

          <div className={`flex items-center`}>
            <div className={`relative`}>
              <input className={`bg-zinc-100 text-sm pl-5 py-3.5 rounded-2xl border-2 border-transparent
              focus:outline-none focus:border-2 focus:border-red-500 transition-all duration-150
              focus:bg-white w-[112%]`} type="seach"
                     placeholder={`Search`} />
              <div
                className={`absolute w-[50px] h-[50px] bg-red-500 top-0 -right-12 rounded-2xl flex items-center justify-center
                hover:scale-110 transition-all duration-200 cursor-pointer
                active:bg-red-300`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 21 20" fill="none">
                  <path
                    d="M14.8154 14.2003L18.1251 17.5099M3.23178 9.2359C3.23178 10.9914 3.92916 12.6751 5.17051 13.9164C6.41186 15.1578 8.09548 15.8551 9.85102 15.8551C11.6065 15.8551 13.2902 15.1578 14.5315 13.9164C15.7729 12.6751 16.4702 10.9914 16.4702 9.2359C16.4702 7.48037 15.7729 5.79674 14.5315 4.5554C13.2902 3.31405 11.6065 2.61667 9.85102 2.61667C8.09548 2.61667 6.41186 3.31405 5.17051 4.5554C3.92916 5.79674 3.23178 7.48037 3.23178 9.2359Z"
                    stroke="white" stroke-width="1.24111" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className={`absolute top-[15px] right-3 text-sm`}>
                <select className={`bg-transparent text-sm text-stone-500`} name="propertyType" id="propertyType">
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
                </select>
              </div>
            </div>
          </div>
          <div className={`ml-auto flex gap-7 items-center`}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                <path
                  d="M18.9102 8.75019L18.3699 9.27049C18.4399 9.34312 18.5238 9.40089 18.6166 9.44035C18.7095 9.4798 18.8093 9.50014 18.9102 9.50014C19.0111 9.50014 19.1109 9.4798 19.2037 9.44035C19.2966 9.40089 19.3805 9.34312 19.4505 9.27049L18.9102 8.75019ZM13.9083 19.6765C13.7544 19.55 13.5565 19.4897 13.3581 19.509C13.1598 19.5284 12.9772 19.6257 12.8507 19.7796C12.7241 19.9335 12.6638 20.1314 12.6832 20.3298C12.7025 20.5281 12.7998 20.7106 12.9537 20.8372L13.9083 19.6765ZM9.24657 16.6658C9.29387 16.7522 9.35774 16.8285 9.43453 16.8903C9.51132 16.9521 9.59952 16.9981 9.69411 17.0258C9.78869 17.0535 9.88781 17.0623 9.98579 17.0517C10.0838 17.0411 10.1787 17.0113 10.2652 16.964C10.3516 16.9167 10.4279 16.8528 10.4897 16.776C10.5515 16.6992 10.5975 16.611 10.6252 16.5164C10.6529 16.4218 10.6617 16.3227 10.6511 16.2247C10.6404 16.1268 10.6106 16.0318 10.5633 15.9454L9.24657 16.6658ZM9.6548 12.3893C9.6548 10.2381 10.8705 8.433 12.5305 7.67356C14.1434 6.93613 16.3107 7.13124 18.3699 9.27049L19.4505 8.23088C17.0091 5.69241 14.1714 5.27316 11.9061 6.30877C9.69082 7.32236 8.15393 9.67572 8.15393 12.3893H9.6548ZM15.4051 22.7583C15.9184 23.1626 16.4688 23.5928 17.0261 23.919C17.5834 24.2452 18.2198 24.5093 18.9102 24.5093V23.0085C18.6 23.0085 18.2358 22.8884 17.7835 22.6233C17.3303 22.3591 16.861 21.9949 16.3347 21.5796L15.4051 22.7583ZM22.4152 22.7583C23.8421 21.6327 25.6671 20.3439 27.0979 18.732C28.5558 17.091 29.6664 15.0569 29.6664 12.3893H28.1656C28.1656 14.5886 27.265 16.2826 25.9763 17.7354C24.6605 19.2163 23.0026 20.384 21.4857 21.5796L22.4152 22.7583ZM29.6664 12.3893C29.6664 9.67572 28.1306 7.32236 25.9143 6.30877C23.6489 5.27316 20.8133 5.69241 18.3699 8.22988L19.4505 9.27049C21.5097 7.13225 23.677 6.93613 25.2899 7.67356C26.9499 8.433 28.1656 10.2371 28.1656 12.3893H29.6664ZM21.4857 21.5796C20.9594 21.9949 20.4901 22.3591 20.0368 22.6233C19.5836 22.8874 19.2204 23.0085 18.9102 23.0085V24.5093C19.6006 24.5093 20.237 24.2442 20.7943 23.919C21.3526 23.5928 21.9019 23.1626 22.4152 22.7583L21.4857 21.5796ZM16.3347 21.5796C15.5382 20.9523 14.7288 20.3519 13.9083 19.6765L12.9537 20.8372C13.7842 21.5206 14.6627 22.173 15.4051 22.7583L16.3347 21.5796ZM10.5633 15.9464C9.96051 14.8582 9.64764 13.6333 9.6548 12.3893H8.15393C8.15393 14.0283 8.57418 15.4361 9.24657 16.6658L10.5633 15.9464Z"
                  fill="url(#paint0_linear_986_5831)" />
                <defs>
                  <linearGradient id="paint0_linear_986_5831" x1="8.15393" y1="15.146" x2="29.6664" y2="15.146"
                                  gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FB3838" />
                    <stop offset="1" stop-color="#F27155" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <path
                  d="M13.3464 5.08064C11.5252 5.08064 9.77855 5.80411 8.49077 7.09189C7.20299 8.37967 6.47952 10.1263 6.47952 11.9475V15.4084C6.47966 15.5605 6.4444 15.7107 6.37652 15.8469L4.69218 19.2146C4.6099 19.3791 4.57105 19.5619 4.57932 19.7457C4.58759 19.9295 4.64269 20.1081 4.73941 20.2645C4.83613 20.421 4.97124 20.5502 5.13192 20.6397C5.2926 20.7293 5.47351 20.7763 5.65746 20.7763H21.0353C21.2192 20.7763 21.4001 20.7293 21.5608 20.6397C21.7215 20.5502 21.8566 20.421 21.9533 20.2645C22.05 20.1081 22.1051 19.9295 22.1134 19.7457C22.1217 19.5619 22.0828 19.3791 22.0005 19.2146L20.3172 15.8469C20.249 15.7107 20.2134 15.5606 20.2132 15.4084V11.9475C20.2132 10.1263 19.4897 8.37967 18.202 7.09189C16.9142 5.80411 15.1676 5.08064 13.3464 5.08064ZM13.3464 23.7192C12.7375 23.7195 12.1436 23.531 11.6463 23.1796C11.1491 22.8282 10.7731 22.3313 10.5702 21.7572H16.1225C15.9196 22.3313 15.5436 22.8282 15.0464 23.1796C14.5492 23.531 13.9552 23.7195 13.3464 23.7192Z"
                  fill="#FB3838" />
                <circle cx="19.1382" cy="6.0146" r="2.89592" fill="#FF4545" />
              </svg>
            </div>
            <div className={`flex items-center gap-2`}>
              <div className={`flex flex-col gap-0.5`}>
                <p className={`text-[15px] font-semibold`}>Nikolas Tuz</p>
                <p className={`text-[11px] font-medium text-zinc-500`}>California, USA</p>
              </div>
              <div className={`flex gap-1`}>
                <div className={`flex items-center justify-center w-14 h-14 bg-linear-main-dark-blue rounded-full`}>
                  <p className={`font-semibold text-white`}>N.B</p>
                </div>
                <div className={`flex items-center cursor-pointer`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 17 18" fill="none">
                    <path
                      d="M3.94735 11.3751C4.21641 11.6442 4.65257 11.6444 4.92192 11.3757L7.96637 8.33785C8.23552 8.06929 8.67127 8.06929 8.94041 8.33785L11.9849 11.3757C12.2542 11.6444 12.6904 11.6442 12.9594 11.3751L13.2195 11.1151C13.4887 10.8458 13.4887 10.4093 13.2195 10.14L8.94095 5.86148C8.67168 5.59222 8.23511 5.59222 7.96584 5.86148L3.68732 10.14C3.41805 10.4093 3.41805 10.8458 3.68732 11.1151L3.94735 11.3751Z"
                      fill="#00202A" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </nav>
      </div>
      <header>
      </header>
    </main>
  );
}
