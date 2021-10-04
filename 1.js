const objArr = [
  { a: 1, b: 1, c: 1 },
  { a: 2, b: 2 },
  { a: 3, b: 3 },
];

const result = objArr.map((n) => {
  const { c, ...rest } = n;
  return rest;
});

const result2 = objArr.map(({ a, ...rest }) => rest);

console.log(result2);
