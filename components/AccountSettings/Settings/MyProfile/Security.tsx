// 'use client';

/*type SecurityType = {
  // children: ReactNode;
}*/

import Paragraph from '@/components/Typography/Paragraph';
import SelectAndTooltip from '@/components/UI/Select/SelectAndTooltip';
import Button from '@/components/UI/Button/Button';

export default function Security(/*{  }: SecurityType*/) {
  return (
    <>
      <Paragraph customClasses={`mb-14 max-w-screen-md`} text={(
        <>
          Choose how you want to secure your account. You can log in using a password, a 6-digit verification code, or
          enable two-factor authentication (2FA) for an extra layer of security. Stay in control of your account&#39;s
          protection.
        </>
      )} />

      <form className={`flex flex-col justify-center max-w-[422px] gap-12`}>
        <SelectAndTooltip tooltip={{
          customPosition: `-top-52 right-5`,
          content: `By default, sign in with your password. Opt for a 6-digit code to skip the password—just confirm via email. Enable 2FA for extra security, requiring both your password and a 6-digit code at login.`
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
