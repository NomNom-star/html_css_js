function findMissingNumber(arr) {
    if (!Array.isArray(arr) || arr.length < 2) return "Dữ liệu không hợp lệ";
    let sorted = arr.slice().sort((a, b) => a - b);
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i + 1] - sorted[i] !== 1) {
            return sorted[i] + 1;
        }
    }
    return "Không tìm thấy số bị thiếu";
}
console.log(findMissingNumber([1, 2, 4, 5]));
console.log(findMissingNumber([1, 2, 3, 5]));
console.log(findMissingNumber([1, 3]));
console.log(findMissingNumber("abc"));