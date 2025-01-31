// 'use client';
import AppSettingsIcons from '@/components/UI/Icon/AppSettingsIcons';
import AppSettingsLink from '@/components/Typography/AppSettingsLink';
import React from 'react';

type AppSettingsBadgeType = {
  icon: `currency` | `language` | `settings` | `logout` | `login`;
  links: {
    componentType: 'link' | 'button';
    active: boolean;
    label: string;
    href?: string;
    underline?: boolean;
  }[]
  onClick?: () => void;
  // children: ReactNode;
};

export default function AppSettingsBadge({ icon, links, onClick }: AppSettingsBadgeType) {
  const userAuthenticated = true;
  const logoutIconChosen = icon === `logout`;
  return (
    <>
      <div className={`flex items-center gap-3.5`}>
        <div className={(userAuthenticated && logoutIconChosen) ? `rotate-180` : ``}>
          <AppSettingsIcons icon={icon} />
        </div>
        <div className={`flex items-center gap-2`}>
          {links.map(function(link, index) {
            return (
              <AppSettingsLink
                key={index}
                onClick={onClick ? onClick : undefined}
                href={link.href}
                underline={link.underline}
                componentType={link.componentType}
                active={link.active} label={link.label} />
            );
          })}
        </div>
      </div>
    </>
  );
}
