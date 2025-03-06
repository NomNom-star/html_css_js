let input = +prompt("Nhập dãy số bất kì");
if (Number.isInteger(input) === false) {
    console.log("Dãy không hợp lệ");
} else {
    text = String(input);
    arr = text.split("");
    arr.sort();
    console.log(`${arr[arr.length-1]} là số lớn nhất trong dãy số`);
}