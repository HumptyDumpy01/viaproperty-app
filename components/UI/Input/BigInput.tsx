import { ComponentPropsWithoutRef, forwardRef } from 'react';

type BigInputType = {
  placeholder: string;
  type: `text` | `password` | `email` | `number` | `tel`;
  required?: boolean;
  name: string;
} & ComponentPropsWithoutRef<'input'>;

const BigInput =
  forwardRef<HTMLInputElement,
    BigInputType>(({
                     placeholder,
                     type,
                     required = true,
                     name,
                     ...props
                   }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        name={name}
        required={required}
        type={type}
        className={`px-8 py-6 rounded-full bg-zinc-100 bp-620:w-[424px]
            focus:outline-none border-[3px] border-transparent focus:border-red-500
            transition-all duration-200 focus:bg-white placeholder-zinc-500`}
        placeholder={placeholder}
      />
    );
  });

BigInput.displayName = 'BigInput';

export default BigInput;