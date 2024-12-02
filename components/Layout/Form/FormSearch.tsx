'use client';

type FormSearchType = {
  loading: boolean;
  setSearchTerm: (searchTerm: string) => void;
  // children: ReactNode;
}

import InputSearch from '@/components/UI/Input/InputSearch';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import { useCartDispatch } from '@/store/hooks';
import { propertiesActions } from '@/store/features/properties';
import { FormEvent, useRef, useState } from 'react';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import { searchTermSchema } from '@/utils/schemas/searchTermSchema';

export default function FormSearch({ loading, setSearchTerm }: FormSearchType) {
  const dispatch = useCartDispatch();
  const [errorMessage, setErrorMessage] = useState<string>(``);
  const timer = useRef<NodeJS.Timeout>();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) {
      return;
    }

    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries()) as { searchTerm: string };

    const validation = searchTermSchema.safeParse({ searchTerm: results.searchTerm });

    if (!validation.success) {
      setErrorMessage(validation.error.errors[0].message);

      timer.current = setTimeout(function() {
        setErrorMessage(``);
      }, 4000);
      return;
    }

    setSearchTerm(results.searchTerm);
  }

  return (
    <>
      {errorMessage && (
        <div>
          <ErrorMessage errorMessage={errorMessage} />
        </div>
      )}
      <form onSubmit={handleSubmit} className={`relative flex`}>
        <div className={`flex bp-620:items-center justify-center gap-4 bp-620:gap-11 flex-col bp-620:flex-row`}>
          <InputSearch disabled={loading} name={`searchTerm`} placeholder={`Country, City, Street`} />
          <div className={`flex gap-4`}>
            <div className={` bp-1364:hidden`} onClick={() => dispatch(propertiesActions.toggleFilter(true))}>
              <ViapropertyIcon icon={`settings`}
                               animation={`duration-200 bp-620:hover:scale-150 bp-620:w-[27px] bp-620:h-[28px] `} />
            </div>
            <div className={`bp-896:hidden`} onClick={() => dispatch(propertiesActions.toggleMap(true))}>
              <ViapropertyIcon icon={`map`} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
