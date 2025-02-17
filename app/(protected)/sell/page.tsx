'use client';

/*type SellPageType = {
  // children: ReactNode;
}*/

import SellInputContent from '@/components/Sell/SellInputContent';
import SellHeader from '@/components/Sell/SellHeader';
import CustomApolloProvider from '@/components/Layout/Provider/ApolloProvider';

export default function SellPage(/*{  }: SellPageType*/) {
  return (
    <CustomApolloProvider>
      <main className={`overflow-hidden mt-7 mb-12`}>
        <div className={`max-w-[1320px] mx-auto w-full px-3 bp-480:px-6`}>
          <SellHeader />
          <div className={`max-w-screen-xl`}>
            <SellInputContent />
          </div>
        </div>
      </main>
    </CustomApolloProvider>
  );
}
