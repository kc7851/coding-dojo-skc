# 다리를 지나는 트럭
[https://programmers.co.kr/learn/courses/30/lessons/42583](https://programmers.co.kr/learn/courses/30/lessons/42583)

1. 이해
* 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 함.
* 트럭은 1초에 1만큼 움직임
* 다리 길이는 bridge_length
* 견딜 수 있는 무게 weight
input: bridge_length, weight, truck_weight배열
output: 트럭이 모두 지나간 시간
2. 계획
    1. 다리 길이 만큼의 빈 배열을 만든다.
    2. 배열의 앞을 삭제하고(shift) shift된 값을 현재 다리 위 트럭 무게의 총합에서 뺀다.
    3. 다리 위 트럭 무게의 총합과 대기트럭의 0번째 index의 트럭 무게의 합이 다리 weight보다 작으면 트럭을 push한다. weight를 넘으면 0을 push한다.
    4. while 문으로 loop을 돌면서 대기트럭 배열의 길이가 0이고 다리위의 무게의 총합이 0이면 종료하고, count를 반환한다.
3. 실행

4. 회고
* 종료조건을 잘 사용해야 한다.