# 같은 숫자는 싫어
[https://programmers.co.kr/learn/courses/30/lessons/12906](https://programmers.co.kr/learn/courses/30/lessons/12906)

1. 조건
* 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거
* arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1]
* arr = [4, 4, 4, 3, 3] 이면 [4, 3] 

* input: 숫자의 배열
* output: 연속으로 중복된 숫자를 제거한 배열

2. 계획
    1. 빈 배열을 만든다.
    2. input array를 for loop돌면서 현재 index의 값이 이전 index의 값과 다르면 빈 배열에 push한다.
    혹은 1번 배열의 가장 마지막 index의 값이 현재 index의 값과 다르면 빈 배열에 push한다.

3. 실행

4. 회고
* reduce 말고도 filter로도 풀 수 있었습니다.
* 먼저 reduce로만 풀려고 하지 않도록 해야겠습니다.
* 3항 연산자에서 else 일 때 acc를 돌려주는 reduce 일 때는 filter의 사용을 고려하면 좋을 것 같습니다.