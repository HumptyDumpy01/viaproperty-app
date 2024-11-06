// 'use client';

type AppSettingsBadgeType = {
  icon: `currency` | `language` | `settings` | `logout` | `login`;
  links: {
    componentType: 'link' | 'button';
    active: boolean;
    label: string;
    href?: string;
    underline?: boolean;
  }[]
  // children: ReactNode;
}

import AppSettingsIcons from '@/components/UI/Icon/AppSettingsIcons';
import AppSettingsLink from '@/components/Typography/AppSettingsLink';
import React from 'react';

export default function AppSettingsBadge({ icon, links }: AppSettingsBadgeType) {
  return (
    <>
      <div className={`flex items-center gap-3.5`}>
        <div>
          <AppSettingsIcons icon={icon} />
        </div>
        <div className={`flex items-center gap-2`}>
          {links.map(function(link) {
            return (
              <>
                <AppSettingsLink href={link.href} underline={link.underline} componentType={link.componentType}
                                 active={link.active} label={link.label} />
              </>
            );
          })}

        </div>
      </div>
    </>
  );
}
