export function formatNumber(num) {
  return Math.round(num * 10) % 10 === 0 ? num.toFixed(1) : num.toFixed(1).replace(/\.0$/, '');
}