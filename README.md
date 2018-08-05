test-babel-plugin-istanbul
==============================================================================

A sample code to demonstrate that usage of `babel-plugin-istanbul`.

On using `babel-plugin-istanbul` no test coverage is happening.

## Steps to reproduce:

```
$ git clone git@github.com:sarbbottam/test-babel-plugin-istanbul.git
$ cd test-babel-plugin-istanbul
$ npm install
$ npm run test:plugin

```

```
$ NODE_ENV=test nyc --reporter=text --reporter=lcov mocha --require babel-register test/*.test.js
Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills


  <Counter />
    ✓ renders (38ms)


  1 passing (49ms)

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |        0 |        0 |        0 |        0 |                   |
----------|----------|----------|----------|----------|-------------------|
```
---

However, `npm test` generates the test coverage but does not cover the constructor.

```
$ nyc --reporter=text --reporter=lcov mocha --require babel-register test/*.test.js
Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills


  <Counter />
    ✓ renders (46ms)


  1 passing (87ms)

------------|----------|----------|----------|----------|-------------------|
File        |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------|----------|----------|----------|----------|-------------------|
All files   |      100 |       50 |      100 |      100 |                   |
 counter.js |      100 |       50 |      100 |      100 |                 4 |
------------|----------|----------|----------|----------|-------------------|

