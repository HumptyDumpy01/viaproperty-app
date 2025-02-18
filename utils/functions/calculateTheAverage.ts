export function calculateTheAverage(arrOfNumbers: number[]) {
  const result = arrOfNumbers.reduce((a: number, b: number) => a + b, 0) / arrOfNumbers.length;
  return result || 0;
}
