// 'use client';

import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import Image, { StaticImageData } from 'next/image';
import { Tooltip } from '@mui/material';
import { ChangeEvent, useRef, useState } from 'react';
import MUIDialogConfirm from '@/components/UI/Dialog/MUIDialogConfirm';

type ImagePreviewType = {
  imgSrc: StaticImageData | null;
  index: number;
  // children: ReactNode;
}

export default function ImagePreview({ imgSrc, index }: ImagePreviewType) {
  const [dialogConfirmState, setDialogConfirmState] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  function handleFileExtraction(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleImageRemoval() {
    setImageSrc(() => ``);
    fileInputRef.current!.value = ``;
  }

  return (
    <>
      <MUIDialogConfirm handleConfirmDialog={handleImageRemoval} text={{
        heading: `You sure you want to remove this image?`,
        content: `Please confirm your action below.`
      }} state={{ open: dialogConfirmState, setOpen: setDialogConfirmState }} />
      <input ref={fileInputRef} onChange={handleFileExtraction} required={index < 3} type={`file`} id={`image_${index}`}
             className={`hidden`} />
      <div className={`w-28 h-28 overflow-hidden cursor-pointer transition-all duration-200
        hover:rotate-3 hover:scale-95`}>
        {imageSrc && (
          <Tooltip title={`Click to remove the image.`}>
            <Image onClick={() => setDialogConfirmState(() => true)} width={112} height={112} src={imageSrc}
                   alt={`Property Image ${index}`}
                   className={`object-cover w-full h-full rounded-2xl border border-transparent`} />
          </Tooltip>
        )}
        {!imgSrc && (
          <Tooltip arrow={true} title={`Click to select an image`}>
            <div onClick={() => fileInputRef.current?.click()}
                 className={`border-2 border-red-500 items-center justify-center w-full h-full rounded-2xl flex`}>
              <ViapropertyIcon icon={`logo`} />
            </div>
          </Tooltip>
        )}
      </div>
    </>
  );
}
