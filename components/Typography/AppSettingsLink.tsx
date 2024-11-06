// 'use client';

type AppSettingsLinkType = {
  label: string;
  active: boolean;
  componentType: 'link' | 'button';
  href?: string;
  underline?: boolean;
  // children: ReactNode;
}

export default function
  AppSettingsLink({
                    label,
                    active,
                    componentType,
                    href = `#`,
                    underline = true
                  }: AppSettingsLinkType) {
  const underlineStyles = underline ? `border-b-2 border-b-red-500` : ``;
  const activeStyles = `bg-clip-text text-transparent bg-linear-main-red font-bold ${underlineStyles}`;
  const inactiveStyles = `text-zinc-400`;
  const defaultStyles = `border-2 border-transparent w-fit cursor-pointer transition-all duration-300`;
  return (
    <>
      {componentType === 'button' && (
        <button
          className={`${defaultStyles} ${active ? activeStyles : inactiveStyles}`}>{label}</button>
      )}
      {componentType === 'link' && (
        <a href={href}
           className={`${defaultStyles} ${active ? activeStyles : inactiveStyles}`}>{label}</a>
      )}
    </>
  );
}