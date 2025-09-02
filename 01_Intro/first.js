// // CJS way
// require("./second");
// console.log("first");

// ESM module
import num,{ fn } from "./second.js";
console.log(num);
console.log(fn);

console.log("first");
