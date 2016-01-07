import expect, { createSpy, spyOn, isSpy } from 'expect';

import Iterable, {
  IterableWrapper
} from '../js/iter';

import { filter, map, reduce } from '../js/pull';

import { first, last, single, skip, take } from '../js/pulloperators';

const testFirst = () => {
  console.log('testFirst');

  const arrLong = [1, 2, 3, 4, 5];

  let result = new IterableWrapper(arrLong)::first();

  expect(1).toEqual(result);
}

const testLast = () => {
  console.log('testLast');

  const arrLong = [1, 2, 3, 4, 5];

  let result = new IterableWrapper(arrLong)::last();

  expect(5).toEqual(result);
}

const testSingle = () => {
  console.log('testSingle');

  const arrLong = [7];

  let result = new IterableWrapper(arrLong)::single();

  expect(7).toEqual(result);
}

const testSingle2 = () => {
  console.log('testSingle2');

  const arrLong = [1,2];
  let throws = () => new IterableWrapper(arrLong)::single();

  expect(throws).toThrow('More than one item found');
}

const testSkipWhile = () => {
  console.log('testSkipWhile');

  const arrLong = [1, 2, 3, 4, 5];

  let threeFourAndFive = [...new IterableWrapper(arrLong)::skip(2)];

  expect(threeFourAndFive[0]).toEqual(3);
  expect(threeFourAndFive[1]).toEqual(4);
  expect(threeFourAndFive[2]).toEqual(5);
}

const testSkipWhile2 = () => {
  console.log('testSkipWhile2');

  const arrLong = [1, 2, 3, 4, 5];

  let threeFourAndFive = [...new IterableWrapper(arrLong)::skip(x => x < 3)];

  expect(threeFourAndFive[0]).toEqual(3);
  expect(threeFourAndFive[1]).toEqual(4);
  expect(threeFourAndFive[2]).toEqual(5);
}

const testTakeWhile = () => {
  console.log('testTakeWhile');

  const arrLong = [1, 2, 3, 4, 5];

  let oneTwoAndThree = [...new IterableWrapper(arrLong)::take(x => x <= 3)];

  expect(oneTwoAndThree[0]).toEqual(1);
  expect(oneTwoAndThree[1]).toEqual(2);
  expect(oneTwoAndThree[2]).toEqual(3);
}

export default function runTests() {
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
