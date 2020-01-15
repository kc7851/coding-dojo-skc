# K번째수
[https://programmers.co.kr/learn/courses/30/lessons/42748](https://programmers.co.kr/learn/courses/30/lessons/42748)

1. 이해
array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하라.
[1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
    1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
    2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
    3. 2에서 나온 배열의 3번째 숫자는 5입니다.
조건
* array의 길이는 1 이상 100 이하입니다.
* array의 각 원소는 1 이상 100 이하입니다.
* commands의 길이는 1 이상 50 이하입니다.
* commands의 각 원소는 길이가 3입니다.
2. 계획
    1. 주어진 배열을 i번째부터 j번째까지 자른다.
    2. 자른 배열을 오름차순으로 정렬한다.
    3. k번째 수를 구한다.
3. 실행

4. 회고
* array.slice는 array를 변경시키지 않는다.
* slice의 인자로 begin, end가 들어가면 end번째 element는 포함되지 않는다.
* 2번째 부터 5번째를 구하면 slice(1,5)가 들어간다.