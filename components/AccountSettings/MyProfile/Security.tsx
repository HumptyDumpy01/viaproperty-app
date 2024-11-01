// 'use client';

/*type SecurityType = {
  // children: ReactNode;
}*/

import HighlightText from '@/components/Typography/HighlightText';
import Paragraph from '@/components/Typography/Paragraph';
import SelectAndTooltip from '@/components/UI/Select/SelectAndTooltip';
import Button from '@/components/UI/Button/Button';

export default function Security(/*{  }: SecurityType*/) {
  return (
    <>
      <Paragraph customClasses={`mb-14`} text={(
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, <HighlightText
          text={`sed do eiusmod tempor incididunt ut labore et dolore`} />
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </>
      )} />

      <form className={`flex flex-col justify-center max-w-[422px] gap-12`}>
        <SelectAndTooltip tooltip={{
          customPosition: `-top-52 right-5`,
          content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet cum dolorem harum suscipit! Culpa, eligendi.`
        }} label={`Authentication Method`} select={{
          required: true,
          name: `authMethod`,
          id: `authMethod`,
          options: [
            { value: `password`, label: `Login via Password(Default)` },
            { value: `6-digit-code`, label: `Login via 6-digit code` },
            { value: `2FA`, label: `Login via 2FA(Recommended)` }
          ]
        }} />
        <div className={`flex justify-center flex-col gap-5`}>
          <Button btnVariant={`red`} mode={`lg`} label={`Save Changes`} />
          <Button type={`button`} btnVariant={`black`} mode={`lg`} label={`Cancel`} />
        </div>
      </form>
    </>
  );
}
