'use client';

/*type SidebarContainerType = {
  // children: ReactNode;
}*/

import ViapropertySidebar, { ViapropertySidebarType } from '@/components/Layout/Sidebar/ViapropertySidebar';
import CloseLayoutIcon from '@/components/UI/Button/CloseLayoutIcon';
import Background from '@/components/Layout/Background/Background';
import React from 'react';
import { useCartDispatch, useCartSelector } from '@/store/hooks';
import { propertyDescriptionSliceActions } from '@/store/features/propertyDescription';

export default function SidebarContainer({ propertyDetails }: ViapropertySidebarType) {
  const sidebarOpen = useCartSelector((state) => state.propertyDescription.responsiveSidebarOpen);
  const dispatch = useCartDispatch();

  return (
    <>
      <div
        className={`w-fit z-50 bp-1306:flex bp-1306:static fixed h-screen bp-1306:h-fit bg-white rounded-3xl ${sidebarOpen ? `
          translate-x-0 opacity-100 pointer-events-auto pb-32` : `-translate-x-full opacity-0 pointer-events-none `} 
          bp-1306:translate-x-0 transition-all duration-200 bp-1306:opacity-100 scrollbar-thin bp-1306:pointer-events-auto overflow-y-auto
          bp-1306:overflow-y-none`}>
        <ViapropertySidebar propertyDetails={propertyDetails} />
      </div>

      <div className={`bp-1306:hidden`} onClick={() => dispatch(propertyDescriptionSliceActions.toggleSidebar(false))}>
        <CloseLayoutIcon dispatch={() => dispatch(propertyDescriptionSliceActions.toggleSidebar(false))}
                         layoutOpen={sidebarOpen}
                         fixedPosition={`top-3 right-3`} />
        <Background active={sidebarOpen} />
      </div>
    </>
  );
}
