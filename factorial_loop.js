function factorial_loop(n) {
  let ans = 1;
  for (let i = 2; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
}
console.log('[factorial_loop|20000] ', factorial_loop(20000));

module.exports = factorial_loop;
