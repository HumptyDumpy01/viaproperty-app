// 'use client';

import { PropertyTagsEnum } from '@/utils/enums/PropertyTags';
import BadgeType from '@/components/UI/Badge/BadgeType';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';

type PropertyTagsType = {
  tags: PropertyTagsEnum[];
  // children: ReactNode;
}

export default function PropertyTags({ tags }: PropertyTagsType) {
  return (
    <>
      <div className={`mb-5 mt-3 flex items-center justify-between`}>
        <div className={`flex gap-3 mt-3 ml-2`}>
          {tags.map(function(tag) {
            // capitalize the first letter of the tag
            const capitalizedTag = tag.charAt(0).toUpperCase() + tag.slice(1);
            return (
              <>
                <BadgeType text={capitalizedTag} />
              </>
            );
          })}
        </div>
        <div className={`flex gap-6 items-center`}>
          <ViapropertyIcon icon={`heart`} />
          <ViapropertyIcon icon={`share`} />
        </div>
      </div>
    </>
  );
}
