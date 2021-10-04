function showName(name) {
  console.log(name);
}

const tId = setInterval(showName, 1000, "명재윤");

setTimeout(clearInterval, 4000, tId);
