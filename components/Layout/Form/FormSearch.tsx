'use client';

/*type FormSearchType = {
  // children: ReactNode;
}*/

import InputSearch from '@/components/UI/Input/InputSearch';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import { useCartDispatch } from '@/store/hooks';
import { propertiesActions } from '@/store/features/properties';

export default function FormSearch(/*{  }: FormSearchType*/) {
  const dispatch = useCartDispatch();
  return (
    <>
      <form className={`relative flex`}>
        <div className={`flex bp-620:items-center justify-center gap-4 bp-620:gap-11 flex-col bp-620:flex-row`}>
          <InputSearch placeholder={`Country, City, Street`} />
          <div className={`flex gap-4`}>
            <div className={` bp-1364:hidden`} onClick={() => dispatch(propertiesActions.toggleFilter(true))}>
              <ViapropertyIcon icon={`settings`}
                               animation={`duration-200 bp-620:hover:scale-150 bp-620:w-[27px] bp-620:h-[28px] `} />
            </div>
            <div className={`bp-896:hidden`}>
              <ViapropertyIcon icon={`map`} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
