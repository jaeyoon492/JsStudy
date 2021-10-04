setTimeout(() => {
  console.log(2);
}, 0);

console.log(1);

//delay가 0ms 여도 1이 먼저 실행되고 2가 찍힘
// 브라우저는 기본 4ms의 기본대기시간이 존재한다.
// 0이라고 적어도 4ms 혹은 그이상이 걸릴수 있다.
