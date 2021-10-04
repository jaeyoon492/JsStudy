const nums = [3, 20, 1, 6, 3];

// const minNum = Math.min(...nums); //1
// const maxNum = Math.max(...nums); //20

const minNum = Math.min.apply(null, nums);
const maxNum = Math.max.apply(null, nums);
//Math.max.apply(null,[3, 20, 1, 6, 3]);

const minNum2 = Math.min.call(null, ...nums);
const maxNum2 = Math.max.call(null, ...nums);
//Math.max.call(null,3, 20, 1, 6, 3);
console.log(minNum);
console.log(maxNum);

console.log(minNum2);
console.log(maxNum2);
