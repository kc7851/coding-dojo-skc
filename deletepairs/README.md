# 짝지어 제거하기
[https://programmers.co.kr/learn/courses/30/lessons/12973](https://programmers.co.kr/learn/courses/30/lessons/12973)

1. 이해
    1. 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다.
    2. 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다.
    3. 이 과정을 반복해서 문자열을 모두 제거한다면 true, 아니면 false를 반환
## 조건
* 문자열의 길이 : 1,000,000이하의 자연수
* 문자열은 모두 소문자로 이루어져 있습니다.

2. 계획
    1. 빈 배열을 만든다.
    2. 주어진 문자열을 loop을 돌면서 1번에서 만든 배열의 마지막 element와 같으면 pop()으로 마지막 element를 제거하고, 같지 않으면 배열에 해당 index의 문자열을 추가한다. push()
    3. loop이 끝나고 1번의 배열의 길이가 0이면 true 아니면 false를 반환
3. 실행

4. 회고
* 총 3가지 방법으로 풀어봤는데 1,2번은 효율성을 통과하지 못하였다.
* string 문자열을 spread연산자로 배열로 만드는게 많은 시간이 걸린다는것을 알았다. [...str]
* string 문자열을 배열로 만들지 않아도 index값을 가져올 수 있다는것을 알았다. "abc"[0] > "a"