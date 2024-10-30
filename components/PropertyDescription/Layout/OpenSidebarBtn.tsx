'use client';

/*type OpenSidebarBtnType = {
  // children: ReactNode;
}*/

import React from 'react';
import { useCartDispatch } from '@/store/hooks';
import { propertyDescriptionSliceActions } from '@/store/features/propertyDescription';

export default function OpenSidebarBtn(/*{  }: OpenSidebarBtnType*/) {
  const dispatch = useCartDispatch();
  return (
    <>
      <div className={`w-fit flex items-center bp-1306:hidden`}>
        <button
          onClick={() => dispatch(propertyDescriptionSliceActions.toggleSidebar(true))}
          className={`bg-linear-main-red flex text-white rounded-2xl w-full text-center justify-center text-2xl font-bold px-20 py-6 mt-7
                  transition-all duration-200 hover:animate-pulse`}>Buy
          Now
        </button>
      </div>
    </>
  );
}
