export function formatDate(dateVar: string): string {
  const date = new Date(dateVar);
  const month = date.toLocaleString(`default`, { month: `long` });
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedDate = `${month} ${year}, ${day} at ${hours}:${minutes}`;
  return formattedDate;
}