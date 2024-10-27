'use client';

/*type MapContainerType = {
  // children: ReactNode;
}*/

import Map from '@/components/Layout/Filter/Map/Map';
import { useCartDispatch, useCartSelector } from '@/store/hooks';
import { propertiesActions } from '@/store/features/properties';
import CloseLayoutIcon from '@/components/UI/Button/CloseLayoutIcon';

export default function MapContainer(/*{  }: MapContainerType*/) {
  const dispatch = useCartDispatch();
  const mapOpen = useCartSelector((state) => state.properties.openMap);

  const mapHidden = `opacity-0 pointer-events-none`;
  return (
    <>
      <CloseLayoutIcon extraClasses={`bp-896:opacity-0 bp-896:pointer-events-none`} fixedPosition={`top-6 left-5`}
                       layoutOpen={mapOpen}
                       dispatch={() => dispatch(propertiesActions.toggleMap(false))} />
      <div onClick={() => dispatch(propertiesActions.toggleMap(false))}
           className={`fixed ${mapOpen ? `flex` : `hidden`} bg-white/90 top-0 left-0 inset-0 bp-896:opacity-0 bp-896:hidden`}>
      </div>
      <div className={`fixed inset-0 flex justify-center m-auto items-center bp-896:items-start z-10 bp-896:relative 
        bp-896:top-0 bp-896:left-0 w-full h-full bp-896:w-auto 
         ${!mapOpen ? mapHidden : ``} transition-all duration-200 bp-896:opacity-100 bp-896:pointer-events-auto`}>
        <Map />
      </div>
    </>
  );
}
