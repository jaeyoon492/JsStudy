let id = Symbol("id");

user[id] = "제3 스크립트 id 값";

let user = { name: "John" };

// 문자열 "id"를 사용해 식별자를 만들었습니다.
user.id = "스크립트 id 값";

// 의도치 않게 값이 덮어 쓰여서 우리가 만든 식별자는 무의미 해집니다.
user.id = "제3 스크립트 값";
