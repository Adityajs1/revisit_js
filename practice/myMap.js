// Example:
// const nums = [1, 2, 3];
// nums.map(x => x * 2);
// nums.filter(x => x > 1);
// nums.reduce((acc, curr) => acc + curr, 0);

function myMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}
const nums = [1, 2, 3, 4, 5];

const doubled = myMap(nums, num => num * 2);
console.log("Map:", doubled);
// [2, 4, 6, 8, 10]

const evens = myFilter(nums, num => num % 2 === 0);
console.log("Filter:", evens);
// [2, 4]

const sum = myReduce(nums, (acc, curr) => acc + curr, 0);
console.log("Reduce:", sum);
// 15



