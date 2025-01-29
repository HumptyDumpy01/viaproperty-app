// 'use client';

type TextareaType = {
  minLength?: number;
  maxLength?: number;
  widthClass?: string;
  height?: string;
  name: string;
  disabled?: boolean;
  // children: ReactNode;
}

export default function
  Textarea({
             minLength = 1,
             maxLength = 700,
             widthClass,
             height,
             name,
             disabled = false
           }: TextareaType) {
  return (
    <>
      <textarea
        disabled={disabled}
        className={`${widthClass} ${height ? `h-${height}` : `h-20`} border border-zinc-200 rounded-md p-4 mb-2 transition-all duration-300
        disabled:bg-zinc-100 disabled:animate-pulse`}
        placeholder={`Your Comment`} required minLength={minLength} maxLength={maxLength} name={name} />
    </>
  );
}
