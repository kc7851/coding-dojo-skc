# 스킬트리
[https://programmers.co.kr/learn/courses/30/lessons/49993](https://programmers.co.kr/learn/courses/30/lessons/49993)

1. 이해

- 주어진 스킬트리에 순서에 맞게 배울 스킬을 나열한 사람의 수를 구한다.
  스킬틀에 포함되어있지 않은 스킬이면 어디에 들어가도 상관없음.

- 입력값: 스킬트리, 사용자들이 배우려고하는 스킬순서들
  출력값: 주어진 스킬트리에 순서에 맞게 배울 스킬을 나열한 사람의 수

2. 계획

   1. 정규표현식을 사용하여 skillTrees의 원소들의 값에서 skill에 포함되는 값을 모두 제거한다.
   2. filtered된 스킬들의 길이만큼 주어진 skill(스킬트리값)와 일치하는지 확인한다.
   3. filter를 사용해서 2번의 length를 구한다.

3. 실행

4. 회고
- 정규식을 사용해서 다시 풀었다. String.replace('pattern', 'wanted')를 사용했다.
- `[^${skillTree}]` 문자열을 다룰 때 백쿼트를 쓰면 편하다는 것을 배웠다.
- 필터링된 값이 '' 빈문자열이어도 true가 되어야 한다.
