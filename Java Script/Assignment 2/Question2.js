//What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b-
let a = 2;
let b = 1;
let stage1 = --a;
let stage2 = stage1 - (--b);
let stage3 = stage2 + ++b ;
let result = stage3 + b--;
console.log("The value of --a is:" ,stage1);
console.log("The value of --a - --b is:" ,stage2);
console.log("The value of --a - --b + ++b is:" ,stage3)
console.log("The final result is:",result);
