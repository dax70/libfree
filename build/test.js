/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _pull = __webpack_require__(159);
	
	var _pull2 = _interopRequireDefault(_pull);
	
	var _pulloperators = __webpack_require__(183);
	
	var _pulloperators2 = _interopRequireDefault(_pulloperators);
	
	var _utils = __webpack_require__(185);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _pull2.default)();
	console.log('\r');
	(0, _pulloperators2.default)();
	console.log('\r');
	(0, _utils2.default)();

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = runTests;
	
	var _expect = __webpack_require__(160);
	
	var _expect2 = _interopRequireDefault(_expect);
	
	var _iter = __webpack_require__(181);
	
	var _iter2 = _interopRequireDefault(_iter);
	
	var _pull = __webpack_require__(182);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var arr = [1, 2];
	
	var testArrayIterator = function testArrayIterator() {
	  console.log('testArrayIterable');
	
	  var iter = new _iter.ArrayIterator(arr);
	  var first = iter.next();
	  var second = iter.next();
	  var third = iter.next();
	
	  (0, _expect2.default)(first.value).toEqual(1);
	  (0, _expect2.default)(second.value).toEqual(2);
	  (0, _expect2.default)(third.value).toEqual(undefined);
	};
	
	var testIterator = function testIterator() {
	  console.log('testIterator');
	
	  var iterator = arr[Symbol.iterator]();
	  var iter = new _iter.Iterator(iterator);
	  var first = iter.next();
	  var second = iter.next();
	  var third = iter.next();
	
	  (0, _expect2.default)(first.value).toEqual(1);
	  (0, _expect2.default)(second.value).toEqual(2);
	  (0, _expect2.default)(third.value).toEqual(undefined);
	};
	
	var testIterableWrapper = function testIterableWrapper() {
	  console.log('testIterableWrapper');
	
	  var wrapper = new _iter.IterableWrapper(arr);
	  var iter = wrapper[Symbol.iterator]();
	  var first = iter.next();
	  var second = iter.next();
	  var third = iter.next();
	
	  (0, _expect2.default)(first.value).toEqual(1);
	  (0, _expect2.default)(second.value).toEqual(2);
	  (0, _expect2.default)(third.value).toEqual(undefined);
	  (0, _expect2.default)(third.done).toEqual(true);
	};
	
	var testIterable = function testIterable() {
	  console.log('testIterable');
	
	  var innerIter = (0, _iter.getIterator)(arr);
	
	  var factory = function factory() {
	    return innerIter;
	  };
	
	  var wrapper = new _iter2.default(factory);
	  var iter = wrapper[Symbol.iterator]();
	  var first = iter.next();
	  var second = iter.next();
	  var third = iter.next();
	
	  (0, _expect2.default)(first.value).toEqual(1);
	  (0, _expect2.default)(second.value).toEqual(2);
	  (0, _expect2.default)(third.value).toEqual(undefined);
	  (0, _expect2.default)(third.done).toEqual(true);
	};
	
	var testFilterIterator = function testFilterIterator() {
	  console.log('testFilterIterator');
	
	  var arrLong = [1, 2, 3, 4, 5];
	
	  var arrayIter = arrLong[Symbol.iterator]();
	
	  var iter = new _iter.FilterIterator(arrayIter, function (x) {
	    return x < 3;
	  });
	  var first = iter.next();
	  var second = iter.next();
	  var third = iter.next();
	
	  (0, _expect2.default)(first.value).toEqual(1);
	  (0, _expect2.default)(second.value).toEqual(2);
	  (0, _expect2.default)(third.value).toEqual(undefined);
	  (0, _expect2.default)(third.done).toEqual(true);
	};
	
	var testFilter = function testFilter() {
	  var _context;
	
	  console.log('testFilter');
	
	  var arrLong = [1, 2, 3, 4, 5];
	
	  var wrapper = (_context = new _iter.IterableWrapper(arrLong), _pull.filter).call(_context, function (x) {
	    return x < 3;
	  });
	
	  var iter = wrapper[Symbol.iterator]();
	  var first = iter.next();
	  var second = iter.next();
	  var third = iter.next();
	
	  (0, _expect2.default)(first.value).toEqual(1);
	  (0, _expect2.default)(second.value).toEqual(2);
	  (0, _expect2.default)(third.value).toEqual(undefined);
	  (0, _expect2.default)(third.done).toEqual(true);
	};
	
	var testFilter2 = function testFilter2() {
	  var _context2;
	
	  console.log('testFilter2');
	
	  var arrLong = [1, 2, 3, 4, 5];
	
	  var wrapper = (_context2 = new _iter.IterableWrapper(arrLong), _pull.filter).call(_context2, function (x) {
	    return x < 3;
	  });
	
	  var index = 1;
	
	  if (!(wrapper && typeof wrapper[Symbol.iterator] === 'function')) {
	    throw new TypeError('Expected wrapper to be iterable, got ' + (wrapper === null ? 'null' : (typeof wrapper === 'undefined' ? 'undefined' : _typeof(wrapper)) === 'object' && wrapper.constructor ? wrapper.constructor.name || '[Unknown Object]' : typeof wrapper === 'undefined' ? 'undefined' : _typeof(wrapper)));
	  }
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = wrapper[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var i = _step.value;
	
	      (0, _expect2.default)(i).toEqual(index++);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  (0, _expect2.default)(index).toEqual(3);
	};
	
	// Complext Filter
	var testFilter3 = function testFilter3() {
	  var _context3;
	
	  console.log('testFilter3');
	
	  var arrLong = [{
	    amount: 814.53,
	    date: "2012-02-02T05:00:00.000Z",
	    business: "Huel Group",
	    name: "Money Market Account 4068",
	    type: "deposit",
	    account: 66108624
	  }, {
	    amount: 58.39,
	    date: "2012-02-02T05:00:00.000Z",
	    business: "Torp and Sons",
	    name: "Investment Account 2394",
	    type: "payment",
	    account: 28305257
	  }, {
	    amount: 651.25,
	    date: "2012-02-02T05:00:00.000Z",
	    business: "Senger, Tromp and Boyle",
	    name: "Checking Account 8641",
	    type: "deposit",
	    account: 86801062
	  }];
	
	  var wrapper = (_context3 = new _iter.IterableWrapper(arrLong), _pull.filter).call(_context3, function (x) {
	    return x.amount > 500;
	  });
	
	  var count = 0;
	
	  if (!(wrapper && typeof wrapper[Symbol.iterator] === 'function')) {
	    throw new TypeError('Expected wrapper to be iterable, got ' + (wrapper === null ? 'null' : (typeof wrapper === 'undefined' ? 'undefined' : _typeof(wrapper)) === 'object' && wrapper.constructor ? wrapper.constructor.name || '[Unknown Object]' : typeof wrapper === 'undefined' ? 'undefined' : _typeof(wrapper)));
	  }
	
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;
	
	  try {
	    for (var _iterator2 = wrapper[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var i = _step2.value;
	
	      count++;
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }
	
	  var iter = wrapper[Symbol.iterator]();
	  var first = iter.next().value;
	  var second = iter.next().value;
	
	  (0, _expect2.default)(count).toEqual(2);
	  (0, _expect2.default)('deposit').toEqual(first.type);
	  (0, _expect2.default)('deposit').toEqual(second.type);
	};
	
	var testMultipleIterators = function testMultipleIterators() {
	  var _context4;
	
	  console.log('testMultipleIterators');
	
	  var arrLong = [1, 2, 3, 4, 5];
	
	  var wrapper = (_context4 = new _iter.IterableWrapper(arrLong), _pull.filter).call(_context4, function (x) {
	    return x <= 3;
	  });
	
	  var iter = wrapper[Symbol.iterator]();
	  var iter2 = wrapper[Symbol.iterator]();
	
	  var result = iter.next();
	  var result2 = iter2.next();
	
	  while (!result.done) {
	    // console.log(result.value);
	    (0, _expect2.default)(result.value).toEqual(result2.value);
	
	    result = iter.next();
	    result2 = iter2.next();
	  }
	};
	
	var testReduce = function testReduce() {
	  var _context5;
	
	  console.log('testReduce');
	
	  var arrLong = [1, 2, 3, 4, 5];
	
	  var accumulatorFunc = function accumulatorFunc(prev, curr, index) {
	    //console.log(prev, curr, index);
	    return prev + curr;
	  };
	
	  var wrapper = (_context5 = new _iter.IterableWrapper(arrLong), _pull.reduce).call(_context5, accumulatorFunc);
	
	  var native = arrLong.reduce(accumulatorFunc);
	
	  // console.log(`Native is ${native}`);
	  // console.log(`Wrapper was ${wrapper}`);
	
	  (0, _expect2.default)(native).toEqual(wrapper);
	};
	
	function runTests() {
	  testArrayIterator();
	  testIterator();
	  testIterableWrapper();
	  testIterable();
	  testFilterIterator();
	  testFilter();
	  testFilter2();
	  testFilter3();
	  testMultipleIterators();
	  testReduce();
	
	  console.log('\r');
	  console.log('All pull tests passed.');
	}

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Expectation = __webpack_require__(161);
	
	var _Expectation2 = _interopRequireDefault(_Expectation);
	
	var _SpyUtils = __webpack_require__(178);
	
	var _assert = __webpack_require__(176);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _extend = __webpack_require__(180);
	
	var _extend2 = _interopRequireDefault(_extend);
	
	function expect(actual) {
	  return new _Expectation2['default'](actual);
	}
	
	expect.createSpy = _SpyUtils.createSpy;
	expect.spyOn = _SpyUtils.spyOn;
	expect.isSpy = _SpyUtils.isSpy;
	expect.restoreSpies = _SpyUtils.restoreSpies;
	expect.assert = _assert2['default'];
	expect.extend = _extend2['default'];
	
	exports['default'] = expect;
	module.exports = exports['default'];

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _isEqual = __webpack_require__(162);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _isRegex = __webpack_require__(171);
	
	var _isRegex2 = _interopRequireDefault(_isRegex);
	
	var _assert = __webpack_require__(176);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _SpyUtils = __webpack_require__(178);
	
	var _TestUtils = __webpack_require__(179);
	
	/**
	 * An Expectation is a wrapper around an assertion that allows it to be written
	 * in a more natural style, without the need to remember the order of arguments.
	 * This helps prevent you from making mistakes when writing tests.
	 */
	
	var Expectation = (function () {
	  function Expectation(actual) {
	    _classCallCheck(this, Expectation);
	
	    this.actual = actual;
	
	    if (_TestUtils.isFunction(actual)) {
	      this.context = null;
	      this.args = [];
	    }
	  }
	
	  Expectation.prototype.toExist = function toExist(message) {
	    _assert2['default'](this.actual, message || 'Expected %s to exist', this.actual);
	
	    return this;
	  };
	
	  Expectation.prototype.toNotExist = function toNotExist(message) {
	    _assert2['default'](!this.actual, message || 'Expected %s to not exist', this.actual);
	
	    return this;
	  };
	
	  Expectation.prototype.toBe = function toBe(value, message) {
	    _assert2['default'](this.actual === value, message || 'Expected %s to be %s', this.actual, value);
	
	    return this;
	  };
	
	  Expectation.prototype.toNotBe = function toNotBe(value, message) {
	    _assert2['default'](this.actual !== value, message || 'Expected %s to not be %s', this.actual, value);
	
	    return this;
	  };
	
	  Expectation.prototype.toEqual = function toEqual(value, message) {
	    try {
	      _assert2['default'](_isEqual2['default'](this.actual, value), message || 'Expected %s to equal %s', this.actual, value);
	    } catch (e) {
	      // These attributes are consumed by Mocha to produce a diff output.
	      e.showDiff = true;
	      e.actual = this.actual;
	      e.expected = value;
	      throw e;
	    }
	
	    return this;
	  };
	
	  Expectation.prototype.toNotEqual = function toNotEqual(value, message) {
	    _assert2['default'](!_isEqual2['default'](this.actual, value), message || 'Expected %s to not equal %s', this.actual, value);
	
	    return this;
	  };
	
	  Expectation.prototype.toThrow = function toThrow(value, message) {
	    _assert2['default'](_TestUtils.isFunction(this.actual), 'The "actual" argument in expect(actual).toThrow() must be a function, %s was given', this.actual);
	
	    _assert2['default'](_TestUtils.functionThrows(this.actual, this.context, this.args, value), message || 'Expected %s to throw %s', this.actual, value || 'an error');
	
	    return this;
	  };
	
	  Expectation.prototype.toNotThrow = function toNotThrow(value, message) {
	    _assert2['default'](_TestUtils.isFunction(this.actual), 'The "actual" argument in expect(actual).toNotThrow() must be a function, %s was given', this.actual);
	
	    _assert2['default'](!_TestUtils.functionThrows(this.actual, this.context, this.args, value), message || 'Expected %s to not throw %s', this.actual, value || 'an error');
	
	    return this;
	  };
	
	  Expectation.prototype.toBeA = function toBeA(value, message) {
	    _assert2['default'](_TestUtils.isFunction(value) || typeof value === 'string', 'The "value" argument in toBeA(value) must be a function or a string');
	
	    _assert2['default'](_TestUtils.isA(this.actual, value), message || 'Expected %s to be a %s', this.actual, value);
	
	    return this;
	  };
	
	  Expectation.prototype.toNotBeA = function toNotBeA(value, message) {
	    _assert2['default'](_TestUtils.isFunction(value) || typeof value === 'string', 'The "value" argument in toNotBeA(value) must be a function or a string');
	
	    _assert2['default'](!_TestUtils.isA(this.actual, value), message || 'Expected %s to be a %s', this.actual, value);
	
	    return this;
	  };
	
	  Expectation.prototype.toMatch = function toMatch(pattern, message) {
	    _assert2['default'](typeof this.actual === 'string', 'The "actual" argument in expect(actual).toMatch() must be a string');
	
	    _assert2['default'](_isRegex2['default'](pattern), 'The "value" argument in toMatch(value) must be a RegExp');
	
	    _assert2['default'](pattern.test(this.actual), message || 'Expected %s to match %s', this.actual, pattern);
	
	    return this;
	  };
	
	  Expectation.prototype.toNotMatch = function toNotMatch(pattern, message) {
	    _assert2['default'](typeof this.actual === 'string', 'The "actual" argument in expect(actual).toNotMatch() must be a string');
	
	    _assert2['default'](_isRegex2['default'](pattern), 'The "value" argument in toNotMatch(value) must be a RegExp');
	
	    _assert2['default'](!pattern.test(this.actual), message || 'Expected %s to not match %s', this.actual, pattern);
	
	    return this;
	  };
	
	  Expectation.prototype.toBeLessThan = function toBeLessThan(value, message) {
	    _assert2['default'](typeof this.actual === 'number', 'The "actual" argument in expect(actual).toBeLessThan() must be a number');
	
	    _assert2['default'](typeof value === 'number', 'The "value" argument in toBeLessThan(value) must be a number');
	
	    _assert2['default'](this.actual < value, message || 'Expected %s to be less than %s', this.actual, value);
	
	    return this;
	  };
	
	  Expectation.prototype.toBeGreaterThan = function toBeGreaterThan(value, message) {
	    _assert2['default'](typeof this.actual === 'number', 'The "actual" argument in expect(actual).toBeGreaterThan() must be a number');
	
	    _assert2['default'](typeof value === 'number', 'The "value" argument in toBeGreaterThan(value) must be a number');
	
	    _assert2['default'](this.actual > value, message || 'Expected %s to be greater than %s', this.actual, value);
	
	    return this;
	  };
	
	  Expectation.prototype.toInclude = function toInclude(value, compareValues, message) {
	    _assert2['default'](_TestUtils.isArray(this.actual) || typeof this.actual === 'string', 'The "actual" argument in expect(actual).toInclude() must be an array or a string');
	
	    if (typeof compareValues === 'string') {
	      message = compareValues;
	      compareValues = null;
	    }
	
	    message = message || 'Expected %s to include %s';
	
	    if (_TestUtils.isArray(this.actual)) {
	      _assert2['default'](_TestUtils.arrayContains(this.actual, value, compareValues), message, this.actual, value);
	    } else {
	      _assert2['default'](_TestUtils.stringContains(this.actual, value), message, this.actual, value);
	    }
	
	    return this;
	  };
	
	  Expectation.prototype.toExclude = function toExclude(value, compareValues, message) {
	    _assert2['default'](_TestUtils.isArray(this.actual) || typeof this.actual === 'string', 'The "actual" argument in expect(actual).toExclude() must be an array or a string');
	
	    if (typeof compareValues === 'string') {
	      message = compareValues;
	      compareValues = null;
	    }
	
	    message = message || 'Expected %s to exclude %s';
	
	    if (_TestUtils.isArray(this.actual)) {
	      _assert2['default'](!_TestUtils.arrayContains(this.actual, value, compareValues), message, this.actual, value);
	    } else {
	      _assert2['default'](!_TestUtils.stringContains(this.actual, value), message, this.actual, value);
	    }
	
	    return this;
	  };
	
	  Expectation.prototype.toHaveBeenCalled = function toHaveBeenCalled(message) {
	    var spy = this.actual;
	
	    _assert2['default'](_SpyUtils.isSpy(spy), 'The "actual" argument in expect(actual).toHaveBeenCalled() must be a spy');
	
	    _assert2['default'](spy.calls.length > 0, message || 'spy was not called');
	
	    return this;
	  };
	
	  Expectation.prototype.toHaveBeenCalledWith = function toHaveBeenCalledWith() {
	    var spy = this.actual;
	
	    _assert2['default'](_SpyUtils.isSpy(spy), 'The "actual" argument in expect(actual).toHaveBeenCalledWith() must be a spy');
	
	    var expectedArgs = Array.prototype.slice.call(arguments, 0);
	
	    _assert2['default'](spy.calls.some(function (call) {
	      return _isEqual2['default'](call.arguments, expectedArgs);
	    }), 'spy was never called with %s', expectedArgs);
	
	    return this;
	  };
	
	  Expectation.prototype.toNotHaveBeenCalled = function toNotHaveBeenCalled(message) {
	    var spy = this.actual;
	
	    _assert2['default'](_SpyUtils.isSpy(spy), 'The "actual" argument in expect(actual).toNotHaveBeenCalled() must be a spy');
	
	    _assert2['default'](spy.calls.length === 0, message || 'spy was not supposed to be called');
	
	    return this;
	  };
	
	  Expectation.prototype.withContext = function withContext(context) {
	    _assert2['default'](_TestUtils.isFunction(this.actual), 'The "actual" argument in expect(actual).withContext() must be a function');
	
	    this.context = context;
	
	    return this;
	  };
	
	  Expectation.prototype.withArgs = function withArgs() {
	    _assert2['default'](_TestUtils.isFunction(this.actual), 'The "actual" argument in expect(actual).withArgs() must be a function');
	
	    if (arguments.length) this.args = this.args.concat(Array.prototype.slice.call(arguments, 0));
	
	    return this;
	  };
	
	  return Expectation;
	})();
	
	var aliases = {
	  toBeAn: 'toBeA',
	  toNotBeAn: 'toNotBeA',
	  toBeTruthy: 'toExist',
	  toBeFalsy: 'toNotExist',
	  toBeFewerThan: 'toBeLessThan',
	  toBeMoreThan: 'toBeGreaterThan',
	  toContain: 'toInclude',
	  toNotContain: 'toExclude'
	};
	
	for (var alias in aliases) {
	  Expectation.prototype[alias] = Expectation.prototype[aliases[alias]];
	}exports['default'] = Expectation;
	module.exports = exports['default'];

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ObjectPrototype = Object.prototype;
	var toStr = ObjectPrototype.toString;
	var booleanValue = Boolean.prototype.valueOf;
	var has = __webpack_require__(163);
	var isArrowFunction = __webpack_require__(165);
	var isBoolean = __webpack_require__(167);
	var isDate = __webpack_require__(168);
	var isGenerator = __webpack_require__(169);
	var isNumber = __webpack_require__(170);
	var isRegex = __webpack_require__(171);
	var isString = __webpack_require__(172);
	var isSymbol = __webpack_require__(173);
	var isCallable = __webpack_require__(166);
	
	var isProto = Object.prototype.isPrototypeOf;
	
	var foo = function foo() {};
	var functionsHaveNames = foo.name === 'foo';
	
	var symbolValue = typeof Symbol === 'function' ? Symbol.prototype.valueOf : null;
	var symbolIterator = __webpack_require__(174)();
	
	var collectionsForEach = __webpack_require__(175)();
	
	var getPrototypeOf = Object.getPrototypeOf;
	if (!getPrototypeOf) {
		/* eslint-disable no-proto */
		if (typeof 'test'.__proto__ === 'object') {
			getPrototypeOf = function (obj) {
				return obj.__proto__;
			};
		} else {
			getPrototypeOf = function (obj) {
				var constructor = obj.constructor,
					oldConstructor;
				if (has(obj, 'constructor')) {
					oldConstructor = constructor;
					if (!(delete obj.constructor)) { // reset constructor
						return null; // can't delete obj.constructor, return null
					}
					constructor = obj.constructor; // get real constructor
					obj.constructor = oldConstructor; // restore constructor
				}
				return constructor ? constructor.prototype : ObjectPrototype; // needed for IE
			};
		}
		/* eslint-enable no-proto */
	}
	
	var isArray = Array.isArray || function (value) {
		return toStr.call(value) === '[object Array]';
	};
	
	var normalizeFnWhitespace = function normalizeFnWhitespace(fnStr) {
		// this is needed in IE 9, at least, which has inconsistencies here.
		return fnStr.replace(/^function ?\(/, 'function (').replace('){', ') {');
	};
	
	var tryMapSetEntries = function tryMapSetEntries(collection) {
		var foundEntries = [];
		try {
			collectionsForEach.Map.call(collection, function (key, value) {
				foundEntries.push([key, value]);
			});
		} catch (notMap) {
			try {
				collectionsForEach.Set.call(collection, function (value) {
					foundEntries.push([value]);
				});
			} catch (notSet) {
				return false;
			}
		}
		return foundEntries;
	};
	
	module.exports = function isEqual(value, other) {
		if (value === other) { return true; }
		if (value == null || other == null) { return value === other; }
	
		if (toStr.call(value) !== toStr.call(other)) { return false; }
	
		var valIsBool = isBoolean(value);
		var otherIsBool = isBoolean(other);
		if (valIsBool || otherIsBool) {
			return valIsBool && otherIsBool && booleanValue.call(value) === booleanValue.call(other);
		}
	
		var valIsNumber = isNumber(value);
		var otherIsNumber = isNumber(value);
		if (valIsNumber || otherIsNumber) {
			return valIsNumber && otherIsNumber && (Number(value) === Number(other) || (isNaN(value) && isNaN(other)));
		}
	
		var valIsString = isString(value);
		var otherIsString = isString(other);
		if (valIsString || otherIsString) {
			return valIsString && otherIsString && String(value) === String(other);
		}
	
		var valIsDate = isDate(value);
		var otherIsDate = isDate(other);
		if (valIsDate || otherIsDate) {
			return valIsDate && otherIsDate && +value === +other;
		}
	
		var valIsRegex = isRegex(value);
		var otherIsRegex = isRegex(other);
		if (valIsRegex || otherIsRegex) {
			return valIsRegex && otherIsRegex && String(value) === String(other);
		}
	
		var valIsArray = isArray(value);
		var otherIsArray = isArray(other);
		if (valIsArray || otherIsArray) {
			if (!valIsArray || !otherIsArray) { return false; }
			if (value.length !== other.length) { return false; }
			if (String(value) !== String(other)) { return false; }
	
			var index = value.length - 1;
			var equal = true;
			while (equal && index >= 0) {
				equal = has(value, index) && has(other, index) && isEqual(value[index], other[index]);
				index -= 1;
			}
			return equal;
		}
	
		var valueIsSym = isSymbol(value);
		var otherIsSym = isSymbol(other);
		if (valueIsSym !== otherIsSym) { return false; }
		if (valueIsSym && otherIsSym) {
			return symbolValue.call(value) === symbolValue.call(other);
		}
	
		var valueIsGen = isGenerator(value);
		var otherIsGen = isGenerator(other);
		if (valueIsGen !== otherIsGen) { return false; }
	
		var valueIsArrow = isArrowFunction(value);
		var otherIsArrow = isArrowFunction(other);
		if (valueIsArrow !== otherIsArrow) { return false; }
	
		if (isCallable(value) || isCallable(other)) {
			if (functionsHaveNames && !isEqual(value.name, other.name)) { return false; }
			if (!isEqual(value.length, other.length)) { return false; }
	
			var valueStr = normalizeFnWhitespace(String(value));
			var otherStr = normalizeFnWhitespace(String(other));
			if (isEqual(valueStr, otherStr)) { return true; }
	
			if (!valueIsGen && !valueIsArrow) {
				return isEqual(valueStr.replace(/\)\s*\{/, '){'), otherStr.replace(/\)\s*\{/, '){'));
			}
			return isEqual(valueStr, otherStr);
		}
	
		if (typeof value === 'object' || typeof other === 'object') {
			if (typeof value !== typeof other) { return false; }
			if (isProto.call(value, other) || isProto.call(other, value)) { return false; }
			if (getPrototypeOf(value) !== getPrototypeOf(other)) { return false; }
	
			if (symbolIterator) {
				var valueIteratorFn = value[symbolIterator];
				var valueIsIterable = isCallable(valueIteratorFn);
				var otherIteratorFn = other[symbolIterator];
				var otherIsIterable = isCallable(otherIteratorFn);
				if (valueIsIterable !== otherIsIterable) {
					return false;
				}
				if (valueIsIterable && otherIsIterable) {
					var valueIterator = valueIteratorFn.call(value);
					var otherIterator = otherIteratorFn.call(other);
					var valueNext, otherNext;
					do {
						valueNext = valueIterator.next();
						otherNext = otherIterator.next();
						if (!valueNext.done && !otherNext.done && !isEqual(valueNext, otherNext)) {
							return false;
						}
					} while (!valueNext.done && !otherNext.done);
					return valueNext.done === otherNext.done;
				}
			} else if (collectionsForEach.Map || collectionsForEach.Set) {
				var valueEntries = tryMapSetEntries(value);
				var otherEntries = tryMapSetEntries(other);
				if (isArray(valueEntries) !== isArray(otherEntries)) {
					return false; // either: neither is a Map/Set, or one is and the other isn't.
				}
				if (valueEntries && otherEntries) {
					return isEqual(valueEntries, otherEntries);
				}
			}
	
			var key, valueKeyIsRecursive, otherKeyIsRecursive;
			for (key in value) {
				if (has(value, key)) {
					if (!has(other, key)) { return false; }
					valueKeyIsRecursive = value[key] && value[key][key] === value;
					otherKeyIsRecursive = other[key] && other[key][key] === other;
					if (valueKeyIsRecursive !== otherKeyIsRecursive) {
						return false;
					}
					if (!valueKeyIsRecursive && !otherKeyIsRecursive && !isEqual(value[key], other[key])) {
						return false;
					}
				}
			}
			for (key in other) {
				if (has(other, key)) {
					if (!has(value, key)) { return false; }
					valueKeyIsRecursive = value[key] && value[key][key] === value;
					otherKeyIsRecursive = other[key] && other[key][key] === other;
					if (valueKeyIsRecursive !== otherKeyIsRecursive) {
						return false;
					}
					if (!valueKeyIsRecursive && !otherKeyIsRecursive && !isEqual(other[key], value[key])) {
						return false;
					}
				}
			}
			return true;
		}
	
		return false;
	};


/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	var bind = __webpack_require__(164);
	
	module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ },

/***/ 164:
/***/ function(module, exports) {

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice = Array.prototype.slice;
	var toStr = Object.prototype.toString;
	var funcType = '[object Function]';
	
	module.exports = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);
	
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                args.concat(slice.call(arguments))
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(
	                that,
	                args.concat(slice.call(arguments))
	            );
	        }
	    };
	
	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }
	
	    var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
	
	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }
	
	    return bound;
	};
	


