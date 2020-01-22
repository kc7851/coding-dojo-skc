// 1. 레이저()를 L 문자로 치환
// 2. 레이저 위치를 담을 빈 배열과 쇠막대의 위치를 담을 빈 배열을 만듦
// 3. loop을 돌면서 L이 나오면 laser 배열에 index를 push, "("이 나오면 쇠막대 배열에 index를 담은 배열을 push, ")"이 나오면 쇠막대 배열의 마지막부터 확인하면서 element 배열의 길이가 1이면 element배열에 push.
// 4. 쇠막대 배열의 원소(각각의 쇠막대)에서 시작과 끝 사이에 포함되는 laser의 갯수 + 1로 해서 모두 더한다.

function solution(arrangement) {
    const replace = replaceLaser(arrangement);
    const lasers = getLaserLocations(replace);
    const ironSticks = getIronstickLocations(replace);
    return sumOfPiece(ironSticks, lasers)
}

const replaceLaser = (arrangement) => {
    return arrangement.replace(/[(][)]/g, "L");
}

const getLaserLocations = (arrangement) => {
    return [...arrangement].reduce((acc, cur, index) => {
        return cur === 'L' ? [...acc, index] : acc
    }, [])
}

const getIronstickLocations = (arrangement) => {
    let locations = []
    const split = arrangement.split('');
    for(let i = 0; i < split.length; i++){
        const v = split[i];
        if(v === '(') {
            locations.push([i])
        }else if(v === ')') {
            for (let j = locations.length - 1; j >= 0; j--){
                if(locations[j].length === 1){
                    locations[j].push(i)
                    break;
                }
            }
        }
    }
    return locations;
}

const sumOfPiece = (ironSticks, lasers) => {
    let count = 0;
    lasers.forEach(v => {
        count += ironSticks.filter(location => {
            return location[0] < v && location[1] > v
        }).length
    });
    return count += ironSticks.length
}

test('solution', () => {
    expect(solution("()(((()())(())()))(())")).toBe(17);
})

test('replaceLaser', () => {
    expect(replaceLaser("()(((()())(())()))(())")).toBe("L(((LL)(L)L))(L)");
})

test('getLaserLocations', () => {
    expect(getLaserLocations("L(((LL)(L)L))(L)")).toEqual([0, 4, 5, 8, 10, 14]);
})

test('getIronstickLocations', () => {
    expect(getIronstickLocations("L(((LL)(L)L))(L)")).toEqual([[1, 12], [2, 11], [3, 6], [7, 9], [13, 15]]);
})

test('sumOfPiece', () => {
    expect(sumOfPiece([[1, 12], [2, 11], [3, 6], [7, 9], [13, 15]], [0, 4, 5, 8, 10, 14])).toBe(17);
})