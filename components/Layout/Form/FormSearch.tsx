// 'use client';

/*type FormSearchType = {
  // children: ReactNode;
}*/

import SettingsIcon from '@/components/UI/Icon/SettingsIcon';
import InputSearch from '@/components/UI/Input/InputSearch';

export default function FormSearch(/*{  }: FormSearchType*/) {
  return (
    <>
      <form className={`relative flex`}>
        <div className={`flex bp-620:items-center justify-center gap-4 bp-620:gap-11 flex-col bp-620:flex-row`}>
          <InputSearch placeholder={`Country, City, Street`} />
          <div>
            <SettingsIcon />
          </div>
        </div>
      </form>
    </>
  );
}
