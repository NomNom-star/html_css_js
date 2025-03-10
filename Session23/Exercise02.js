let arr = [];
for (let i = 0; i < 10; i++) {
    let num = +prompt(`Nhập số nguyên thứ ${i + 1} (không trùng lặp): `);
    while (arr.includes(num)) {
        num = +prompt(`Số đã tồn tại, nhập lại số nguyên thứ ${i + 1}: `);
    }
    arr.push(num);
}
if (arr.length === 0) {
    console.log("Không có số lớn nhất");
} else {
    let maxVal = arr[0];
    let maxIndex = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
            maxIndex = i;
        }
    }
    
    console.log(`Số lớn nhất: ${maxVal}`);
    console.log(`Vị trí: ${maxIndex}`);
}