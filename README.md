# LibFree an experiment for using Iterables and :: operator

A simple iterator library for Javascript meant for exploration

Inspired by [experimental ES7syntax](https://github.com/zenparsing/es-function-bind)
proposed by Kevin Smith (@zenparsing)

* Uses ES6 via Babel
* Expect (https://github.com/mjackson/expect)

Installation:

```
git clone git@github.com:dax70/libfree.git
cd libfree
npm install
```

Run tests
```
npm test
```

There has been a proposal for ES7 (EcmaScript 2016) for function binding syntax for a while.

Here  is an example from the proposal and using an iterator library as an example.

```
/* ES7 */
import { map, takeWhile, forEach } from "iterlib";

getPlayers()
::map(x => x.character())
::takeWhile(x => x.strength > 100)
::forEach(x => console.log(x));
```
As you may notice, in this case it enables a now common pattern in Javascript thanks to jQuery, namely the Fluent Interface, but more on that later.

Development:

* Build once: `npm run webpack`
* Run dev server: `npm start`
    * Web page: http://localhost:8080/
    * Keep the console open to see errors and warnings
