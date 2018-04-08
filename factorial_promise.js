function factorial_promise(n) {
  if (n === 0) return Promise.resolve(1);
  return Promise.resolve(n).then(n => factorial_promise(n-1)).then(a => a * n);
}
factorial_promise(20000).then(a => console.log('[factorial_promise|20000] ', a))

module.exports = factorial_promise;
