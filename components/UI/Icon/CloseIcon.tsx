// 'use client';

type CloseIconType = {
  strokeColor?: string;
  width?: number;
  height?: number;
  variant?: `default` | `small`;
  // children: ReactNode;
}

export default function
  CloseIcon({
              strokeColor = `#222`,
              width = 22,
              height = 22,
              variant = `default`
            }: CloseIconType) {
  return (
    <>
      {variant === `default` && (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
            <path d="M20 20L4 4M20 4L4 20" stroke={strokeColor} stroke-width="2" stroke-linecap="round" />
          </svg>
        </>
      )}
      {variant === `small` && (
        <>
          <svg className={`cursor-pointer`} xmlns="http://www.w3.org/2000/svg" width={width} height={height}
               viewBox="0 0 16 16"
               fill="none">
            <path
              d="M8 0C3.581 0 0 3.582 0 8C0 12.418 3.581 16 8 16C12.419 16 16 12.418 16 8C16 3.582 12.419 0 8 0ZM11.707 10.293C11.8945 10.4805 11.9998 10.7348 11.9998 11C11.9998 11.2652 11.8945 11.5195 11.707 11.707C11.5195 11.8945 11.2652 11.9998 11 11.9998C10.7348 11.9998 10.4805 11.8945 10.293 11.707L8 9.414L5.707 11.707C5.61435 11.8002 5.50419 11.8741 5.38285 11.9246C5.26152 11.9751 5.13141 12.001 5 12.001C4.86859 12.001 4.73848 11.9751 4.61715 11.9246C4.49581 11.8741 4.38565 11.8002 4.293 11.707C4.10553 11.5195 4.00021 11.2652 4.00021 11C4.00021 10.7348 4.10553 10.4805 4.293 10.293L6.586 8L4.293 5.707C4.10549 5.51949 4.00015 5.26518 4.00015 5C4.00015 4.73482 4.10549 4.48051 4.293 4.293C4.48051 4.10549 4.73482 4.00015 5 4.00015C5.26518 4.00015 5.51949 4.10549 5.707 4.293L8 6.586L10.293 4.293C10.4805 4.10549 10.7348 4.00015 11 4.00015C11.2652 4.00015 11.5195 4.10549 11.707 4.293C11.8945 4.48051 11.9998 4.73482 11.9998 5C11.9998 5.26518 11.8945 5.51949 11.707 5.707L9.414 8L11.707 10.293Z"
              fill={strokeColor} />
          </svg>
        </>
      )}

    </>
  );
}
