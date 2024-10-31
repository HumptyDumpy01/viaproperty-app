export function scrollIntoViewFunc(selector: string) {
  const sellHeading = document.querySelector(`${selector}`);
  if (sellHeading) {
    sellHeading.scrollIntoView({ behavior: `smooth` });
  }
  return;
}
