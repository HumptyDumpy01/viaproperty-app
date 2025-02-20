import { useEffect, useState } from 'react';
import { ZodSchema } from 'zod';

type ValidationParStages = 'error' | 'neutral' | 'success';

export function useValidation(schema: ZodSchema<any>, initialState: string, storeToLocalStorage?: boolean, propertyName?: string) {
  const [value, setValue] = useState<string>(() => {
    if (storeToLocalStorage && typeof window !== 'undefined' && propertyName) {
      return window.localStorage.getItem(propertyName) || initialState;
    }
    return initialState;
  });
  const [validationStage, setValidationStage] = useState<ValidationParStages>('neutral');

  useEffect(() => {
    if (storeToLocalStorage && typeof window !== 'undefined') {
      window.localStorage.setItem(`${propertyName}`, value);
    }
  }, [propertyName, storeToLocalStorage, value]);

  useEffect(() => {
    if (value) {
      const validate = schema.safeParse({ property: value });
      setValidationStage(!validate.success ? 'error' : 'success');
    } else {
      setValidationStage('neutral');
    }
  }, [value, schema]);

  return { value, setValue, validationStage };
}