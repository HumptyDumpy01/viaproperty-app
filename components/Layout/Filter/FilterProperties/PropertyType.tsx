'use client';

import { useEffect, useState } from 'react';
import ButtonPropertyType from '@/components/UI/Button/ButtonPropertyType';

export default function PropertyType() {
  const [activePropertyType, setActivePropertyType] = useState<string | null>(null);
  const [propertyTypesString, setPropertyTypesString] = useState<string>('');

  const handleToggle = (type: string) => {
    setActivePropertyType((prev) => (prev === type ? null : type));
  };

  useEffect(() => {
    setPropertyTypesString(activePropertyType ? activePropertyType : '');
  }, [activePropertyType]);

  return (
    <>
      <div>
        <h2 className={`text-zinc-900 font-bold text-xl mb-3.5`}>Property Type</h2>
        <div className={`grid grid-cols-2 gap-3.5`}>
          <ButtonPropertyType
            icon={`home`}
            label={`Home`}
            isActive={activePropertyType === 'home'}
            onToggle={() => handleToggle('home')}
          />
          <ButtonPropertyType
            icon={`apartment`}
            label={`Apartment`}
            isActive={activePropertyType === 'apartment'}
            onToggle={() => handleToggle('apartment')}
          />
          <ButtonPropertyType
            icon={`commercial`}
            label={`Commercial`}
            isActive={activePropertyType === 'commercial'}
            onToggle={() => handleToggle('commercial')}
          />
          <ButtonPropertyType
            icon={`cottage`}
            label={`Cottage`}
            isActive={activePropertyType === 'cottage'}
            onToggle={() => handleToggle('cottage')}
          />
        </div>
        <input type="hidden" name="propertyTypes" value={propertyTypesString} />
      </div>
    </>
  );
}