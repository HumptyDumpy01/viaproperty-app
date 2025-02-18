export function formatCurrency(value: string, locale: string = 'en-US', currency: string = 'USD'): string {
  const numberValue = parseFloat(value);
  if (isNaN(numberValue)) {
    return value;
  }

  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(numberValue);
}