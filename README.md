# Factorial (recursive)

You can find simple recursive function to calculate factorial in [factorial.js](https://github.com/raghavgarg1257/factorial_js/blob/master/factorial.js)

But it will fail with number like `20000`, and will give an error `Maximum call stack size exceeded`, because we are keep on stacking new function call in our `call_stack` and it has limited memory.

Now simple solution would be to use `for loop` to actually make the computation. You find the code in [factorial_loop.js](https://github.com/raghavgarg1257/factorial_js/blob/master/factorial_loop.js)

But say because of some constraint you are not allowed to use that and you have to use recursive function, what changes you would do to it?

We can defer(async) it and rather than filling up our `call_stack` we can fill our `callback_queue`. We can do this using either callback(through `setTimeout`) or `Promise`.

**Callback (setTimeout):** You find the code in [factorial_timeout.js](https://github.com/raghavgarg1257/factorial_js/blob/master/factorial_timeout.js)

**Promise:** You find the code in [factorial_promise.js](https://github.com/raghavgarg1257/factorial_js/blob/master/factorial_promise.js)


### To run
```
git clone git@github.com:raghavgarg1257/factorial_js.git
cd factorial_js
node index.js
```
