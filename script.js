// function isEven(num) {
//     return num % 2 === 0;
// }
// console.log(isEven(4)); // true
// console.log(isEven(5)); // false

// function findLargest(arr) {
//     return Math.max(...arr);
// }
// console.log(findLargest([1, 2, 3,4, 5, 6]));
function removeDuplicate(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicate([1, 2, 3, 5, 3, 2, 5]));