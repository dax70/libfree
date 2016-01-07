import expect, { createSpy, spyOn, isSpy } from 'expect';

import Iterable, {
  IterableWrapper, ArrayIterator, Iterator, FilterIterator, getIterator
} from '../js/iter';

import { filter, map, reduce } from '../js/pull';

const arr = [1, 2];

const testArrayIterator = () => {
  console.log('testArrayIterable');

  let iter = new ArrayIterator(arr);
  let first = iter.next();
  let second = iter.next();
  let third = iter.next();

  expect(first.value).toEqual(1);
  expect(second.value).toEqual(2);
  expect(third.value).toEqual(undefined);
}

const testIterator = () => {
  console.log('testIterator');

  let iterator = arr[Symbol.iterator]();
  let iter = new Iterator(iterator);
  let first = iter.next();
  let second = iter.next();
  let third = iter.next();

  expect(first.value).toEqual(1);
  expect(second.value).toEqual(2);
  expect(third.value).toEqual(undefined);

}

const testIterableWrapper = () => {
  console.log('testIterableWrapper');

  let wrapper = new IterableWrapper(arr);
  let iter = wrapper[Symbol.iterator]();
  let first = iter.next();
  let second = iter.next();
  let third = iter.next();

  expect(first.value).toEqual(1);
  expect(second.value).toEqual(2);
  expect(third.value).toEqual(undefined);
  expect(third.done).toEqual(true);
}

const testIterable = () => {
  console.log('testIterable');

  let innerIter = getIterator(arr);

  let factory = ()=> innerIter;

  let wrapper = new Iterable(factory);
  let iter = wrapper[Symbol.iterator]();
  let first = iter.next();
  let second = iter.next();
  let third = iter.next();

  expect(first.value).toEqual(1);
  expect(second.value).toEqual(2);
  expect(third.value).toEqual(undefined);
  expect(third.done).toEqual(true);
}

const testFilterIterator = () => {
  console.log('testFilterIterator');

  const arrLong = [1, 2, 3, 4, 5];

  let arrayIter = arrLong[Symbol.iterator]();

  let iter = new FilterIterator(arrayIter, x => x < 3);
  let first = iter.next();
  let second = iter.next();
  let third = iter.next();

  expect(first.value).toEqual(1);
  expect(second.value).toEqual(2);
  expect(third.value).toEqual(undefined);
  expect(third.done).toEqual(true);
}

const testFilter = () => {
  console.log('testFilter');

  const arrLong = [1, 2, 3, 4, 5];

  let wrapper = new IterableWrapper(arrLong)::filter(x => x < 3);

  let iter = wrapper[Symbol.iterator]();
  let first = iter.next();
  let second = iter.next();
  let third = iter.next();

  expect(first.value).toEqual(1);
  expect(second.value).toEqual(2);
  expect(third.value).toEqual(undefined);
  expect(third.done).toEqual(true);
}

const testFilter2 = () => {
  console.log('testFilter2');

  const arrLong = [1, 2, 3, 4, 5];

  let wrapper = new IterableWrapper(arrLong)::filter(x => x < 3);

  let index   = 1;

  for (let i of wrapper) {
      expect(i).toEqual(index++);
  }

  expect(index).toEqual(3);
}

// Complext Filter
const testFilter3 = () => {
  console.log('testFilter3');

  const arrLong = [
    {
      amount: 814.53,
      date: "2012-02-02T05:00:00.000Z",
      business: "Huel Group",
      name: "Money Market Account 4068",
      type: "deposit",
      account: 66108624
    },
    {
      amount: 58.39,
      date: "2012-02-02T05:00:00.000Z",
      business: "Torp and Sons",
      name: "Investment Account 2394",
      type: "payment",
      account: 28305257
    },
    {
      amount: 651.25,
      date: "2012-02-02T05:00:00.000Z",
      business: "Senger, Tromp and Boyle",
      name: "Checking Account 8641",
      type: "deposit",
      account: 86801062
    }
  ];

  let wrapper = new IterableWrapper(arrLong)::filter(x => x.amount > 500);

  let count = 0;

  for (let i of wrapper) {
      count++;
  }

  let iter = wrapper[Symbol.iterator]();
  let first = iter.next().value;
  let second = iter.next().value;

  expect(count).toEqual(2);
  expect('deposit').toEqual(first.type);
  expect('deposit').toEqual(second.type);
}

const testMultipleIterators = () => {
  console.log('testMultipleIterators');

  const arrLong = [1, 2, 3, 4, 5];

  let wrapper = new IterableWrapper(arrLong)::filter(x => x <= 3);

  let iter = wrapper[Symbol.iterator]();
  let iter2 = wrapper[Symbol.iterator]();

  let result = iter.next();
  let result2 = iter2.next();

  while (!result.done) {
    // console.log(result.value);
    expect(result.value).toEqual(result2.value);

    result = iter.next();
    result2 = iter2.next();
  }
}

const testReduce = () => {
  console.log('testReduce');

  const arrLong = [1, 2, 3, 4, 5];

  let accumulatorFunc = (prev, curr, index) => {
    //console.log(prev, curr, index);
    return prev + curr;
  };

  let wrapper = new IterableWrapper(arrLong)::reduce(accumulatorFunc);

  let native = arrLong.reduce(accumulatorFunc);

  // console.log(`Native is ${native}`);
  // console.log(`Wrapper was ${wrapper}`);

  expect(native).toEqual(wrapper);
}

export default function runTests() {
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
