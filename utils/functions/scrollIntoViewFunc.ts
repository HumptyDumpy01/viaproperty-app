export function scrollIntoViewFunc(selector: string, top?: boolean): void {

  if (top) {
    // scroll to the top of the screen
    if (window)
      window.scrollTo({ top: 0, behavior: `smooth` });
    return;
  }

  const sellHeading = document.querySelector(`${selector}`);
  if (sellHeading) {
    sellHeading.scrollIntoView({ behavior: `smooth` });
  }
  return;
}
