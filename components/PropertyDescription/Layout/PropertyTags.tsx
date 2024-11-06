// 'use client';

import { PropertyTagsEnum } from '@/utils/enums/PropertyTags';
import BadgeType from '@/components/UI/Badge/BadgeType';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import RatingBadge from '@/components/UI/Badge/RatingBadge';
import StarIcon from '@/components/UI/Icon/StarIcon';
import { BlogTagsEnum } from '@/utils/enums/BlogTags';

type PropertyTagsType = {
  tags: PropertyTagsEnum[] | BlogTagsEnum[];
  rating?: number;
  visibility?: {
    shareIcon?: boolean;
    heartIcon?: boolean;
  }
  // children: ReactNode;
}

export default function
  PropertyTags({
                 tags,
                 rating,
                 visibility = { shareIcon: true, heartIcon: true }
               }: PropertyTagsType) {
  return (
    <>
      <div className={`mb-5 mt-3 flex flex-row items-center justify-between gap-y-3 flex-wrap`}>
        <div className={`flex gap-3 items-center mt-3 ml-2 overflow-x-auto scrollbar-thin`}>
          {rating && (
            <div className={`mr-4 flex items-center`}>
              <RatingBadge rating={rating} />
            </div>
          )}
          {tags.map(function(tag) {
            // capitalize the first letter of the tag
            const capitalizedTag = tag.charAt(0).toUpperCase() + tag.slice(1);
            return (
              <>
                <BadgeType text={capitalizedTag} />
              </>
            );
          })}
          <div className={`flex items-center gap-0.5`}>
            {rating && Array.from({ length: 5 }, (_, index) => {
              const starState = rating >= index + 1 ? `filled` : `empty`;
              return (
                <StarIcon key={index} size={`sm`} state={starState} />
              );
            })}
          </div>
        </div>
        <div className={`flex gap-6 items-center`}>
          {visibility.heartIcon && (
            <>
              <ViapropertyIcon icon={`heart`} />
            </>
          )}
          {visibility.shareIcon && (
            <>
              <ViapropertyIcon icon={`share`} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
