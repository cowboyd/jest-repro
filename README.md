## Jest Reproduction

It appears that libraries that place anonymous `Symbol`s onto things
like `Object.prototype` or `Number.prototype` break when running in
Jest.

It appears that the value of `Object.prototype` is different from when
a module is loaded, and when it is used.

The code in
[tests/functor-symbol-on-object-prototype.test.js](tests/functor-symbol-on-object-prototype.test.js)
works in Node, Browser, and also when using mocha.


## Run Tests
```
$ yarn
$ yarn test
```
