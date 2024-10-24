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
        <div className={`flex items-center justify-center gap-10`}>
          <InputSearch placeholder={`Country, City, Street`} />
          <div>
            <SettingsIcon />
          </div>
        </div>
      </form>
    </>
  );
}
