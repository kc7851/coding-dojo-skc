function solution1(arr) {
  if (arr.length === 1) return [-1];
  const minIndex = getMinIndex(arr);
  const result = arr.filter((v, i) => i !== minIndex);

  return result;
}

function solution2(arr) {
  if (arr.length === 1) return [-1];
  const minIndex = getMinIndex(arr);
  const answer = [...arr];
  answer.splice(minIndex, 1);

  return answer;
}

const getMinIndex = arr => {
  let minIndex = 0;
  let minValue = arr[0];

  arr.forEach((v, i) => {
    if (v < minValue) {
      minValue = v;
      minIndex = i;
    }
  });
  
  return minIndex;
};

test("solution", () => {
  [solution1, solution2].forEach(solution => {
    expect(solution([4, 3, 2, 1])).toEqual([4, 3, 2]);
    expect(solution([10])).toEqual([-1]);
  })
});

test("getMinIndex", () => {
  expect(getMinIndex([4, 3, 2, 1])).toBe(3);
});