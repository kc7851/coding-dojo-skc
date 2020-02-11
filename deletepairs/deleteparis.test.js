// 1. 빈 배열을 만든다.
// 2. 주어진 문자열을 loop을 돌면서 1번에서 만든 배열의 마지막 element와 같으면 pop()으로 마지막 element를 제거하고, 같지 않으면 배열에 해당 index의 문자열을 추가한다. push()
// 3. loop이 끝나고 1번의 배열의 길이가 0이면 true 아니면 false를 반환

const deletePairs1 = str => {
  const stack = [];
  [...str].forEach((v, i) => {
    if (getLastElement(stack) === v) {
      stack.pop();
    } else {
      stack.push(v);
    }
  });
  return stack[0] === undefined ? 1 : 0;
};

const deletePairs2 = str => {
  const stack = [...str].reduce((acc, cur) => {
    return cur === getLastElement(acc)
      ? acc.filter((v, i) => i < acc.length - 1)
      : [...acc, cur];
  }, []);

  return stack.length === 0 ? 1 : 0;
};

const deletePairs3 = str => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    getLastElement(stack) === str[i] ? stack.pop() : stack.push(str[i]);
    if (stack.length > str.length / 2) {
      return 0;
    }
  }
  return (!stack.length && 1) || 0;
};

const getLastElement = arr => {
  return arr[arr.length - 1];
};

const pickChar = (str, index) => {
  return str[index];
};

test("deletePairs", () => {
  [deletePairs1, deletePairs2, deletePairs3].forEach(deletePairs => {
    expect(deletePairs("baabaa")).toBe(1);
    expect(deletePairs("cdcdcdcdcdcdcdc")).toBe(0);
  });
});

test("getLastElement", () => {
  expect(getLastElement([1, 2, 3])).toBe(3);
  expect(getLastElement(["a", "b", "c"])).toBe("c");
});

test("pickChar", () => {
  expect(pickChar("abc", 0)).toBe("a");
  expect(pickChar("abc", 1)).toBe("b");
  expect(pickChar("abc", 2)).toBe("c");
});
