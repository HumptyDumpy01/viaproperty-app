// 'use client';

type ErrorType = {
  errorMessage: string;
  // children: ReactNode;
}

import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';

export default function ErrorMessage({ errorMessage }: ErrorType) {
  return (
    <>
      <div className={`flex items-center gap-2`}>
        <ViapropertyIcon icon={`error`} />
        <div>
          <span className={`text-red-500 font-semibold text-2xl`}>{errorMessage}</span>
        </div>
      </div>
    </>
  );
}
