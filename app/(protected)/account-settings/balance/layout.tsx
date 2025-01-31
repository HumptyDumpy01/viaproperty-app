import Balance from '@/components/AccountSettings/Balance/Balance';
import { ReactNode } from 'react';

type BalanceType = {
  children: ReactNode;
}


export default function BalancePage({ children }: BalanceType) {
  return (
    <Balance>{children}</Balance>
  );
}
