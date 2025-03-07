let n = +prompt("Nhập số phần tử của mảng: ");
if (n < 0) {
    console.log("Số lượng phần tử không được âm");
} else if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
    let arr = [];
    let sum = 0;
    let hasNumber = false;
    for (let i = 0; i < n; i++) {
        let char = prompt(`Nhập ký tự thứ ${i + 1}: `);
        arr.push(char);
        if (!isNaN(char)) {
            sum += Number(char);
            hasNumber = true;
        }
    }
    if (hasNumber) {
        console.log(sum);
    } else {
        console.log("Không có phần tử nào là số");
    }
}
