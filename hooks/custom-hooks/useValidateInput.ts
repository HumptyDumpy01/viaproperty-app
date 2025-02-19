import { useEffect, useState } from 'react';
import { ZodSchema } from 'zod';

type ValidationParStages = 'error' | 'neutral' | 'success';

export function useValidation(schema: ZodSchema<any>, initialState: any) {
  const [value, setValue] = useState<string>(initialState);
  const [validationStage, setValidationStage] = useState<ValidationParStages>('neutral');

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