/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isCallable = __webpack_require__(166);
	var fnToStr = Function.prototype.toString;
	var isNonArrowFnRegex = /^\s*function/;
	var isArrowFnWithParensRegex = /^\([^\)]*\) *=>/;
	var isArrowFnWithoutParensRegex = /^[^=]*=>/;
	
	module.exports = function isArrowFunction(fn) {
		if (!isCallable(fn)) { return false; }
		var fnStr = fnToStr.call(fn);
		return fnStr.length > 0 &&
			!isNonArrowFnRegex.test(fnStr) &&
			(isArrowFnWithParensRegex.test(fnStr) || isArrowFnWithoutParensRegex.test(fnStr));
	};


/***/ },

/***/ 166:
/***/ function(module, exports) {

	'use strict';
	
	var constructorRegex = /\s*class /;
	var isNonES6ClassFn = function isNonES6ClassFn(value) {
		try {
			return !constructorRegex.test(value);
		} catch (e) {
			return false; // not a function
		}
	};
	
	var fnToStr = Function.prototype.toString;
	var tryFunctionObject = function tryFunctionObject(value) {
		try {
			if (constructorRegex.test(value)) { return false; }
			fnToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (!isNonES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ },

/***/ 167:
/***/ function(module, exports) {

	'use strict';
	
	var boolToStr = Boolean.prototype.toString;
	
	var tryBooleanObject = function tryBooleanObject(value) {
		try {
			boolToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var boolClass = '[object Boolean]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isBoolean(value) {
		if (typeof value === 'boolean') { return true; }
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryBooleanObject(value) : toStr.call(value) === boolClass;
	};


/***/ },

/***/ 168:
/***/ function(module, exports) {

	'use strict';
	
	var getDay = Date.prototype.getDay;
	var tryDateObject = function tryDateObject(value) {
		try {
			getDay.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	
	var toStr = Object.prototype.toString;
	var dateClass = '[object Date]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isDateObject(value) {
		if (typeof value !== 'object' || value === null) { return false; }
		return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
	};


/***/ },

/***/ 169:
/***/ function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	var fnToStr = Function.prototype.toString;
	var isFnRegex = /^\s*function\*/;
	
	module.exports = function isGeneratorFunction(fn) {
		if (typeof fn !== 'function') { return false; }
		var fnStr = toStr.call(fn);
		return (fnStr === '[object Function]' || fnStr === '[object GeneratorFunction]') && isFnRegex.test(fnToStr.call(fn));
	};
	


/***/ },

/***/ 170:
/***/ function(module, exports) {

	'use strict';
	
	var numToStr = Number.prototype.toString;
	var tryNumberObject = function tryNumberObject(value) {
		try {
			numToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var numClass = '[object Number]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isNumberObject(value) {
		if (typeof value === 'number') { return true; }
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
	};


/***/ },

/***/ 171:
/***/ function(module, exports) {

	'use strict';
	
	var regexExec = RegExp.prototype.exec;
	var tryRegexExec = function tryRegexExec(value) {
		try {
			regexExec.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var regexClass = '[object RegExp]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isRegex(value) {
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryRegexExec(value) : toStr.call(value) === regexClass;
	};


/***/ },

/***/ 172:
/***/ function(module, exports) {

	'use strict';
	
	var strValue = String.prototype.valueOf;
	var tryStringObject = function tryStringObject(value) {
		try {
			strValue.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var strClass = '[object String]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isString(value) {
		if (typeof value === 'string') { return true; }
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
	};


/***/ },

/***/ 173:
/***/ function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
	
	if (hasSymbols) {
		var symToStr = Symbol.prototype.toString;
		var symStringRegex = /^Symbol\(.*\)$/;
		var isSymbolObject = function isSymbolObject(value) {
			if (typeof value.valueOf() !== 'symbol') { return false; }
			return symStringRegex.test(symToStr.call(value));
		};
		module.exports = function isSymbol(value) {
			if (typeof value === 'symbol') { return true; }
			if (toStr.call(value) !== '[object Symbol]') { return false; }
			try {
				return isSymbolObject(value);
			} catch (e) {
				return false;
			}
		};
	} else {
		module.exports = function isSymbol(value) {
			// this environment does not support Symbols.
			return false;
		};
	}


/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isSymbol = __webpack_require__(173);
	
	module.exports = function getSymbolIterator() {
		var symbolIterator = typeof Symbol === 'function' && isSymbol(Symbol.iterator) ? Symbol.iterator : null;
	
		if (typeof Object.getOwnPropertyNames === 'function' && typeof Map === 'function' && typeof Map.prototype.entries === 'function') {
			Object.getOwnPropertyNames(Map.prototype).forEach(function (name) {
				if (name !== 'entries' && name !== 'size' && Map.prototype[name] === Map.prototype.entries) {
					symbolIterator = name;
				}
			});
		}
	
		return symbolIterator;
	};


/***/ },

/***/ 175:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function () {
		var mapForEach = (function () {
			if (typeof Map !== 'function') { return null; }
			try {
				Map.prototype.forEach.call({}, function () {});
			} catch (e) {
				return Map.prototype.forEach;
			}
			return null;
		}());
	
		var setForEach = (function () {
			if (typeof Set !== 'function') { return null; }
			try {
				Set.prototype.forEach.call({}, function () {});
			} catch (e) {
				return Set.prototype.forEach;
			}
			return null;
		}());
	
		return { Map: mapForEach, Set: setForEach };
	};


/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _objectInspect = __webpack_require__(177);
	
	var _objectInspect2 = _interopRequireDefault(_objectInspect);
	
	function assert(condition, messageFormat) {
	  for (var _len = arguments.length, extraArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    extraArgs[_key - 2] = arguments[_key];
	  }
	
	  if (condition) return;
	
	  var index = 0;
	
	  throw new Error(messageFormat.replace(/%s/g, function () {
	    return _objectInspect2['default'](extraArgs[index++]);
	  }));
	}
	
	exports['default'] = assert;
	module.exports = exports['default'];

/***/ },

/***/ 177:
/***/ function(module, exports) {

	var hasMap = typeof Map === 'function' && Map.prototype;
	var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
	var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
	var mapForEach = hasMap && Map.prototype.forEach;
	var hasSet = typeof Set === 'function' && Set.prototype;
	var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
	var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
	var setForEach = hasSet && Set.prototype.forEach;
	
	module.exports = function inspect_ (obj, opts, depth, seen) {
	    if (!opts) opts = {};
	    
	    var maxDepth = opts.depth === undefined ? 5 : opts.depth;
	    if (depth === undefined) depth = 0;
	    if (depth >= maxDepth && maxDepth > 0
	    && obj && typeof obj === 'object') {
	        return '[Object]';
	    }
	    
	    if (seen === undefined) seen = [];
	    else if (indexOf(seen, obj) >= 0) {
	        return '[Circular]';
	    }
	    
	    function inspect (value, from) {
	        if (from) {
	            seen = seen.slice();
	            seen.push(from);
	        }
	        return inspect_(value, opts, depth + 1, seen);
	    }
	    
	    if (typeof obj === 'string') {
	        return inspectString(obj);
	    }
	    else if (typeof obj === 'function') {
	        var name = nameOf(obj);
	        return '[Function' + (name ? ': ' + name : '') + ']';
	    }
	    else if (obj === null) {
	        return 'null';
	    }
	    else if (isSymbol(obj)) {
	        var symString = Symbol.prototype.toString.call(obj);
	        return typeof obj === 'object' ? 'Object(' + symString + ')' : symString;
	    }
	    else if (isElement(obj)) {
	        var s = '<' + String(obj.nodeName).toLowerCase();
	        var attrs = obj.attributes || [];
	        for (var i = 0; i < attrs.length; i++) {
	            s += ' ' + attrs[i].name + '="' + quote(attrs[i].value) + '"';
	        }
	        s += '>';
	        if (obj.childNodes && obj.childNodes.length) s += '...';
	        s += '</' + String(obj.nodeName).toLowerCase() + '>';
	        return s;
	    }
	    else if (isArray(obj)) {
	        if (obj.length === 0) return '[]';
	        var xs = Array(obj.length);
	        for (var i = 0; i < obj.length; i++) {
	            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
	        }
	        return '[ ' + xs.join(', ') + ' ]';
	    }
	    else if (isError(obj)) {
	        var parts = [];
	        for (var key in obj) {
	            if (!has(obj, key)) continue;
	            
	            if (/[^\w$]/.test(key)) {
	                parts.push(inspect(key) + ': ' + inspect(obj[key]));
	            }
	            else {
	                parts.push(key + ': ' + inspect(obj[key]));
	            }
	        }
	        if (parts.length === 0) return '[' + obj + ']';
	        return '{ [' + obj + '] ' + parts.join(', ') + ' }';
	    }
	    else if (typeof obj === 'object' && typeof obj.inspect === 'function') {
	        return obj.inspect();
	    }
	    else if (isMap(obj)) {
	        var parts = [];
	        mapForEach.call(obj, function (value, key) {
	            parts.push(inspect(key, obj) + ' => ' + inspect(value, obj));
	        });
	        return 'Map (' + mapSize.call(obj) + ') {' + parts.join(', ') + '}';
	    }
	    else if (isSet(obj)) {
	        var parts = [];
	        setForEach.call(obj, function (value ) {
	            parts.push(inspect(value, obj));
	        });
	        return 'Set (' + setSize.call(obj) + ') {' + parts.join(', ') + '}';
	    }
	    else if (typeof obj === 'object' && !isDate(obj) && !isRegExp(obj)) {
	        var xs = [], keys = [];
	        for (var key in obj) {
	            if (has(obj, key)) keys.push(key);
	        }
	        keys.sort();
	        for (var i = 0; i < keys.length; i++) {
	            var key = keys[i];
	            if (/[^\w$]/.test(key)) {
	                xs.push(inspect(key) + ': ' + inspect(obj[key], obj));
	            }
	            else xs.push(key + ': ' + inspect(obj[key], obj));
	        }
	        if (xs.length === 0) return '{}';
	        return '{ ' + xs.join(', ') + ' }';
	    }
	    else return String(obj);
	};
	
	function quote (s) {
	    return String(s).replace(/"/g, '&quot;');
	}
	
	function isArray (obj) { return toStr(obj) === '[object Array]' }
	function isDate (obj) { return toStr(obj) === '[object Date]' }
	function isRegExp (obj) { return toStr(obj) === '[object RegExp]' }
	function isError (obj) { return toStr(obj) === '[object Error]' }
	function isSymbol (obj) { return toStr(obj) === '[object Symbol]' }
	
	var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
	function has (obj, key) {
	    return hasOwn.call(obj, key);
	}
	
	function toStr (obj) {
	    return Object.prototype.toString.call(obj);
	}
	
	function nameOf (f) {
	    if (f.name) return f.name;
	    var m = f.toString().match(/^function\s*([\w$]+)/);
	    if (m) return m[1];
	}
	
	function indexOf (xs, x) {
	    if (xs.indexOf) return xs.indexOf(x);
	    for (var i = 0, l = xs.length; i < l; i++) {
	        if (xs[i] === x) return i;
	    }
	    return -1;
	}
	
	function isMap (x) {
	    if (!mapSize) {
	        return false;
	    }
	    try {
	        mapSize.call(x);
	        return true;
	    } catch (e) {}
	    return false;
	}
	
	function isSet (x) {
	    if (!setSize) {
	        return false;
	    }
	    try {
	        setSize.call(x);
	        return true;
	    } catch (e) {}
	    return false;
	}
	
	function isElement (x) {
	    if (!x || typeof x !== 'object') return false;
	    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
	        return true;
	    }
	    return typeof x.nodeName === 'string'
	        && typeof x.getAttribute === 'function'
	    ;
	}
	
	function inspectString (str) {
	    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
	    return "'" + s + "'";
	    
	    function lowbyte (c) {
	        var n = c.charCodeAt(0);
	        var x = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[n];
	        if (x) return '\\' + x;
	        return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16);
	    }
	}


/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.createSpy = createSpy;
	exports.spyOn = spyOn;
	exports.isSpy = isSpy;
	exports.restoreSpies = restoreSpies;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _assert = __webpack_require__(176);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _TestUtils = __webpack_require__(179);
	
	function noop() {}
	
	var spies = [];
	
	function createSpy(fn) {
	  var restore = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];
	
	  if (fn == null) fn = noop;
	
	  _assert2['default'](_TestUtils.isFunction(fn), 'createSpy needs a function');
	
	  var targetFn = undefined,
	      thrownValue = undefined,
	      returnValue = undefined;
	
	  var spy = function spy() {
	    spy.calls.push({
	      context: this,
	      arguments: Array.prototype.slice.call(arguments, 0)
	    });
	
	    if (targetFn) return targetFn.apply(this, arguments);
	
	    if (thrownValue) throw thrownValue;
	
	    return returnValue;
	  };
	
	  spy.calls = [];
	
	  spy.andCall = function (fn) {
	    targetFn = fn;
	    return spy;
	  };
	
	  spy.andCallThrough = function () {
	    return spy.andCall(fn);
	  };
	
	  spy.andThrow = function (object) {
	    thrownValue = object;
	    return spy;
	  };
	
	  spy.andReturn = function (value) {
	    returnValue = value;
	    return spy;
	  };
	
	  spy.getLastCall = function () {
	    return spy.calls[spy.calls.length - 1];
	  };
	
	  spy.restore = spy.destroy = restore;
	
	  spy.__isSpy = true;
	
	  spies.push(spy);
	
	  return spy;
	}
	
	function spyOn(object, methodName) {
	  var original = object[methodName];
	
	  if (!isSpy(original)) {
	    _assert2['default'](_TestUtils.isFunction(original), 'Cannot spyOn the %s property; it is not a function', methodName);
	
	    object[methodName] = createSpy(original, function () {
	      object[methodName] = original;
	    });
	  }
	
	  return object[methodName];
	}
	
	function isSpy(object) {
	  return object && object.__isSpy === true;
	}
	
	function restoreSpies() {
	  for (var i = spies.length - 1; i >= 0; i--) {
	    spies[i].restore();
	  }spies = [];
	}

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.functionThrows = functionThrows;
	exports.arrayContains = arrayContains;
	exports.stringContains = stringContains;
	exports.isArray = isArray;
	exports.isFunction = isFunction;
	exports.isA = isA;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _isEqual = __webpack_require__(162);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _isRegex = __webpack_require__(171);
	
	var _isRegex2 = _interopRequireDefault(_isRegex);
	
	/**
	 * Returns true if the given function throws the given value
	 * when invoked. The value may be:
	 *
	 * - undefined, to merely assert there was a throw
	 * - a constructor function, for comparing using instanceof
	 * - a regular expression, to compare with the error message
	 * - a string, to find in the error message
	 */
	
	function functionThrows(fn, context, args, value) {
	  try {
	    fn.apply(context, args);
	  } catch (error) {
	    if (value == null) return true;
	
	    if (isFunction(value) && error instanceof value) return true;
	
	    var message = error.message || error;
	
	    if (typeof message === 'string') {
	      if (_isRegex2['default'](value) && value.test(error.message)) return true;
	
	      if (typeof value === 'string' && message.indexOf(value) !== -1) return true;
	    }
	  }
	
	  return false;
	}
	
	/**
	 * Returns true if the given array contains the value, false
	 * otherwise. The compareValues function must return false to
	 * indicate a non-match.
	 */
	
	function arrayContains(array, value, compareValues) {
	  if (compareValues == null) compareValues = _isEqual2['default'];
	
	  return array.some(function (item) {
	    return compareValues(item, value) !== false;
	  });
	}
	
	/**
	 * Returns true if the given string contains the value, false otherwise.
	 */
	
	function stringContains(string, value) {
	  return string.indexOf(value) !== -1;
	}
	
	/**
	 * Returns true if the given object is an array.
	 */
	
	function isArray(object) {
	  return Array.isArray(object);
	}
	
	/**
	 * Returns true if the given object is a function.
	 */
	
	function isFunction(object) {
	  return typeof object === 'function';
	}
	
	/**
	 * Returns true if the given object is an instanceof value
	 * or its typeof is the given value.
	 */
	
	function isA(object, value) {
	  if (isFunction(value)) return object instanceof value;
	
	  if (value === 'array') return Array.isArray(object);
	
	  return typeof object === value;
	}

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Expectation = __webpack_require__(161);
	
	var _Expectation2 = _interopRequireDefault(_Expectation);
	
	var Extensions = [];
	
	function extend(extension) {
	  if (Extensions.indexOf(extension) === -1) {
	    Extensions.push(extension);
	
	    for (var p in extension) {
	      if (extension.hasOwnProperty(p)) _Expectation2['default'].prototype[p] = extension[p];
	    }
	  }
	}
	
	exports['default'] = extend;
	module.exports = exports['default'];

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/eddyrecio/Code/libfree/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/eddyrecio/Code/libfree/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.assertIterable = assertIterable;
	exports.iteratorFactory = iteratorFactory;
	exports.isIterable = isIterable;
	exports.getIterator = getIterator;
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function assertIterable(iterable) {
	  if (!isIterable(iterable)) {
	    throw new TypeError('Not iterable: ' + iterable);
	  }
	}
	
	var ArrayIterator = exports.ArrayIterator = (function () {
	  function ArrayIterator(arr) {
	    _classCallCheck(this, ArrayIterator);
	
	    if (!Array.isArray(arr)) {
	      throw new TypeError('Value of argument "arr" violates contract, expected Array got ' + (arr === null ? 'null' : (typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) === 'object' && arr.constructor ? arr.constructor.name || '[Unknown Object]' : typeof arr === 'undefined' ? 'undefined' : _typeof(arr)));
	    }
	
	    this.arr = arr;
	    this.index = 0;
	  }
	
	  _createClass(ArrayIterator, [{
	    key: 'next',
	    value: function next() {
	      var length = this.arr.length;
	
	      if (this.index < length) {
	        var value = this.arr[this.index++];
	        return { value: value, done: false };
	      }
	
	      return { done: true };
	    }
	  }]);
	
	  return ArrayIterator;
	})();
	
	var Iterator = exports.Iterator = (function () {
	  function Iterator(iter) {
	    _classCallCheck(this, Iterator);
	
	    this.iter = iter;
	  }
	
	  _createClass(Iterator, [{
	    key: 'next',
	    value: function next() {
	      return this.iter.next();
	    }
	  }]);
	
	  return Iterator;
	})();
	
	var FilterIterator = exports.FilterIterator = (function () {
	  function FilterIterator(iterator, predicate) {
	    _classCallCheck(this, FilterIterator);
	
	    this.iterator = iterator;
	    this.predicate = predicate;
	  }
	
	  _createClass(FilterIterator, [{
	    key: 'next',
	    value: function next() {
	      var iter = this.iterator;
	      var predicate = this.predicate;
	      var result = iter.next();
	
	      while (!result.done) {
	        if (predicate(result.value)) {
	          return result;
	        }
	
	        result = iter.next();
	      }
	
	      return result;
	    }
	  }]);
	
	  return FilterIterator;
	})();
	
	var MapIterator = exports.MapIterator = (function () {
	  function MapIterator(iterator, selector) {
	    _classCallCheck(this, MapIterator);
	
	    this.iterator = iterator;
	    this.selector = selector;
	  }
	
	  _createClass(MapIterator, [{
	    key: 'next',
	    value: function next() {
	      var iter = this.iterator;
	      var selector = this.selector;
	      var result = iter.next();
	
	      while (!result.done) {
	        return { value: selector(result.value), done: false };
	      }
	
	      return { done: true };
	    }
	  }]);
	
	  return MapIterator;
	})();
	
	var ReduceIterator = exports.ReduceIterator = (function () {
	  function ReduceIterator(iterator, combinator) {
	    _classCallCheck(this, ReduceIterator);
	
	    this.iterator = iterator;
	    this.combinator = combinator;
	    this.index = 0;
	    this.previousValue = null;
	  }
	
	  _createClass(ReduceIterator, [{
	    key: 'next',
	    value: function next() {
	      var iter = this.iterator;
	      var combinator = this.combinator;
	
	      if (this.index === 0) {
	        var firstResult = iter.next();
	        this.previousValue = firstResult.value;
	        this.index++;
	      }
	
	      var result = iter.next();
	
	      while (!result.done) {
	        // previous, current, index
	        this.previousValue = combinator(this.previousValue, result.value, this.index++);
	        return { value: this.previousValue, done: false };
	      }
	
	      return { value: this.previousValue, done: true };
	    }
	  }]);
	
	  return ReduceIterator;
	})();
	
	var Iterable = (function () {
	  function Iterable(iteratorFactory) {
	    _classCallCheck(this, Iterable);
	
	    this.iteratorFactory = iteratorFactory;
	  }
	
	  _createClass(Iterable, [{
	    key: Symbol.iterator,
	    value: function value() {
	      return this.iteratorFactory();
	    }
	  }]);
	
	  return Iterable;
	})();
	
	exports.default = Iterable;
	
	var IterableWrapper = exports.IterableWrapper = (function () {
	  function IterableWrapper(source) {
	    _classCallCheck(this, IterableWrapper);
	
	    this.source = source;
	  }
	
	  _createClass(IterableWrapper, [{
	    key: Symbol.iterator,
	    value: function value() {
	      return iteratorFactory(this.source);
	    }
	  }]);
	
	  return IterableWrapper;
	})();
	
	function iteratorFactory(source) {
	  if (Array.isArray(source)) {
	    return new ArrayIterator(source);
	  }
	
	  if (isIterable(source)) {
	    return new Iterator(getIterator(iterable));
	  }
	
	  throw new Error('Not supported');
	}
	
	function isIterable(iterable) {
	  return iterable && typeof iterable[Symbol.iterator] === "function";
	}
	
	// Get the iterator for the iterable or throw an error.
	function getIterator(iterable) {
	
	  if (!isIterable(iterable)) {
	    throw new TypeError("Not iterable: " + iterable);
	  }
	
	  return iterable[Symbol.iterator]();
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/eddyrecio/Code/libfree/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "iter.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/eddyrecio/Code/libfree/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/eddyrecio/Code/libfree/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.filter = filter;
	exports.map = map;
	exports.reduce = reduce;
	
	var _iter = __webpack_require__(181);
	
	var _iter2 = _interopRequireDefault(_iter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function filter(predicate) {
	  // TODO: check for null and undefined
	
	  var iterable = this;
	
	  (0, _iter.assertIterable)(iterable);
	
	  // create factory to lift variables.
	  var iter = function iter() {
	    return (0, _iter.getIterator)(iterable);
	  };
	
	  var factory = function factory() {
	    return new _iter.FilterIterator(iter(), predicate);
	  };
	
	  return new _iter2.default(factory);
	}
	
	function map(selector) {
	  // TODO: check for null and undefined
	
	  var iterable = this;
	
	  (0, _iter.assertIterable)(iterable);
	
	  // create factory to lift variables.
	  var iter = function iter() {
	    return (0, _iter.getIterator)(iterable);
	  };
	
	  var factory = function factory() {
	    return new _iter.MapIterator(iter(), predicate);
	  };
	
	  return new _iter2.default(factory);
	}
	
	function reduce(accumulator) {
	  // TODO: check for null and undefined
	
	  var iterable = this;
	
	  (0, _iter.assertIterable)(iterable);
	
	  // create factory to lift variables.
	  var iter = function iter() {
	    return (0, _iter.getIterator)(iterable);
	  };
	
	  var factory = function factory() {
	    return new _iter.ReduceIterator(iter(), accumulator);
	  };
	
	  // Should it force resolution?
	  //return new Iterable(factory);
	  var reducer = new _iter2.default(factory)[Symbol.iterator]();
	  var result = reducer.next();
	
	  while (!result.done) {
	    result = reducer.next();
	  }
	
	  return result.value;
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/eddyrecio/Code/libfree/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "pull.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = runTests;
	
	var _expect = __webpack_require__(160);
	
	var _expect2 = _interopRequireDefault(_expect);
	
	var _iter = __webpack_require__(181);
	
	var _iter2 = _interopRequireDefault(_iter);
	
	var _pull = __webpack_require__(182);
	
	var _pulloperators = __webpack_require__(184);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var testFirst = function testFirst() {
	  var _context;
	
	  console.log('testFirst');
	
	  var arrLong = [1, 2, 3, 4, 5];
	
	  var result = (_context = new _iter.IterableWrapper(arrLong), _pulloperators.first).call(_context);
	
	  (0, _expect2.default)(1).toEqual(result);
	};
	
	var testLast = function testLast() {
	  var _context2;
	
	  console.log('testLast');
	
	  var arrLong = [1, 2, 3, 4, 5];
	
	  var result = (_context2 = new _iter.IterableWrapper(arrLong), _pulloperators.last).call(_context2);
	
	  (0, _expect2.default)(5).toEqual(result);
	};
	
	var testSingle = function testSingle() {
	  var _context3;
	
	  console.log('testSingle');
	
	  var arrLong = [7];
	
	  var result = (_context3 = new _iter.IterableWrapper(arrLong), _pulloperators.single).call(_context3);
	
	  (0, _expect2.default)(7).toEqual(result);
	};
	
	var testSingle2 = function testSingle2() {
	  console.log('testSingle2');
	
	  var arrLong = [1, 2];
	  var throws = function throws() {
	    var _context4;
	
	    return (_context4 = new _iter.IterableWrapper(arrLong), _pulloperators.single).call(_context4);
	  };
	
	  (0, _expect2.default)(throws).toThrow('More than one item found');
	};
	
	var testSkipWhile = function testSkipWhile() {
	  var _context5;
	
	  console.log('testSkipWhile');
	
	  var arrLong = [1, 2, 3, 4, 5];
	
	  var threeFourAndFive = [].concat(_toConsumableArray((_context5 = new _iter.IterableWrapper(arrLong), _pulloperators.skip).call(_context5, 2)));
	
	  (0, _expect2.default)(threeFourAndFive[0]).toEqual(3);
	  (0, _expect2.default)(threeFourAndFive[1]).toEqual(4);
	  (0, _expect2.default)(threeFourAndFive[2]).toEqual(5);
	};
	
	var testSkipWhile2 = function testSkipWhile2() {
	  var _context6;
	
	  console.log('testSkipWhile2');
	
	  var arrLong = [1, 2, 3, 4, 5];
	
	  var threeFourAndFive = [].concat(_toConsumableArray((_context6 = new _iter.IterableWrapper(arrLong), _pulloperators.skip).call(_context6, function (x) {
	    return x < 3;
	  })));
	
	  (0, _expect2.default)(threeFourAndFive[0]).toEqual(3);
	  (0, _expect2.default)(threeFourAndFive[1]).toEqual(4);
	  (0, _expect2.default)(threeFourAndFive[2]).toEqual(5);
	};
	
	var testTakeWhile = function testTakeWhile() {
	  var _context7;
	
	  console.log('testTakeWhile');
	
	  var arrLong = [1, 2, 3, 4, 5];
	
	  var oneTwoAndThree = [].concat(_toConsumableArray((_context7 = new _iter.IterableWrapper(arrLong), _pulloperators.take).call(_context7, function (x) {
	    return x <= 3;
	  })));
	
	  (0, _expect2.default)(oneTwoAndThree[0]).toEqual(1);
	  (0, _expect2.default)(oneTwoAndThree[1]).toEqual(2);
	  (0, _expect2.default)(oneTwoAndThree[2]).toEqual(3);
	};
	
	function runTests() {
	  testFirst();
	  testLast();
	  testSingle();
	  testSingle2();
	  testSkipWhile();
	  testSkipWhile2();
	  testTakeWhile();
	
	  console.log('\r');
	  console.log('All tests pull operators passed.');
	}

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/eddyrecio/Code/libfree/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/eddyrecio/Code/libfree/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TakeIterator = exports.SkipIterator = undefined;
	exports.first = first;
	exports.last = last;
	exports.single = single;
	exports.skip = skip;
	exports.take = take;
	
	var _iter = __webpack_require__(181);
	
	var _iter2 = _interopRequireDefault(_iter);
	
	var _pull = __webpack_require__(182);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SkipIterator = exports.SkipIterator = (function () {
	  function SkipIterator(iterator, filterFunc) {
	    _classCallCheck(this, SkipIterator);
	
	    this.iterator = iterator;
	    this.filterFunc = filterFunc;
	  }
	
	  _createClass(SkipIterator, [{
	    key: 'next',
	    value: function next() {
	      var iter = this.iterator;
	      var result = iter.next();
	
	      while (!result.done && this.filterFunc(result.value)) {
	        result = iter.next();
	      }
	
	      return result;
	    }
	  }]);
	
	  return SkipIterator;
	})();
	
	var TakeIterator = exports.TakeIterator = (function () {
	  function TakeIterator(iterator, filterFunc) {
	    _classCallCheck(this, TakeIterator);
	
	    this.iterator = iterator;
	    this.filterFunc = filterFunc;
	  }
	
	  _createClass(TakeIterator, [{
	    key: 'next',
	    value: function next() {
	      var iter = this.iterator;
	      var result = iter.next();
	
	      while (!result.done && !this.filterFunc(result.value)) {
	        result = iter.next();
	      }
	
	      return result;
	    }
	  }]);
	
	  return TakeIterator;
	})();
	
	function first(filterFunc) {
	  // TODO: check for null and undefined
	
	  var iterable = this;
	
	  (0, _iter.assertIterable)(iterable);
	
	  // TODO: Add filter iterable.
	
	  // create factory to lift variables.
	  var iter = (0, _iter.getIterator)(iterable);
	  var result = iter.next();
	
	  return result ? result.value : null;
	}
	
	function last(filterFunc) {
	  // TODO: check for null and undefined
	
	  var iterable = this;
	
	  (0, _iter.assertIterable)(iterable);
	
	  // TODO: Add filter iterable.
	
	  // create factory to lift variables.
	  var iter = (0, _iter.getIterator)(iterable);
	  var result = iter.next();
	
	  var value = result.value;
	
	  // Fastforward until done
	  while (!result.done) {
	    value = result.value;
	    result = iter.next();
	  }
	
	  return value;
	}
	
	function single(filterFunc) {
	  // TODO: check for null and undefined
	
	  var iterable = this;
	
	  (0, _iter.assertIterable)(iterable);
	
	  // TODO: Add filter iterable.
	
	  // create factory to lift variables.
	  var iter = (0, _iter.getIterator)(iterable);
	  var result = iter.next();
	
	  if (!iter.next().done) {
	    throw new Error('More than one item found');
	  }
	
	  return result ? result.value : null;
	}
	
	function assertNumberOrFunction(numOrFunc) {
	  if (!(typeof numOrFunc === 'undefined' ? 'undefined' : _typeof(numOrFunc)) === 'number' || !(typeof numOrFunc === 'undefined' ? 'undefined' : _typeof(numOrFunc)) == 'function') {
	    throw new TypeError('argument must be integer or function');
	  }
	}
	
	function skip(filterFunc) {
	  // TODO: check for null and undefined
	  assertNumberOrFunction(filterFunc);
	
	  var index = 0;
	  var predicate = Number.isInteger(filterFunc) ? function () {
	    return filterFunc > index++;
	  } : filterFunc;
	
	  var factory = function factory(iter) {
	    return new SkipIterator(iter(), predicate);
	  };
	
	  return createIterable(this, factory);
	}
	
	function take(filterFunc) {
	  assertNumberOrFunction(filterFunc);
	
	  var index = 0;
	  var predicate = Number.isInteger(filterFunc) ? function () {
	    return filterFunc > index++;
	  } : filterFunc;
	
	  var factory = function factory(iter) {
	    return new TakeIterator(iter(), filterFunc);
	  };
	
	  return createIterable(this, factory);
	}
	
	function createIterable(iterable, factoryFunc) {
	  // TODO: check for null and undefined
	
	  (0, _iter.assertIterable)(iterable);
	
	  // create factory to lift variables.
	  var iter = function iter() {
	    return (0, _iter.getIterator)(iterable);
	  };
	  var factory = function factory() {
	    return factoryFunc(iter);
	  };
	  return new _iter2.default(factory);
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/eddyrecio/Code/libfree/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "pulloperators.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = runTests;
	
	var _expect = __webpack_require__(160);
	
	var _expect2 = _interopRequireDefault(_expect);
	
	var _utils = __webpack_require__(186);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var testList = function testList() {
	  console.log('testList');
	
	  var arrLong = [1, 2, 3, 4, 5];
	
	  var list = new _utils.List(arrLong);
	  var iter = list[Symbol.iterator]();
	
	  var first = iter.next();
	  var second = iter.next();
	  var third = iter.next();
	
	  (0, _expect2.default)(first.value).toEqual(1);
	  (0, _expect2.default)(second.value).toEqual(2);
	  (0, _expect2.default)(third.value).toEqual(3);
	
	  var index = 1;
	
	  if (!(list && typeof list[Symbol.iterator] === 'function')) {
	    throw new TypeError('Expected list to be iterable, got ' + (list === null ? 'null' : (typeof list === 'undefined' ? 'undefined' : _typeof(list)) === 'object' && list.constructor ? list.constructor.name || '[Unknown Object]' : typeof list === 'undefined' ? 'undefined' : _typeof(list)));
	  }
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var i = _step.value;
	
	      (0, _expect2.default)(index++).toEqual(i);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	};
	
	function runTests() {
	  testList();
	
	  console.log('\r');
	  console.log('All utils tests passed.');
	}

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/eddyrecio/Code/libfree/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/eddyrecio/Code/libfree/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.List = undefined;
	
	var _iter = __webpack_require__(181);
	
	var _iter2 = _interopRequireDefault(_iter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var List = exports.List = (function () {
	    function List(items) {
	        _classCallCheck(this, List);
	
	        this.items = items || [];
	    }
	
	    _createClass(List, [{
	        key: 'add',
	        value: function add(item) {
	            this.items.push(item);
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.items = [];
	        }
	    }, {
	        key: Symbol.iterator,
	        value: function value() {
	            return new _iter.ArrayIterator(this.items);
	        }
	    }, {
	        key: 'getItem',
	        value: function getItem(index) {
	            return this.items[index];
	        }
	    }, {
	        key: 'getItems',
	        value: function getItems(start, howMany) {
	            return this.items.splice(start, howMany);
	        }
	    }, {
	        key: 'indexOf',
	        value: function indexOf(item) {
	            return this.items.indexOf(item, 0 /* fromIndex */);
	        }
	    }, {
	        key: 'remove',
	        value: function remove(item) {
	            var index = this.items.indexOf(item, 0);
	            if (index > -1) {
	                this.items.splice(index, 1);
	            }
	        }
	    }, {
	        key: 'count',
	        value: function count() {
	            return this.items.length;
	        }
	    }, {
	        key: 'toArray',
	        value: function toArray() {
	            // TODO: clone
	            return this.items;
	        }
	    }]);
	
	    return List;
	})();

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/eddyrecio/Code/libfree/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "utils.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

/******/ });
//# sourceMappingURL=test.js.map