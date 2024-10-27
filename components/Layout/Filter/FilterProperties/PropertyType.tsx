// 'use client';

/*type PropertyTypeType = {
  // children: ReactNode;
}*/

import ButtonPropertyType from '@/components/UI/Button/ButtonPropertyType';

export default function PropertyType(/*{  }: PropertyTypeType*/) {
  return (
    <>
      <div>
        <h2 className={`text-zinc-900 font-bold text-xl mb-3.5`}>Property Type</h2>
        <div className={`grid grid-cols-2 gap-3.5`}>
          <ButtonPropertyType icon={`home`} label={`Home`} />
          <ButtonPropertyType icon={`apartment`} label={`Apartment`} />
          <ButtonPropertyType icon={`commercial`} label={`Commercial`} />
          <ButtonPropertyType icon={`cottage`} label={`Cottage`} />
        </div>
      </div>
    </>
  );
}
