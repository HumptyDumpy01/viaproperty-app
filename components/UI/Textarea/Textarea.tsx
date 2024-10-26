// 'use client';

type TextareaType = {
  minLength?: number;
  maxLength?: number;
  width?: number;
  height?: string;
  name: string;
  // children: ReactNode;
}

export default function Textarea({ minLength = 1, maxLength = 700, width, height, name }: TextareaType) {
  return (
    <>
      <textarea
        className={`w-[${width}px] ${height ? `h-${height}` : `h-20`}  border border-zinc-200 rounded-md p-4 mb-2 transition-all duration-300`}
        placeholder={`Your Comment`} required minLength={1} maxLength={700} name={name} />
    </>
  );
}
