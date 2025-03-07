let n = +prompt("Nhập số phần tử của mảng: ");
if (n < 0) {
    console.log("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
    console.log("Không có ký tự số");
} else {
    let arr = [];
    let digitChars = [];
    for (let i = 0; i < n; i++) {
        let char = prompt(`Nhập ký tự thứ ${i + 1}: `);
        arr.push(char);
        if (Number.isInteger(+char)) {
            digitChars.push(char);
        }
    }
    if (digitChars.length > 0) {
        console.log(digitChars);
    } else {
        console.log("Không có ký tự số");
    }
}
