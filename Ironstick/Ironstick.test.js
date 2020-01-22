// 1. 레이저()를 L 문자로 치환
// 2. 레이저 위치를 담을 빈 배열과 쇠막대의 위치를 담을 빈 배열을 만듦
// 3. loop을 돌면서 L이 나오면 laser 배열에 index를 push, "("이 나오면 쇠막대 배열에 index를 담은 배열을 push, ")"이 나오면 쇠막대 배열의 마지막부터 확인하면서 element 배열의 길이가 1이면 element배열에 push.
// 4. 쇠막대 배열의 원소(각각의 쇠막대)에서 시작과 끝 사이에 포함되는 laser의 갯수 + 1로 해서 모두 더한다.

function solution(arrangement) {
    const replace = replaceLaser(arrangement);
    const ironSticks = getLocations(replace);
    return sumOfPiece1(ironSticks)
}

const replaceLaser = (arrangement) =>
    arrangement.replace(/[(][)]/g, "L");

const getLocations = (arrangement) => {
    let lasers = []
    let ironsticks = []
    const split = arrangement.split('');
    for (let i = 0; i < split.length; i++) {
        const v = split[i];
        if (v === '(') {
            ironsticks.push([i])
        } else if (v === ')') {
            for (let j = ironsticks.length - 1; j >= 0; j--) {
                if (ironsticks[j].length === 1) {
                    ironsticks[j].push(i)
                    break;
                }
            }
        } else if (v === 'L') {
            lasers.push(i)
        }
    }
    return [ironsticks, lasers];
}

const sumOfPiece1 = (array) => {
    let count = 0;
    array[1].forEach(v => {
        count += array[0].filter(location => {
            return location[0] < v && location[1] > v
        }).length
    });
    return count += array[0].length
}

const sumOfPiece2 = (array) => {
    let count = 0;
    array[0].forEach(stick => {
        for( let i = 0; i < array[1].length; i ++) {
            if( array[1][i] > stick[0] && array[1][i] < stick[1]){
                count++;
            }
            if(array[1][i] > stick[1]) break;
        }
    })
    return count += array[0].length
}

test('solution', () => {
    expect(solution("()(((()())(())()))(())")).toBe(17);
})

test('replaceLaser', () => {
    expect(replaceLaser("()(((()())(())()))(())")).toBe("L(((LL)(L)L))(L)");
})

test('getLocations', () => {
    expect(getLocations("L(((LL)(L)L))(L)")).toEqual([[[1, 12], [2, 11], [3, 6], [7, 9], [13, 15]], [0, 4, 5, 8, 10, 14]]);
})

test('sumOfPiece', () => {
    [sumOfPiece1, sumOfPiece2].forEach(sumOfPiece => {
        expect(sumOfPiece([[[1, 12], [2, 11], [3, 6], [7, 9], [13, 15]], [0, 4, 5, 8, 10, 14]])).toBe(17);
    })
})