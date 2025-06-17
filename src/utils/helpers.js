export const getRelativeDaysAgo = (isoTimestamp) => {
  const now = new Date();
  const inputDate = new Date(isoTimestamp);

  // Calculate difference in milliseconds
  const diffInMs = now - inputDate;

  // Convert to full days
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays >= 2) {
    return `${diffInDays} days ago`;
  } else if (diffInDays === 1) {
    return `1 day ago`;
  } else {
    return `Today`;
  }
};
