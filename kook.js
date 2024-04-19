"use strict";
// exponentation **
Object.defineProperty(exports, "__esModule", { value: true });
let apple = 5;
let bags = 2;
console.log(5 ** 2);
let watermelon = 8;
let boxs = 4;
console.log(watermelon ** boxs);
let layer = 12;
let applee = 2;
let power = layer ** 2;
console.log(power);
//   Assignment Operators =
let a = 5;
a = a + 5;
console.log(a); //equivalent is a = a + 5 , a is now = 10 
let b = 10;
b += 5;
console.log(b);
// Module % 0perators
let mode1 = 6;
let mode2 = 5;
let Module = 6 % 5;
console.log(Module); //1
let Apple = 21;
let people = 15;
let reminder = Apple % people;
console.log(reminder); //6
// unary operator prefix and postfix operators
let A = 6;
let B = 4;
console.log('++A =', ++A); //7
console.log('--A =', --A); //6             
console.log('A++ =', A++); //6
console.log('A-- =', A--); //7
console.log('++B =', ++B); //5                    
console.log('--B =', --B); //4
console.log('B++ =', B++); //4
console.log('B-- =', B--); //4
// combining operators
let result = 4 + 5 * 2;
console.log(result); //14               
let result1 = 3 + 4 * 5;
console.log(result1); //23
//  logical operators 
let logi = 5;
let log = 2;
let logicaland = (logi > 0) && (log > 0); //true
let logicalor = (logi < 0) || (log > 0); //true 
let logicalnot = !(logi > 0); // false
console.log(logicaland);
console.log(logicalor);
console.log(logicalnot);
//BMI CALCULATOR
let weightInkg = 70;
let heightInMeter = 1.75;
let bmi = weightInkg / (heightInMeter * heightInMeter);
console.log(`your BMI is ${bmi}`);
