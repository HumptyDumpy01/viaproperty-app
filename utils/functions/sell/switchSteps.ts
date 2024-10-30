import { activeStateType } from '@/components/Sell/SellInputContent';

export function switchSteps(step: string, setActiveState: (prevState: activeStateType) => void) {
  switch (step) {
    case `stepOne`:
      // @ts-ignore
      setActiveState(prevState => ({
        ...prevState,
        stepOne: `active`,
        stepTwo: `disabled`,
        stepThree: `disabled`,
        stepFour: `disabled`,
        finishingSteps: `disabled`
      }));
      break;
    case `stepTwo`:
      // @ts-ignore
      setActiveState(prevState => ({
        ...prevState,
        stepOne: `completed`,
        stepTwo: `active`,
        stepThree: `disabled`,
        stepFour: `disabled`,
        finishingSteps: `disabled`
      }));
      break;
    case `stepThree`:
      // @ts-ignore
      setActiveState(prevState => ({
        ...prevState,
        stepOne: `completed`,
        stepTwo: `completed`,
        stepThree: `active`,
        stepFour: `disabled`,
        finishingSteps: `disabled`
      }));
      break;
    case `stepFour`:
      // @ts-ignore
      setActiveState(prevState => ({
        ...prevState,
        stepOne: `completed`,
        stepTwo: `completed`,
        stepThree: `completed`,
        stepFour: `active`,
        finishingSteps: `disabled`
      }));
      break;
    case `finishingSteps`:
      // @ts-ignore
      setActiveState(prevState => ({
        ...prevState,
        stepOne: `completed`,
        stepTwo: `completed`,
        stepThree: `completed`,
        stepFour: `completed`,
        finishingSteps: `active`
      }));
      break;
  }
}
