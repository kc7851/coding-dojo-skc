function solution(arrangement) {
    let count = 0;
    let stack = 0;
    const replace = replaceLaser(arrangement);

    [...replace].forEach(v => {
        switch (v) {
            case "(":
                stack += 1;
                break;
            case "L":
                count += stack;
                break;
            case ")":
                stack -= 1;
                count += 1;
                break;
        }
    })
    return count;
}

const replaceLaser = (arrangement) =>
    arrangement.replace(/[(][)]/g, "L");

test('solution', () => {
    expect(solution("()(((()())(())()))(())")).toBe(17);
})

test('replaceLaser', () => {
    expect(replaceLaser("()(((()())(())()))(())")).toBe("L(((LL)(L)L))(L)");
})