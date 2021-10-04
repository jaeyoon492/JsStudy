let user = {
  name: "John",
  age: 30,
};

let clone = {};

for (let key in user) {
  clone[key] = user[key];
}

clone.name = "Pete";

console.log(user.name);
