let one; // Lexical Environment 에 등록됨 // 초기화는 안됨 = undefined
one = 1; // 변수 초기화 = 1
let two = 2;

//Lexical Environment에 등록됨 // 함수선언문은 렉시컬환경에 등록되자마자 초기화됨 = 사용 가능
function addOne(num) {
  console.log(one + num);
}
//변수에 할당하는 함수 표현식은 초기화가 안되어 있기 때문에 사용 불가
let addTwo = (num) => {
  //1. 함수가 실행되면 내부 렉시컬 환경에서 값을 찾는다.
  //2. num은 내부 렉시컬에 존재 하므로 찾았지만 two는 없으니 찾는 범위 반경을 내부 -> 전역으로 넓혀서 찾는다.
  //3. 전역 렉시컬에 있는 two를 발견하여 함수룰 실행
  console.log(two + num);
};

addOne(5); // 새로운 Lexical Environment에 등록됨 넘겨받은 매개변수 와 지역변수가 저장됨 num:5
