function makeCounter() {
  let num = 0;

  return function () {
    return num++;
  };
}

let counter = makeCounter();
let counters = makeCounter();

console.log(counter()); //0
console.log(counter()); //1
console.log(counter()); //2
console.log(counters()); //0
console.log(counters()); //1

// 익명함수마다 별도의 환경이 만들어짐
/**
 * 전역 렉시컬 :
 *      makeCounter
 *      counter
 *      counters
 *
 * -------------------------------
 *
 * makeCounter 렉시컬 :
 *      num : 0
 *
 * 익명함수 렉시컬 counter:
 *
 * --------------------------------
 *
 * makeCounter 렉시컬 :
 *      num : 0
 *
 * 익명함수 렉시컬 counters:
 *
 */
