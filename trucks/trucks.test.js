const solution = (bridge_length, weight, truck_weights) => {
    let bridge = new Array(bridge_length).fill(0);
    let waiting = [...truck_weights];
    let sumOfWeights = 0;
    let count = 0;

    while ( waiting.length > 0) {
        const passTruck = bridge.shift();
        sumOfWeights -= passTruck;
        const next = waiting[0];

        if (sumOfWeights + next > weight) {
            bridge.push(0);
        } else {
            sumOfWeights += next;
            bridge.push(waiting.shift());
        }

        count++;
    }
    return count + bridge_length;
}

test('solution', () => {
    expect(solution(2, 10, [7,4,5,6])).toBe(8);
    expect(solution(100, 100, [10])).toBe(101);
    expect(solution(100, 100, [10,10,10,10,10,10,10,10,10,10])).toBe(110);
})
