import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import BigInput from '@/components/UI/Input/BigInput';
import Button from '@/components/UI/Button/Button';
import { FormEvent, useRef, useState } from 'react';

export default function DeleteAdvert() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries());
    // resetting the form
    currObject.reset();
    // output
    console.log(results);
  }

  return (
    <div className={`mt-9 max-w-screen-bp-1009`}>
      <ViapropertyHeading customClasses={`mb-8`} headingSize={`lg`}
                          label={`Warning! You are about to delete “Lorem Ipsum Dolor..” advert!`} />
      <Paragraph customClasses={`mb-6`} text={(
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, <HighlightText text={`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.`} />
        </>
      )} />

      <div>
        <form onSubmit={handleSubmit} className={`flex bp-620:items-center gap-5 flex-col bp-620:flex-row`}>
          <BigInput
            ref={inputRef}
            placeholder={`Type "DELETE THIS ADVERT"`}
            name={`deleteAdvert`}
            type={`text`}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div>
            <Button
              btnVariant={inputValue === `DELETE THIS ADVERT` ? `red` : `grey`}
              type={`submit`}
              label={`Delete Advert`}
              mode={`lg`}
              linearGradient
              disabled={inputValue !== `DELETE THIS ADVERT`}
            />
          </div>
        </form>
      </div>
    </div>
  );
}