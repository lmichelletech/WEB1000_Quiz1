// 1. Write a recursive function which receives an array and returns the sum of the elements of the array.

var array = [23, 1, 12, 9, 99];
var total = 0;
var i = 0;
Answer: 

function Sum(arr){
    if(i < arr.length){
        total+=arr[i++];
        Sum(arr); 
    }
    return total;
}

console.log(Sum(array));

