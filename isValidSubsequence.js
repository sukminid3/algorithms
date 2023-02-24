let arr = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

// forEach executes only one iteration. use the counter to check if order is correct.
function isValidSubsequence (arr, sequence) {
    let counter = 0;
    arr.forEach((e) => e == sequence[counter] && counter++);
    return counter == sequence.length;
}

console.log(isValidSubsequence(arr, sequence));