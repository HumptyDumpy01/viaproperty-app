// 'use client';

/*type HeartType = {
  // children: ReactNode;
}*/

import React from 'react';

export default function Heart(/*{  }: HeartType*/) {
  return (
    <>
      <div className={`transition-all duration-150 hover:scale-110 cursor-pointer`}>
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
    </>
  );
}
