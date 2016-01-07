import Iterable, {
  FilterIterator, MapIterator, isIterable, getIterator, ReduceIterator, assertIterable
} from './iter';

import { filter, map, reduce } from './pull';


export class SkipIterator {
  constructor(iterator, filterFunc) {
    this.iterator = iterator;
    this.filterFunc = filterFunc;
  }

  next () {
    let iter = this.iterator;
    let result = iter.next();

    while(!result.done && this.filterFunc(result.value)) {
      result = iter.next();
    }

    return result;
  }
}

export class TakeIterator {
  constructor(iterator, filterFunc) {
    this.iterator = iterator;
    this.filterFunc = filterFunc;
  }

  next () {
    let iter = this.iterator;
    let result = iter.next();

    while(!result.done && !this.filterFunc(result.value)) {
      result = iter.next();
    }

    return result;
  }
}

export function first(filterFunc) {
  // TODO: check for null and undefined

  let iterable = this;

  assertIterable(iterable);

  // TODO: Add filter iterable.

  // create factory to lift variables.
  let iter = getIterator(iterable);
  let result = iter.next();

  return result ? result.value : null;
}

export function last(filterFunc) {
  // TODO: check for null and undefined

  let iterable = this;

  assertIterable(iterable);

  // TODO: Add filter iterable.

  // create factory to lift variables.
  let iter = getIterator(iterable);
  let result = iter.next();

  let value = result.value;

  // Fastforward until done
  while(!result.done) {
    value = result.value;
    result = iter.next();
  }

  return value;
}

export function single(filterFunc) {
  // TODO: check for null and undefined

  let iterable = this;

  assertIterable(iterable);

  // TODO: Add filter iterable.

  // create factory to lift variables.
  let iter = getIterator(iterable);
  let result = iter.next();

  if(!iter.next().done) {
    throw new Error('More than one item found');
  }

  return result ? result.value : null;
}

function assertNumberOrFunction(numOrFunc) {
  if(!typeof numOrFunc === 'number' || !typeof numOrFunc == 'function') {
    throw new TypeError('argument must be integer or function');
  }
}

export function skip(filterFunc) {
  // TODO: check for null and undefined
  assertNumberOrFunction(filterFunc);

  let index = 0;
  let predicate = Number.isInteger(filterFunc)?
                      () => filterFunc > index++: filterFunc;

  let factory = (iter) => new SkipIterator(iter(), predicate);

  return createIterable(this, factory);
}

export function take(filterFunc) {
  assertNumberOrFunction(filterFunc);

  let index = 0;
  let predicate = Number.isInteger(filterFunc)?
                      () => filterFunc > index++: filterFunc;

  let factory = (iter) => new TakeIterator(iter(), filterFunc);

  return createIterable(this, factory);
}

function createIterable(iterable, factoryFunc) {
  // TODO: check for null and undefined

  assertIterable(iterable);

  // create factory to lift variables.
  let iter = () => getIterator(iterable);
  let factory = () => factoryFunc(iter);
  return new Iterable(factory);
}
