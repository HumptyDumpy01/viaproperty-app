import { activeStateType } from '@/components/Sell/SellInputContent';

export function setActiveStateFunc(activeState: activeStateType, setActiveState: (prevState: activeStateType) => void) {
  // @ts-ignore
  setActiveState(prevState => ({
    ...prevState, ...activeState
  }));
}
