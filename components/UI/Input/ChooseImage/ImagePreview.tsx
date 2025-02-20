import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import Image from 'next/image';
import { Tooltip } from '@mui/material';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import MUIDialogConfirm from '@/components/UI/Dialog/MUIDialogConfirm';

export type FileBufferType = string | ArrayBuffer | null;

type ImagePreviewType = {
  index: number;
  onSave?: (newImage: FileBufferType, index: number) => void;
  onRemove?: (index: number) => void;
  imageSrc?: FileBufferType;
  // children: ReactNode;
}

export default function ImagePreview({ index, onSave, onRemove, imageSrc: initialImageSrc }: ImagePreviewType) {
  const [dialogConfirmState, setDialogConfirmState] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageSrc, setImageSrc] = useState<FileBufferType>(initialImageSrc || null);

  useEffect(() => {
    setImageSrc(initialImageSrc || null);
  }, [initialImageSrc]);

  function handleFileExtraction(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
        if (onSave) onSave(reader.result, index);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleImageRemoval() {
    setImageSrc(() => ``);
    fileInputRef.current!.value = ``;
    if (onRemove) onRemove(index);
  }

  return (
    <>
      <MUIDialogConfirm buttonLabels={{ affirmative: `Remove Image`, negative: `Cancel` }}
                        handleConfirmDialog={handleImageRemoval} text={{
        heading: `You sure you want to remove this image?`,
        content: `If you want to remove this particular image, please select "Remove Image" down below.`
      }} state={{ open: dialogConfirmState, setOpen: setDialogConfirmState }} />
      <input accept={'.png, .jpeg, .jpg'} ref={fileInputRef} onChange={handleFileExtraction} required={index < 3}
             type={`file`} id={`image_${index}`}
             className={`hidden`} />
      <div className={`w-28 h-28 overflow-hidden cursor-pointer transition-all duration-200
        hover:rotate-3 hover:scale-95`}>
        {imageSrc && (
          <Tooltip title={`Click to remove the image.`}>
            {/*// @ts-ignore*/}
            <Image onClick={() => setDialogConfirmState(() => true)} width={112} height={112} src={imageSrc}
                   alt={`Property Image ${index}`}
                   className={`object-cover w-full h-full rounded-2xl border border-transparent`} />
          </Tooltip>
        )}
        {!imageSrc && (
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