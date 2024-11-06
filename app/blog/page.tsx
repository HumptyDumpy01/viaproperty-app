// 'use client';

/*type BlogPageType = {
  // children: ReactNode;
}*/

import MainContainer from '@/components/Layout/Container/MainContainer';
import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import CallToActionBlock from '@/components/Layout/Cta/CallToActionBlock';
import BlogContent from '@/components/Blog/BlogContent';

export default function BlogPage(/*{  }: BlogPageType*/) {
  return (
    <>
      <MainContainer>
        <div className={`mt-8`}>
          <ViapropertyHeading customClasses={`mb-6`} headingSize={`lg`} label={`Explore countless articles`} />
          <Paragraph customClasses={`max-w-4xl`} text={(
            <>
              Explore countless articles on the latest trends in the real estate industry,
              from buying and selling to renting and investing. <HighlightText
              text={`This is the place to be for all things real estate.`} />
            </>
          )} />
          <BlogContent />
        </div>
      </MainContainer>
      <CallToActionBlock fullScreen rounded={false} />
    </>
  );
}
