import { Dispatch, SetStateAction } from 'react';
import ImagePreview, { FileBufferType } from '@/components/UI/Input/ChooseImage/ImagePreview';

type ChooseFeatureImages = {
  max: number;
  min: number;
  required?: boolean;
  imagesState: {
    images: ImagesArrayType[],
    setImages: Dispatch<SetStateAction<ImagesArrayType[]>>
  }
  // children: ReactNode;
}

export type ImagesArrayType = {
  index: number;
  src: FileBufferType;
}

export default function ChooseFeatureImages({ max, min, imagesState, required = false }: ChooseFeatureImages) {
  const { images, setImages } = imagesState;

  function handleOnSave(newImage: FileBufferType, index: number) {
    setImages((prevImages) => {
      const newImages = prevImages?.length ? [...prevImages] : [];
      newImages.push({ index: index, src: newImage });
      const result = newImages.filter((image) => image.src);
      return result;
    });
  }

  function handleOnRemove(index: number) {
    setImages((prevImages) => {
      const newImages = prevImages?.length ? [...prevImages] : [];
      const result = newImages.filter((image) => image.index !== index);
      return result;
    });
  }

  return (
    <>
      <div className={`flex flex-col justify-center gap-4`}>
        <label htmlFor={`images`} className={`text-zinc-700 font-semibold`}>Choose images (Min {min} ,Max {max})
          {required ? `*` : ``}</label>
        <div className={`flex gap-4 items-center overflow-x-auto scrollbar-thin max-w-3xl`}>
          {Array.from({ length: max }).map((_, index) => (
            <div key={index}>
              <ImagePreview
                required={false}
                onRemove={handleOnRemove}
                onSave={handleOnSave}
                index={index}
                key={index}
                imageSrc={images.find(image => image.index === index)?.src || null}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}