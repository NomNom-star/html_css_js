function splitArray(arr, n) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (n <= 0) return [];
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}
console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArray([10, 20, 30, 40, 50], 2));
console.log(splitArray([1, 2, 3, 4, 5], 0));
console.log(splitArray("abc", 3));
console.log(splitArray(123, 3));   
