//1. 전역 레시컬 환경에 makeAdder 과 add3 을 등록 [makeAdder는 함수선언이므로 초기화 없이 사용가능], [add3은 초기화 없이 사용 불가]
//2. const add3 = makeAdder(3) 가 실행되면 makeAdder 내부 렉시컬환경에 x=3 이 등록되고 function(y) 함수를 리턴함
//3. add3 내부 렉시컬 환경에 리턴받은 function(y){return x + y} 가 등록됨
//4. console.log(add3(2)) 로 add3의 내부렉시컬의  y : 2를 등록함
//5. function(y)를 실행 => function (y)는 x를 상위함수 렉시컬 환경에서 찾고 y는 내부에서 사용하여 리턴해줌

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add3 = makeAdder(3);
console.log(add3(2)); //5

const add10 = makeAdder(10);
console.log(add10(5)); //15
console.log(add3(1)); //4

/**
 *  전역 Lexical :
 *      makeAdder : function
 *      add3 : function
 *
 * makeAdder Lexical :
 *      x : 3
 *
 * 익명함수 Lexical :
 *      y : 2
 */
