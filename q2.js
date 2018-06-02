// 2. Given two temperatures, return true if one is less than 0 and the other is greater than 100.
// a.	icyHot(120, -1) → true
// b.	icyHot(-1, 120) → true
// c.	icyHot(2, 120) → false

function icyHot(temp1, temp2){
    if((temp1 < 0 ) && (temp2 > 100) || (temp1 > 100 ) && (temp2 < 0)){
       return true;
    }
    return false;
}

let n1 = 2;
let n2 = 120;

console.log(icyHot(n1, n2));

