// 'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkType = {
  label: string;
  path: string;
  customFontSizeDefault?: string;
  customFontSizeActive?: string;
  isActive?: boolean;
  // children: ReactNode;
}

export default function NavLink({
                                  label, path, customFontSizeDefault = `text-[15px]`,
                                  customFontSizeActive = `text-[17px]`, isActive
                                }: NavLinkType) {

  const defaultStyles = `${customFontSizeDefault} font-semibold text-zinc-500 transition-all duration-200 hover:text-zinc-800`;
  const activeStyles = `${customFontSizeActive} font-bold bg-clip-text text-transparent bg-linear-main-red`;
  const currentPath = usePathname();
  const type = isActive || currentPath === path ? `active` : `default`;

  return (
    <div className={`flex gap-1 flex-col`}>
      <Link href={path} className={type === `default` ? defaultStyles : activeStyles}>{label}</Link>
    </div>
  );
}