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

update.apply(tom, [1995, "singer"]);
console.log(tom);

update.apply(mike, [1988, "dancer"]);
console.log(mike);

//apply는 함수의 매개변수를 배열(한덩어리)로 받는다.
