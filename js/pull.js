import Iterable, {
  FilterIterator, MapIterator, isIterable, getIterator, ReduceIterator, assertIterable
} from './iter';

export function filter(predicate) {
  // TODO: check for null and undefined

  let iterable = this;

  assertIterable(iterable);

  // create factory to lift variables.
  let iter = () => getIterator(iterable);

  let factory = () => new FilterIterator(iter(), predicate);

  return new Iterable(factory);
}


export function map(selector) {
  // TODO: check for null and undefined

  let iterable = this;

  assertIterable(iterable);

  // create factory to lift variables.
  let iter = () => getIterator(iterable);

  let factory = () => new MapIterator(iter(), predicate);

  return new Iterable(factory);
}

export function reduce(accumulator) {
  // TODO: check for null and undefined

  let iterable = this;

  assertIterable(iterable);

  // create factory to lift variables.
  let iter = () => getIterator(iterable);

  let factory = () => new ReduceIterator(iter(), accumulator);

  // Should it force resolution?
  //return new Iterable(factory);
  let reducer =  new Iterable(factory)[Symbol.iterator]();
  let result = reducer.next();

  while(!result.done) {
    result = reducer.next();
  }

  return result.value;
}
