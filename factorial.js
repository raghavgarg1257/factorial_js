function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n-1);
}
console.log('[factorial|20] ', factorial(20));
try {
  console.log('[factorial|200000] ', factorial(20000));
} catch (e) {
  console.log('[factorial|200000] ', e.message);
}

module.exports = factorial;
