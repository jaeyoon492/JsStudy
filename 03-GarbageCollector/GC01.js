const marry = (man, woman) => {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
};

let family = marry(
  {
    name: "John",
  },
  {
    name: "Ann",
  }
);

delete family.father;
delete family.mother.husband;
// John에 도달할수있는 루트가 없어졌으므로 Jhon객체는 가비지 컬렉터에 의해 사라짐.

family = null;
//전체를 감싸던 family가 null이 되면서 하위 루트의 객체들이 전부 가비지 컬렉터에 의해 사라짐
