// 'use client';

type CloseIconType = {
  strokeColor?: string;
  width?: number;
  height?: number;
  // children: ReactNode;
}

export default function CloseIcon({ strokeColor = `#222`, width = 22, height = 22 }: CloseIconType) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
        <path d="M20 20L4 4M20 4L4 20" stroke={strokeColor} stroke-width="2" stroke-linecap="round" />
      </svg>
    </>
  );
}
