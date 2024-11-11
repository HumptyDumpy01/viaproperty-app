export function trimString(dataString: string, trimIfLengthIs: number): string {
  const trimmedTitle = dataString.length > trimIfLengthIs ? dataString.slice(0, trimIfLengthIs) + `..` : dataString;
  return trimmedTitle;
}