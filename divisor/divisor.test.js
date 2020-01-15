const divisor = (arr, divisor) => {
  const filtered = filter(arr, divisor);
  return sortByAscending(filtered);
};

const filter = (arr, divisor) => {
  const filtered = arr.filter(value => value % divisor === 0);
  if (filtered.length === 0) {
    return [-1];
  }
  return filtered;
};

const sortByAscending = arr => 
  arr.sort((a, b) => a - b);

test("divisor", () => {
  expect(divisor([5, 9, 7, 10], 5)).toEqual([5, 10]);
  expect(divisor([2, 36, 1, 3], 1)).toEqual([1, 2, 3, 36]);
  expect(divisor([3, 2, 6], 10)).toEqual([-1]);
});

test("filter", () => {
  expect(filter([5, 9, 7, 10], 5)).toEqual([5, 10]);
  expect(filter([2, 36, 1, 3], 5)).toEqual([-1]);
  expect(filter([2, 36, 1, 3], 1)).toEqual([2, 36, 1, 3]);
  expect(filter([3, 2, 6], 10)).toEqual([-1]);
});

test("sortByAscending", () => {
  expect(sortByAscending([2, 36, 1, 3])).toEqual([1, 2, 3, 36]);
});
