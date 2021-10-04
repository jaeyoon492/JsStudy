// function fn() {
//   console.log("hi");
// }

function showName(name) {
  console.log(name);
}

// setTimeout(fn, 3000);
const tId = setTimeout(showName, 3000, "명재윤");
//setTimeout은 timeID를 반환하는데
//clearTimeout으로 취소 할수있다 setTimeout은 비동기 이기 때문에
//setTimeout가 실행되는 도중에 clearTimeout(tId)가 진행되어 취소시키는 것이다.
clearTimeout(tId);
