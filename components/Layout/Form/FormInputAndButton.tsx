'use client';

import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import Button from '@/components/UI/Button/Button';
import React, { FormEvent, useRef, useState, useTransition } from 'react';
import { newsletterSchema } from '@/utils/schemas/newsletterSchema';
import axios from 'axios';

type inputAndButtonType = {
  inputType: 'email' | 'text' | 'password' | 'number' | `search`;
  inputName: string;
  btnLabel: string;
  inputPlaceholder: string;
  // children: ReactNode;
}

export default function FormInputAndButton({ inputType, btnLabel, inputName, inputPlaceholder }: inputAndButtonType) {
  const input = useRef<HTMLInputElement>(null);

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>(``);
  const timeout = useRef<NodeJS.Timeout>();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      setError(``);
      e.preventDefault();

      const currObject = e.currentTarget;
      const formData = new FormData(currObject);
      const results = Object.fromEntries(formData.entries()) as { email: string };

      const validation = newsletterSchema.safeParse(results);

      if (!validation.success) {
        const errorMessage = validation.error.errors.map((error) => error.message).join(`, `);
        setError(errorMessage);
        return;
      }

      currObject.reset();

      startTransition(async () => {
        setError(``);
        setFormSubmitted(true);


        const response = await axios.post(`/api/newsletter`, { email: results.email }, {
          headers: {
            'Content-Type': `application/json`
          }
        });

        const data = response.data;

        if (data.status !== `success`) {
          setError(`Failed to submit the form!`);
          setFormSubmitted(false);
        } else {
          timeout.current = setTimeout(function() {
            setFormSubmitted(false);
            return clearTimeout(timeout.current);
          }, 4000);
        }

      });
    } catch (error) {
      setError(`Failed to submit the form! ${error}`);
    }
  }

  return (
    <>
      {error && (
        <div className={`flex justify-center mb-8`}>
          <ErrorMessage errorMessage={error} />
        </div>
      )}
      <form onSubmit={handleSubmit} className={`flex  flex-col bp-620:flex-row items-center justify-center gap-8 mb-8`}>
        <input ref={input} type={inputType} required
               name={inputName}
               className={`h-16 pl-7 rounded-full bp-620:w-80 w-9/12
                     text-slate-900 transition-all duration-200 focus:outline-none border-2 border-transparent 
                     focus:border-red-600`} placeholder={inputPlaceholder} />
        <Button hover={!formSubmitted} customClasses={isPending ? `animation-pulse` : ``}
                btnVariant={formSubmitted ? `green` : `red`}
                type={`submit`} mode={`md`}
                label={formSubmitted ? `Thanks!` : isPending ? `Submitting...` : btnLabel} />
      </form>
    </>
  );
}
