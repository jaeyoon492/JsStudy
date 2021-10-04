const mike = {
  name: "Mike",
};

const tom = {
  name: "Tom",
};

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

const updateMike = update.bind(mike); //update.bind(mike)를 updateMike에 초기화
const updateTom = update.bind(tom);

console.log(updateMike); //[Function: bound update] 로 (mike)전용 바인드 함수가 들어가 있음

updateMike(1995, "police"); //mike의 속성만 추가됨
updateTom(2000, "coder");

console.log(mike);
console.log(tom);
