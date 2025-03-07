let arr = [];
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}: `), 10);
    arr.push(num);
}

let numbersGe10 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        numbersGe10.push(arr[i]);
    }
}

if (numbersGe10.length > 0) {
    console.log(numbersGe10);
} else {
    console.log("Không có số nào lớn hơn 10");
}
