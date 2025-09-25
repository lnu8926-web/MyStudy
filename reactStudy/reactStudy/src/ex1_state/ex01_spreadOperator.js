//전개연산자
const arr1 = [1, 2, 3];
const arr2 = [4, ...arr1, 5, 6]; // ... -> arr1

console.log(arr2);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, ...obj1 };

console.log(obj1);
console.log(obj2);
