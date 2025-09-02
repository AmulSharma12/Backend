//--- CJS way
// console.log("second");

// let num = 5;
// console.log(num);

// let fn = () => {
//   console.log("function");
// };
// module.exports = fn;


//--- ESM module way
console.log("second");

let num = 5;
console.log(num);

export const fn = () => {
  console.log("function");
};


export default num;
