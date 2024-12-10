'use client';

/*type CheckoutContactDetailsFormType = {
  // children: ReactNode;
}*/

import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import Button from '@/components/UI/Button/Button';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import React, { FormEvent, useState } from 'react';
import { checkoutDetailsSchema } from '@/utils/schemas/checkoutDetailsSchema';

export default function CheckoutContactDetailsForm(/*{  }: CheckoutContactDetailsFormType*/) {
  const [errorMessage, setErrorMessage] = useState<string>(`Please fill in all the required fields.`);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries()) as {
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
    };

    const validateSchema = checkoutDetailsSchema.safeParse(results);

    if (!validateSchema.success) {
      setErrorMessage(validateSchema.error.errors[0].message);
      return;
    }
    /* TODO: CREATE STRIPE CHECKOUT SESSION ON FULL SCREEN */

    // resetting the form
    currObject.reset();
    // output
    console.log(results);
  }

  return (
    <>
      {errorMessage && (
        <>
          <div className={` mt-10 mb-8`}>
            <ErrorMessage errorMessage={errorMessage} />
          </div>
        </>
      )}
      <form onSubmit={handleSubmit} className={`flex justify-center flex-col gap-8 mt-10`}>

        <div className={`flex items-center gap-11 flex-col bp-620:flex-row`}>
          <LabelAndInput
            labelStyle={`dark-blue`}
            label={`First Name`}
            inputType={`text`}
            name={`firstName`}
            customClassNames={``}
            required
            placeholder={`Your First Name`} />

          <LabelAndInput
            labelStyle={`dark-blue`}
            label={`Last Name`}
            inputType={`text`}
            name={`lastName`}
            customClassNames={``}
            required
            placeholder={`Your Last Name`} />
        </div>

        <div className={`flex items-center gap-11 flex-col bp-620:flex-row`}>
          <LabelAndInput
            labelStyle={`dark-blue`}
            label={`Email`}
            inputType={`email`}
            name={`email`}
            customClassNames={``}
            required
            placeholder={`Your Email Address`} />

          <LabelAndInput
            labelStyle={`dark-blue`}
            label={`Phone`}
            inputType={`tel`}
            name={`phoneNumber`}
            customClassNames={``}
            required
            placeholder={`Your Phone Number`} />
        </div>
        <div className={`mt-12`}>
          <Button linearGradient label={`Proceed to Payment`} />
        </div>
        <Paragraph text={(
          <>
            By clicking the button above, you agree to our <HighlightText
            text={`Terms & Conditions`} /> and <HighlightText
            text={`Privacy Policy`} />.
          </>
        )} />
      </form>
    </>
  );
}
