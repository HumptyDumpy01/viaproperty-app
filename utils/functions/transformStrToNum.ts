export function transformStrToNum(string: string): number {
  const result = Number(string.replaceAll(`,`, ``));
  return result;
}