export function sortArrayByNewestDate(array: any[]): any[] {
  return [...array].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}
