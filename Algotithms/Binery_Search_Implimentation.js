
// Binery Search =>

let arr = [10, 20, 30, 40, 50, 60, 70];
let target = 50;

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

console.time("binarySearch");
console.log(binarySearch(arr, target));
console.timeEnd("binarySearch");


