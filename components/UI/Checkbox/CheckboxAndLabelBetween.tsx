// components/UI/Checkbox/CheckboxAndLabelBetween.tsx
'use client';

type CheckboxAndLabelBetweenType = {
  checkboxName: string;
  checkboxLabel: string;
  spanLabel: string;
  onChange?: (isChecked: boolean) => void;
  checked?: boolean;
}

import Checkbox from '@/components/UI/Checkbox/Checkbox';
import React, { useEffect, useRef, useState } from 'react';

export default function
  CheckboxAndLabelBetween({
                            checkboxName,
                            spanLabel,
                            checkboxLabel,
                            onChange,
                            checked
                          }: CheckboxAndLabelBetweenType) {

  const checkboxRef = useRef<HTMLInputElement>(null);
  const [checkboxActive, setCheckboxActive] = useState<boolean>(checked || false);

  useEffect(() => {
    const handleCheckboxChange = () => {
      const isChecked = checkboxRef.current?.checked || false;
      setCheckboxActive(isChecked);
      if (onChange) {
        onChange(isChecked);
      }
    };

    const checkboxElement = checkboxRef.current;
    checkboxElement?.addEventListener('change', handleCheckboxChange);

    // Initial state
    setCheckboxActive(checkboxElement?.checked || false);

    return () => {
      checkboxElement?.removeEventListener('change', handleCheckboxChange);
    };
  }, [onChange]);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = checked || false;
      setCheckboxActive(checked || false);
    }
  }, [checked]);

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