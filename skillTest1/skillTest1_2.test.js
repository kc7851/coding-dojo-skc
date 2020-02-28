const evenOrOdd = (num) => {
  const answer = num % 2 === 0 ? 'Even' : 'Odd';
  return answer;
};

test("evenOrOdd", () => {
  expect(evenOrOdd(3)).toBe("Odd");
  expect(evenOrOdd(4)).toBe("Even");
});
