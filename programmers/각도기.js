// 문제: 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

// 예각 : 0 < angle < 90
// 직각 : angle = 90
// 둔각 : 90 < angle < 180
// 평각 : angle = 180

// 내가 풀어본 case1 코드 (switch문)
// 작동이 안돼서 챗GPT 검색
function solution(angle) {
  switch(parseInt(angle)) {
      case (0 < angle < 90): return 1
      break;
      case (angle == 90): return 2
      break;
      case (90 < angle < 180): return 3
      break;
      case (angle == 180): return 4
      break;
  }
}

// case1 챗GPT 문제풀이 
function solution(angle) {
  switch(true) {  // switch(조건)이 true일때 아래 명령 실행
      case (0 < angle && angle < 90):  // JS에서는 서로 비교(Chained Comparison)을 지원하지 않음. 즉, '0 < angle < 90'같은 표현은 '0 < angle'평가한 결과 'true'또는'false'를 'true < 90' 또는 'false < 90'으로 비교하게 되는 것임. true는 숫자 1로 처리되고, false는 숫자 0으로 취급되기 때문에 항상 `1 < 90` 또는 `0 < 90`으로 해석되어 어떤 값을 입력해도 항상 'true'로 평가되어 1이 반환되는 것임. 올바른 비교를 위해서는 논리 연산자 (`&&`,`||`)를 사용하여 각각의 비교를 개별적으로 평가하고 조합해야 함.
        return 1
        break;
      case (angle === 90): // 프로그램에서 값을 비교할 떄는 자료형을 자동으로 변환하지 않기 위해 더 엄격한 ===을 사용함
        return 2
        break;
      case (90 < angle && angle < 180): 
        return 3
        break;
      case (angle === 180): 
        return 4
        break;
  }
  
}


// 내가 풀어본 case2 코드 (if~else if문)
// 작동이 안돼서 챗GPT 검색
function solution(angle) {
  if (0 < angle < 90) {  
      console.log(1)
  } else if (angle == 90) {
      console.log(2)    
  } else if (90 < angle < 180) {
      console.log(3)
  } else if (angle == 180) {
      console.log(4)
  }
}


// case2 챗GPT 문제풀이 
function solution(angle) {
  if (0 < angle && angle < 90) {  // JS에서는 서로 비교(Chained Comparison)을 지원하지 않음. 즉, '0 < angle < 90'같은 표현은 '0 < angle'평가한 결과 'true'또는'false'를 'true < 90' 또는 'false < 90'으로 비교하게 되는 것임. true는 숫자 1로 처리되고, false는 숫자 0으로 취급되기 때문에 항상 `1 < 90` 또는 `0 < 90`으로 해석되어 어떤 값을 입력해도 항상 'true'로 평가되어 1이 반환되는 것임. 올바른 비교를 위해서는 논리 연산자 (`&&`,`||`)를 사용하여 각각의 비교를 개별적으로 평가하고 조합해야 함.
      return 1;
  } else if (angle === 90) {  // 프로그램에서 값을 비교할 떄는 자료형을 자동으로 변환하지 않기 위해 더 엄격한 ===을 사용함
      return 2;
  } else if (90 < angle && angle < 180) {
      return 3;
  } else if (angle === 180) {
      return 4;
  }
}


// 다른 사람 문제풀이

// filter사용
function solution(angle) {
  return [0, 90, 91, 180].filter(x => angle>=x).length;
}