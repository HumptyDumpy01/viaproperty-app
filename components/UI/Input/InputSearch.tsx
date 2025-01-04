// 'use client';

import { forwardRef } from 'react';

type InputSearchType = {
  placeholder: string;
  name?: string;
  disabled?: boolean;
  // children: ReactNode;
}

// eslint-disable-next-line react/display-name
const InputSearch = forwardRef<HTMLInputElement, InputSearchType>(({ placeholder, name, disabled = false }, ref) => {
  return (
    <>
      <div className={`relative`}>
        <input
          ref={ref}
          disabled={disabled}
          required
          minLength={1}
          maxLength={500}
          name={name}
          type="search"
          className={`bp-620:w-[360px] w-[130%] border-2 border-r-zinc-100 py-5 pl-6 pr-3 rounded-xl focus:outline-none`}
          placeholder={placeholder}
        />
        <button
          className={`bg-red-500 h-16 w-16 rounded-xl flex items-center justify-center absolute top-[1px] bp-620:-right-6 -right-[90px] transition-all duration-200 hover:bg-red-600 active:bg-red-400`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
            <path
              d="M7.19915 0.9795C7.37054 0.808165 7.60295 0.711914 7.8453 0.711914C8.08764 0.711914 8.32006 0.808165 8.49144 0.9795L12.6041 5.09218C12.7755 5.26357 12.8717 5.49598 12.8717 5.73833C12.8717 5.98067 12.7755 6.21309 12.6041 6.38447L8.49144 10.4972C8.31907 10.6636 8.08821 10.7557 7.84859 10.7537C7.60896 10.7516 7.37973 10.6555 7.21028 10.486C7.04083 10.3166 6.94472 10.0873 6.94263 9.84771C6.94055 9.60809 7.03267 9.37723 7.19915 9.20486L9.67315 6.65225H0.990833C0.748444 6.65225 0.515983 6.55597 0.344588 6.38457C0.173193 6.21318 0.0769043 5.98071 0.0769043 5.73833C0.0769043 5.49594 0.173193 5.26348 0.344588 5.09208C0.515983 4.92069 0.748444 4.8244 0.990833 4.8244H9.67315L7.19915 2.27179C7.02781 2.10041 6.93156 1.86799 6.93156 1.62565C6.93156 1.38331 7.02781 1.15089 7.19915 0.9795Z"
              fill="white" />
          </svg>
        </button>
      </div>
    </>
  );
});

export default InputSearch;