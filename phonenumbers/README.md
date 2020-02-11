# 전화번호 목록
[https://programmers.co.kr/learn/courses/30/lessons/42577](https://programmers.co.kr/learn/courses/30/lessons/42577)

1. 이해
input: 전화번호를 담은 배열
어떤 번호가 다른 번호의 접두어인 경우가 있으면 false, 그렇지 않으면 true를 반환

제한 사항
* phone_book의 길이는 1 이상 1,000,000 이하입니다.
* 각 전화번호의 길이는 1 이상 20 이하입니다.

2. 계획
   1. loop 돌면서 startsWith 하면서 true가 나오면 false를 반환
3. 실행

4. 회고
* 사이트에는 javascript가 없어서 java로 옮겨서 풀었는데 효율성까지 통과하였다.
* 처음에는 j를 초기화할 때 i+1로 했었는데, 7,8번이 통과하지 못하여서 0으로 변경하였다.
* j 초기화를 i+1로 하기위해서는 주어진 배열을 각 원소의 길이(length)를 기준으로 오름차순정렬을 하면 가능할 것 같다.
* 그런데 효율성이 n2임에도 불구하고 통과가 되었다. 뭔가 이상하다.