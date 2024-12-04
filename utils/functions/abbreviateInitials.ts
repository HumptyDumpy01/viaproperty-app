export function abbreviateInitials(initials: string): string {
  const abbrInitials = initials.split(' ').map((name: string) => name.charAt(0)).join('.');
  return abbrInitials;
}