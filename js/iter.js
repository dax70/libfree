

export function assertIterable(iterable) {
  if(!isIterable(iterable)) {
    throw new TypeError('Not iterable: ' + iterable);
  }
}

export function isIterable(iterable) {
  return iterable && typeof iterable[Symbol.iterator] === "function";
}

// Get the iterator for the iterable or throw an error.
export function getIterator(iterable) {

  if (!isIterable(iterable)) {
    throw new TypeError("Not iterable: " + iterable);
  }

  return iterable[Symbol.iterator]();
}

export class ArrayIterator {
  constructor (arr: Array) {
    this.arr = arr;
    this.index = 0;
  }

  next() {
    let length = this.arr.length;

    if (this.index < length) {
      let value = this.arr[this.index++];
      return { value: value, done: false };
    }

    return { done: true };
  }
}

export class Iterator {
  constructor (iter) {
    this.iter = iter;
  }

  next() {
    return this.iter.next();
  }
}

export class FilterIterator {

  constructor (iterator, predicate) {
    this.iterator = iterator;
    this.predicate = predicate;
  }

  next () {
    let iter = this.iterator;
    let predicate = this.predicate;
    let result = iter.next();

    while(!result.done) {
      if(predicate(result.value)) {
        return result;
      }

      result = iter.next();
    }

    return result;
  }
}

export class MapIterator {

  constructor (iterator, selector) {
    this.iterator = iterator;
    this.selector = selector;
  }

  next () {
    let iter = this.iterator;
    let selector = this.selector;
    let result = iter.next();

    while(!result.done) {
      return { value: selector(result.value), done: false };
    }

    return { done: true };
  }
}

export class ReduceIterator {
  constructor(iterator, combinator) {
    this.iterator = iterator;
    this.combinator = combinator;
    this.previousValue = null;    
    this.index = 0;
  }

  next () {
    let iter = this.iterator;
    let combinator = this.combinator;

    if(this.index === 0) {
      let firstResult = iter.next();
      this.previousValue = firstResult.value;
      this.index++;
    }

    let result = iter.next();

    while(!result.done) {
      // previous, current, index
      this.previousValue = combinator(this.previousValue, result.value, this.index++)
      return { value: this.previousValue, done: false };
    }

    return { value: this.previousValue, done: true };
  }
}

export class TraceIterator {

  constructor(iterator) {
    this.iterator = iterator;
  }

  next() {
    let result = this.iterator.next();
    console.log(result);
    return result;
  }
}

export default class Iterable {

  constructor(iteratorFactory) {
    this.iteratorFactory = iteratorFactory;
  }

  [Symbol.iterator]() {
    return this.iteratorFactory();
  }
}

export class IterableWrapper {

  constructor(source) {
    this.source = source;
  }

  [Symbol.iterator]() {
    return iteratorFactory(this.source);
  }
}
