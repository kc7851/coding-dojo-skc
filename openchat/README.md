# 오픈채팅방
[https://programmers.co.kr/learn/courses/30/lessons/42888](https://programmers.co.kr/learn/courses/30/lessons/42888)

1. 이해
input: 채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열 ("Enter uid1234 Muzi" 형태)
output: 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 ("Prodo님이 들어왔습니다."형태)
2. 계획
    1. 빈 객체를 만든다.
    2. 빈 공백 " "으로 split하여 command, userId, nickName으로 분리한다. 
    3. userId를 key로하고 nickName을 value로하여 객체에 넣는다.
    4. 명령이 Enter, Change일 경우에만 2번을 실행한다.
    5. 동시에 Enter와 Leave 명령일 경우에 명령어와 userId를 빈 배열에 담아둔다.
    6. 5번의 배열을 돌면서 userId로 객체에서 값을 찾아서 명령어에 따라 값을 붙여주어 배열로 만든다. 
3. 실행

4. 회고