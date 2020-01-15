const getCorrectSkillCount = (skillTree, skills) => {
  const patter = new RegExp(`[^${skillTree}]`, "g");

  return skills.filter(skill => skillTree.startsWith(skill.replace(patter, "")))
    .length;
};

test("getCorrectSkillCount", () => {
  expect(getCorrectSkillCount("CBD", ["BACDE", "CBADF", "AECB", "BDA"])).toBe(
    2
  );
});

const getFilteredSkillWithRegExp = (skillTree, skill) => {
  const patter = new RegExp("[^" + skillTree + "]", "g");

  return skill.replace(patter, "");
};

test("getFilteredSkillWithRegExp", () => {
  expect(getFilteredSkillWithRegExp("CBD", "BACDE")).toBe("BCD");
  expect(getFilteredSkillWithRegExp("CBD", "AACAABAAACDAAE")).toBe("CBCD");
});
