// 'use client';

/*type LatestPostsType = {
  // children: ReactNode;
}*/

import HeadingAndLink from '@/components/UI/Link/HeadingAndLink';
import CardPost from '@/components/UI/Card/CardPost';
import PostImg1 from '@/assets/home/latest-posts/post-1.png';
import PostImg2 from '@/assets/home/latest-posts/post-2.png';
import PostImg3 from '@/assets/home/latest-posts/post-3.png';
import PostImg4 from '@/assets/home/latest-posts/post-4.png';
import React from 'react';

export default function LatestPosts(/*{  }: LatestPostsType*/) {
  return (
    <>
      <section>
        <div className={`max-w-7xl mx-auto w-full`}>
          <HeadingAndLink heading={`Latest Posts`} headingSpan={`latest viaproperty news`} linkLabel={`explore`}
                          linkHref={`/blog`} />
          <div className={`flex gap-9 overflow-x-auto pb-6`}>
            <CardPost href={`/blog/1`} srcImg={PostImg1} paragraphHighlighted={`Lorem ipsum dolor`}
                      paragraph={`consectetur adipiscing elit, sed do eiusmod tempor inci..`} altImg={`post-1`} />
            <CardPost href={`/blog/2`} srcImg={PostImg2} paragraphHighlighted={`Lorem ipsum dolor`}
                      paragraph={`consectetur adipiscing elit, sed do eiusmod tempor inci..`} altImg={`post-2`} />
            <CardPost href={`/blog/3`} srcImg={PostImg3} paragraphHighlighted={`Lorem ipsum dolor`}
                      paragraph={`consectetur adipiscing elit, sed do eiusmod tempor inci..`} altImg={`post-3`} />
            <CardPost href={`/blog/4`} srcImg={PostImg4} paragraphHighlighted={`Lorem ipsum dolor`}
                      paragraph={`consectetur adipiscing elit, sed do eiusmod tempor inci..`} altImg={`post-4`} />
            <CardPost type={`view-more`} href={`/blog/4`} srcImg={PostImg4} paragraphHighlighted={`Lorem ipsum dolor`}
                      paragraph={`consectetur adipiscing elit, sed do eiusmod tempor inci..`} altImg={`post-4`} />
          </div>
        </div>
      </section>
    </>
  );
}
