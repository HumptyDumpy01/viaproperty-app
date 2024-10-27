'use client';

type CheckboxAndLabelBetweenType = {
  checkboxName: string;
  checkboxLabel: string;
  spanLabel: string;
  // children: ReactNode;
}

import Checkbox from '@/components/UI/Checkbox/Checkbox';
import React, { useEffect, useRef, useState } from 'react';

export default function
  CheckboxAndLabelBetween({
                            checkboxName,
                            spanLabel,
                            checkboxLabel
                          }: CheckboxAndLabelBetweenType) {

  const checkboxRef = useRef<HTMLInputElement>(null);
  const [checkboxActive, setCheckboxActive] = useState<boolean>(false);

  useEffect(() => {
    const handleCheckboxChange = () => {
      setCheckboxActive(checkboxRef.current?.checked || false);
    };

    const checkboxElement = checkboxRef.current;
    checkboxElement?.addEventListener('change', handleCheckboxChange);

    // Initial state
    setCheckboxActive(checkboxElement?.checked || false);

    return () => {
      checkboxElement?.removeEventListener('change', handleCheckboxChange);
    };
  }, []);

  return (
    <>
      <div className={`flex items-center justify-between`}>
        <div>
          <Checkbox ref={checkboxRef} label={checkboxLabel} name={checkboxName} />
        </div>
        <div>
          <span
            className={`text-sm ${checkboxActive ? `bg-clip-text text-transparent bg-linear-main-dark-blue font-semibold` : ``} `}>{spanLabel}$</span>
        </div>
      </div>
    </>
  );
}