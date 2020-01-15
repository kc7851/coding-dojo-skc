// 1. 빈 배열을 만든다.
// 2. input array를 for loop돌면서 현재 index의 값이 이전 index의 값과 다르면 빈 배열에 push한다.
// 혹은 1번 배열의 가장 마지막 index의 값이 현재 index의 값과 다르면 빈 배열에 push한다.

const noRepeat1 = arr => {
  let results = [];
  arr.forEach((value, index) => {
    if (value !== arr[index - 1]) {
      results.push(value);
    }
  });
  return results;
};

const noRepeat2 = arr => {
  let results = [];
  arr.forEach(value => {
    if (value !== getLastIndexValue(results)) {
      results.push(value);
    }
  });
  return results;
};

const noRepeat3 = arr =>
  arr.reduce(
    (acc, cur) => (cur !== getLastIndexValue(acc) 
    ? [...acc, cur] 
    : acc),
    []
  );

const noRepeat4 = arr => 
  arr.filter((value, index) => 
    value !== arr[index - 1]);

const getLastIndexValue = arr => {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[arr.length - 1];
};

test("noRepeat ", () => {
  [noRepeat1, noRepeat2, noRepeat3, noRepeat4].forEach(noRepeat => {
    expect(noRepeat([1, 1, 3, 3, 0, 1, 1])).toEqual([1, 3, 0, 1]);
    expect(noRepeat([4, 4, 4, 3, 3])).toEqual([4, 3]);
  });
});

test("getLastIndexValue", () => {
  expect(getLastIndexValue([4, 4, 4, 3, 3])).toBe(3);
  expect(getLastIndexValue([])).toBe(undefined);
});
