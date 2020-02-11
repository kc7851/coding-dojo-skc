const solution = (phoneBook) => {
    for (let i = 0; i < phoneBook.length - 1; i++) {
        for (let j = 0; j < phoneBook.length; j++) {
            if(i === j)continue;
            if (phoneBook[j].startsWith(phoneBook[i])) {
                return false;
            }
        }
    }
    return true;
}

test('solution', () => {
    expect(solution(['119', '97674223', '1195524421'])).toBe(false);
    expect(solution(['123', '456', '789'])).toBe(true);
    expect(solution(['12', '123', '1235', '567', '88'])).toBe(false);
})