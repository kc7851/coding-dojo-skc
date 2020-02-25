const solution = records => {
  let nickNames = {};
  const enterAndLeaves = [];
  const commands = {
      Enter: "님이 들어왔습니다.",
      Leave: "님이 나갔습니다."
  }
  const results = [];

  records.forEach(record => {
    const [command, userId, nickName] = split(record);
    if (command !== "Leave") {
      nickNames[userId] = nickName;
    }
    if (command !== "Change") {
      enterAndLeaves.push([command, userId]);
    }
  });

  enterAndLeaves.forEach(enterAndLeave => {
      const [command, userId] = enterAndLeave;
      const nickName = nickNames[userId];
      results.push(nickName + commands[command])
  })

  return results;
};

const split = str => {
  return str.split(" ");
};

const convertToObj = arr => {
  let obj = {};
  obj[arr[1]] = arr[2];
  return obj;
};

test("solution", () => {
  expect(
    solution([
      "Enter uid1234 Muzi",
      "Enter uid4567 Prodo",
      "Leave uid1234",
      "Enter uid1234 Prodo",
      "Change uid4567 Ryan"
    ])
  ).toEqual([
    "Prodo님이 들어왔습니다.",
    "Ryan님이 들어왔습니다.",
    "Prodo님이 나갔습니다.",
    "Prodo님이 들어왔습니다."
  ]);
});

test("split", () => {
  expect(split("Enter uid1234 Muzi")).toEqual(["Enter", "uid1234", "Muzi"]);
});

test("convertToObj", () => {
  expect(convertToObj(["Enter", "uid1234", "Muzi"])).toEqual({
    uid1234: "Muzi"
  });
});
