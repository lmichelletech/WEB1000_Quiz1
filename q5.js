//5. Solve https://codility.com/programmers/lessons/3-time_complexity/frog_jmp/ Submit the screenshot of your solution after 
//being put through the codility grader.

// the function should return 3, because the frog will be positioned as follows:

// after the first jump, at position 10 + 30 = 40
// after the second jump, at position 10 + 30 + 30 = 70
// after the third jump, at position 10 + 30 + 30 + 30 = 100
// Assume that:

// X, Y and D are integers within the range [1..1,000,000,000];
// X ≤ Y.

function solution(x, y, d){
    let count = 0;
    while(x < 85){
        x += d;
        count++;
    }

    return count;
}
let location = 10;
let destination = 85;
let jumpsize = 30;

console.log(solution(location, destination, jumpsize));