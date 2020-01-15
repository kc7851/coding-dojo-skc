const kthNumber = (arr, commands) => {
  return commands.reduce((acc, cur) => {
    const splice = sliceArray(arr, cur[0], cur[1]);
    const sorted = sortByAscending(splice);
    const kth = getKthNumber(sorted, cur[2]);
    return [...acc, kth];
  }, []);
};

const sliceArray = (arr, i, j) => arr.slice(i - 1, j);

const sortByAscending = arr => [...arr].sort((a, b) => a - b);

const getKthNumber = (arr, kth) => arr[kth - 1];

test("kthNumber", () => {
  expect(
    kthNumber(
      [1, 5, 2, 6, 3, 7, 4],
      [
        [2, 5, 3],
        [4, 4, 1],
        [1, 7, 3]
      ]
    )
  ).toEqual([5, 6, 3]);
});

test("sliceArray", () => {
  expect(sliceArray([1, 5, 2, 6, 3, 7, 4], 2, 5)).toEqual([5, 2, 6, 3]);
  expect(sliceArray([1, 5, 2, 6, 3, 7, 4], 4, 4)).toEqual([6]);
});

test("sortByAscending", () => {
  expect(sortByAscending([5, 2, 6, 3])).toEqual([2, 3, 5, 6]);
});

test("getKthNumber", () => {
  expect(getKthNumber([2, 3, 5, 6], 3)).toBe(5);
});
