
// console.log(process.argv[2]);
// const double = (n) => n * 3;
// //console.log(double(10))

//1

// console.log(process.argv, process.argv[2])
// const sub = (n) => n - 3;
// console.log(sub(process.argv[2]))

//2
const sub = (n) => n - 3;
const [, , num] = process.argv;
console.log(sub(num));