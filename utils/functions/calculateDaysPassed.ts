export const calculateDaysPassed = (createdAt: string): number => {
  const createdDate = new Date(createdAt);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - createdDate.getTime();
  return Math.floor(timeDifference / (1000 * 3600 * 24));
};