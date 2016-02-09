# LibFree is an experiment in Tranducers using Iterables and :: operator

A simple iterator library for JavaScript meant for exploration of Transducers.

Inspired by [experimental ES7syntax](https://github.com/zenparsing/es-function-bind)
proposed by Kevin Smith (@zenparsing).

Also heavily influenced by [C# Linq](https://msdn.microsoft.com/en-us/library/bb397906.aspx)

Here is a good explanation on Transducers using JavaScript, though the approach is very different.
[Understanding Transducers in JavaScript](https://medium.com/@roman01la/understanding-transducers-in-javascript-3500d3bd9624#.nwk1l0bb2)

* Uses ES6 via Babel
* Expect (https://github.com/mjackson/expect)

Installation:

```
git clone git@github.com:dax70/libfree.git
cd libfree
npm install
```

Run tests to see API usage and working code.
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
