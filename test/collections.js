import expect, { createSpy, spyOn, isSpy } from 'expect';

import { List } from '../js/utils';

const testList= () => {
  console.log('testList');

  const arrLong = [1, 2, 3, 4, 5];

  let list = new List(arrLong);
  let iter = list[Symbol.iterator]();

  let first = iter.next();
  let second = iter.next();
  let third = iter.next();

  expect(first.value).toEqual(1);
  expect(second.value).toEqual(2);
  expect(third.value).toEqual(3);

  let index = 1;

  for (let i of list) {
    expect(index++).toEqual(i);
  }
}

export default function runTests() {
  testList();

  console.log('\r');
  console.log('All utils tests passed.');
}
