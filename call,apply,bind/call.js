const mike = {
  name: "Mike",
};

const tom = {
  name: "Tom",
};

function showThisName() {
  console.log(this.name);
}

showThisName.call(mike);

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(tom, 1995, "singer");
console.log(tom);

update.call(mike, 1988, "dancer");
console.log(mike);

//call메소드는 어떤함수의 this를 정해줄수 있다.
//call메소드의 첫번째 인자에 함수의 this를 정해주고 나머지 인자는 해당 함수의 매개변수에 맞춰서 값을 넣으면 된다.
