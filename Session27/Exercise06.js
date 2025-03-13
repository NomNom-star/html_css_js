function capSoCong(arr) {
    if (arr.length < 2) return false; 
    let difference = arr[1] - arr[0]; 
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] != difference) {
            return false; 
        }
    }
    return true;
}
console.log(capSoCong([2, 4, 6, 8, 10])); 
console.log(capSoCong([3, 6, 9, 12, 15])); 
console.log(capSoCong([1, 2, 4, 8, 16])); 
console.log(capSoCong([7])); 
console.log(capSoCong([])); 
