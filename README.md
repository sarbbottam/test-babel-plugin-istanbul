test-babel-plugin-istanbul
==============================================================================

A sample code to demonstrate the usage of `babel-plugin-istanbul`.

Usage
---
```diff
//.babelrc
 {
   "presets": ["env", "react"],
+  "env": {
+    "test": {
+      "plugins": [ "istanbul" ]
+    }
+  }
 }
```

```diff
//package.json
+ },
+ "nyc": {
+   "require": [
+     "babel-register"
+   ],
+   "reporter": [
+     "lcov",
+     "text"
+   ],
+   "sourceMap": false,
+   "instrument": false
   }
 }
```

```sh
$ NODE_ENV=test nyc mocha test/*.test.js

<Counter />
    ✓ renders (56ms)


  1 passing (99ms)

------------|----------|----------|----------|----------|-------------------|
File        |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------|----------|----------|----------|----------|-------------------|
All files   |      100 |      100 |      100 |      100 |                   |
 counter.js |      100 |      100 |      100 |      100 |                   |
------------|----------|----------|----------|----------|-------------------|
```

Refer [Using Istanbul With ES2015+](https://istanbul.js.org/docs/tutorials/es2015/) for further details.
