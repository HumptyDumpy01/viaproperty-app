// 'use client';

/*type EditPropertyAdvertType = {
  // children: ReactNode;
}*/

import SellForms from '@/components/Sell/SellForms';
import MainContainer from '@/components/Layout/Container/MainContainer';

export default function EditPropertyAdvert(/*{  }: EditPropertyAdvertType*/) {
  return (
    <MainContainer>
      <div className={`mt-8`}>
        <SellForms mode={`editCurrentAdvert`} />
      </div>
    </MainContainer>
  );
}
