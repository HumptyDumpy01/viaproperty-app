'use client';

import { useEffect, useState } from 'react';
import ButtonPropertyType from '@/components/UI/Button/ButtonPropertyType';

export default function PropertyType() {
  const [activePropertyTypes, setActivePropertyTypes] = useState<string[]>([]);
  const [propertyTypesString, setPropertyTypesString] = useState<string>('');

  const handleToggle = (type: string) => {
    setActivePropertyTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  useEffect(() => {
    setPropertyTypesString(activePropertyTypes.join(', '));
  }, [activePropertyTypes]);

  return (
    <>
      <div>
        <h2 className={`text-zinc-900 font-bold text-xl mb-3.5`}>Property Type</h2>
        <div className={`grid grid-cols-2 gap-3.5`}>
          <ButtonPropertyType
            icon={`home`}
            label={`Home`}
            isActive={activePropertyTypes.includes('home')}
            onToggle={() => handleToggle('home')}
          />
          <ButtonPropertyType
            icon={`apartment`}
            label={`Apartment`}
            isActive={activePropertyTypes.includes('apartment')}
            onToggle={() => handleToggle('apartment')}
          />
          <ButtonPropertyType
            icon={`commercial`}
            label={`Commercial`}
            isActive={activePropertyTypes.includes('commercial')}
            onToggle={() => handleToggle('commercial')}
          />
          <ButtonPropertyType
            icon={`cottage`}
            label={`Cottage`}
            isActive={activePropertyTypes.includes('cottage')}
            onToggle={() => handleToggle('cottage')}
          />
        </div>
        <input type="hidden" name="propertyTypes" value={propertyTypesString} />
      </div>
    </>
  );
}