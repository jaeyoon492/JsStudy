let user = {
  // 서드파티 코드에서 가져온 객체
  name: "John",
};

let id = Symbol("id");

user[id] = 1;

console.log(user[id]);
