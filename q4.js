// 4. Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.
// a.	front22("kitten") → "kikittenki"
// b.	front22("Ha") → "HaHaHa"
// c.	front22("abc") → "ababcab"
var str = "abc";
function front22(str){
    var chars = str.substring(0, 2);
    return chars + str.concat(chars);
}

console.log(front22(str));

