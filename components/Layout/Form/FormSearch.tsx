// 'use client';

/*type FormSearchType = {
  // children: ReactNode;
}*/

import SettingsIcon from '@/components/UI/Icon/SettingsIcon';
import InputSearch from '@/components/UI/Input/InputSearch';
import MapIcon from '@/components/UI/Icon/MapIcon';

export default function FormSearch(/*{  }: FormSearchType*/) {
  return (
    <>
      <form className={`relative flex`}>
        <div className={`flex bp-620:items-center justify-center gap-4 bp-620:gap-11 flex-col bp-620:flex-row`}>
          <InputSearch placeholder={`Country, City, Street`} />
          <div className={`flex gap-4`}>
            <SettingsIcon />
            <MapIcon />
          </div>
        </div>
      </form>
    </>
  );
}
