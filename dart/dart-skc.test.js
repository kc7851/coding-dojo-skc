const totalScore = scoreSet => {
  let scoreArray = [];
  const setArray = splitSet(scoreSet);

  setArray.forEach((set, index) => {
    let score = computeScore(set);
    if (set.includes("*")) {
      score *= 2;
      scoreArray[index - 1] *= 2;
    } else if (set.includes("#")) {
      score *= -1;
    }
    scoreArray.push(score);
  });

  return scoreArray.reduce((acc, cur) => (acc = acc + cur), 0);
};

const splitSet = scoreSet => {
  const pattern = /\d*\w[\*#]?/g;

  return scoreSet.match(pattern);
};

const computeScore = set => {
  let score = parseInt(set);

  if (set.includes("D")) {
    score *= score;
  } else if (set.includes("T")) {
    score *= score * score;
  }

  return score;
};

test("splitSet", () => {
  expect(splitSet("1S2D*3T")).toEqual(["1S", "2D*", "3T"]);
});

test("totalScore", () => {
  expect(totalScore("1S2D*3T")).toBe(37);
  expect(totalScore("1D2S#10S")).toBe(9);
  expect(totalScore("1D2S0T")).toBe(3);
  expect(totalScore("1T2D3D#")).toBe(-4);
  expect(totalScore("1D2S3T*")).toBe(59);
});

test("computeScore", () => {
  expect(computeScore("3S")).toBe(3);
  expect(computeScore("9D")).toBe(81);
  expect(computeScore("9T")).toBe(729);
});

const regExpTest1 = scoreSet => {
  const pattern = /\d*\w[\*#]?/g;
  return scoreSet.match(pattern);
};

const regExpTest2 = scoreSet => {
  const pattern = /[0-9]{1,2}[SDT][\*#]?/g;
  return scoreSet.match(pattern);
};

const regExpTest3 = scoreSet => {
  const pattern = /[0-9]{1,2}.[\*#]?/g;
  return scoreSet.match(pattern);
};

test("regExpTest", () => {
  [regExpTest1, regExpTest2, regExpTest3].forEach(regExpTest => {
    expect(regExpTest("1S2D*3T")).toEqual(["1S", "2D*", "3T"]);
    expect(regExpTest("10S#2D*1T#")).toEqual(["10S#", "2D*", "1T#"]);
  });
});
