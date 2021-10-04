let user = {
  name: "Kim",
  age: 30,
};

let clone = Object.assign({}, user);

console.log(clone);
// { name: 'Kim', age: 30 }
