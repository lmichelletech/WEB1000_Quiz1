// 3. Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
// a.	makes10(9, 10) → true
// b.	makes10(9, 9) → false
// c.	makes10(1, 9) → true

function makes10(num1, num2){
    if((num1 === 10 ) || (num2 === 10 ) || ((num1 + num2) === 10 )){
       return true;
    }
    return false;
}

let a = 1;
let b = 9;

console.log(makes10(a, b));

