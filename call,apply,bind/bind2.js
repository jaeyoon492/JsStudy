const user = {
  name: "Mike",
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};

const tom = {
  name: "Tom",
};

user.showName();

let fn = user.showName; //fn 에는 showName 함수 만 들어감 this는 사라짐.

fn.call(user);
fn.apply(user);

const boundFn = fn.bind(user); //showName 함수에 this를 tom으로 영구지정.
const boundFn2 = fn.bind(tom); //showName 함수에 this를 tom으로 영구지정.
boundFn(); //hello, Mike
boundFn2(); //hello, Tom
