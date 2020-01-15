// 1. 참여선수의 배열을 돌면서 선수이름을 key로하고 value를 명수로하는 객체를 만든다.
// 2. 완주선수의 배열을 돌면서 1번에서 만든 객체에서 해당이름의 수를 -1씩 뺀다.
// 3. 객체를 돌면서 value가 1인 key를 찾는다.

const inCompletion = (participant, completion) => {
  const hashTable = makeHashTable(participant);
  const inCompletion = removeKey(hashTable, completion);
  return findInCompletion(inCompletion);
};

const makeHashTable = arr =>
  arr.reduce((acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 1 }), {});

const removeKey = (hashTable, completion) => {
  return completion.reduce(
    (participant, player) => ({
      ...participant,
      [player]: participant[player] - 1
    }),
    hashTable
  );
};

const findInCompletion = inCompletion => {
  for (let [key, value] of Object.entries(inCompletion)) {
    if (value === 1) return key;
  }
};

test("inCompletion", () => {
  expect(inCompletion(["leo", "kiki", "eden"], ["eden", "kiki"])).toBe("leo");
});

test("makeHashTable", () => {
  expect(makeHashTable(["leo", "kiki", "eden"])).toEqual({
    leo: 1,
    kiki: 1,
    eden: 1
  });
  expect(makeHashTable(["leo", "kiki", "eden", "kiki"])).toEqual({
    leo: 1,
    kiki: 2,
    eden: 1
  });
});

test("removeKey", () => {
  expect(
    removeKey(
      {
        leo: 1,
        kiki: 1,
        eden: 1
      },
      ["leo", "kiki"]
    )
  ).toEqual({
    leo: 0,
    kiki: 0,
    eden: 1
  });
});

test("findInCompletion", () => {
  expect(
    findInCompletion({
      leo: 0,
      kiki: 0,
      eden: 1
    })
  ).toBe("eden");
});
