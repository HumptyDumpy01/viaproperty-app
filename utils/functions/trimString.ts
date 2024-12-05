export function trimString(dataString: string, trimIfLengthIs: number): string {
  const trimmedText = dataString.length > trimIfLengthIs ? dataString.slice(0, trimIfLengthIs) + `..` : dataString;
  return trimmedText;
}