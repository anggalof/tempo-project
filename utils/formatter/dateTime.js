export function getYear(d) {
  const date = new Date(d);
  return date.getFullYear();
}

export function formatDate(dateString) {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}
