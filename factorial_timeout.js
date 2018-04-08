let ans = 1;
function factorial_timeout(n) {
  setTimeout(function () {
    if (n === 0) {
      console.log('[factorial_timeout|20000] ', ans);
      return 0;
    }
    ans = ans * n-1;
    factorial_timeout(n-1);
    return 0;
  }, 0);
}
factorial_timeout(20000);

module.exports = factorial_timeout;
