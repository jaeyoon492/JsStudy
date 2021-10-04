function solution(new_id) {
  const sec1 = toLowerCases(new_id);
  console.log(sec1);
  const sec2 = deleteCase(sec1);
  console.log(sec2);
  const sec3 = combineDot(sec2);
  console.log(sec3);
  const sec4 = deleteFirstAndLastDot(sec3);
  console.log(sec4);
  const sec5 = replaceEmptySpace(sec4);
  console.log(sec5);
  const sec6 = cutOverSixteenLength(sec5);
  console.log(sec6);
  const sec7 = fillLastCase(sec6);
  console.log(sec7);
  var answer = sec7;
  return answer;
}

function toLowerCases(id) {
  const lowerId = id.toLowerCase();
  return lowerId;
}

function deleteCase(id) {
  const idArr = id.split("");
  const newArr = [];

  idArr.map((item) => {
    for (let i = 97; i <= 122; i++) {
      if (item === String.fromCodePoint(i)) {
        newArr.push(item);
      }
    }
    if (+item > 0 && +item < 9) {
      newArr.push(item);
    }
    if (item === "." || item === "_" || item === "-") {
      newArr.push(item);
    }
  });
  return newArr;
}

function combineDot(idArr) {
  let i = 0;
  while (true) {
    if (idArr[i] === "." && idArr[i + 1] === ".") {
      idArr.splice(i, 1);
    } else {
      i++;
      if (i === idArr.length) {
        break;
      }
    }
  }
  return idArr;
}

function deleteFirstAndLastDot(idArr) {
  if (idArr[0] === ".") {
    idArr.shift();
  }
  if (idArr[idArr.length - 1] === ".") {
    idArr.pop();
  }
  return idArr.join("");
}

function replaceEmptySpace(id) {
  const idArr = id.split("");
  idArr.length == 0 ? idArr.push("a") : "";
  return idArr;
}

function cutOverSixteenLength(idArr) {
  if (idArr.length >= 16) {
    idArr.splice(15);
  }
  const newId = deleteFirstAndLastDot(idArr);
  return newId.split("");
}

function fillLastCase(idArr) {
  if (idArr.length <= 2) {
    while (true) {
      idArr.push(idArr[idArr.length - 1]);
      if (idArr.length === 3) break;
    }
  }
  return idArr.join("");
}

solution("123_.def");
