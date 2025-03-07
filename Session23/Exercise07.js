var n = +prompt("Nhập số lượng phần tử của mảng: ");
if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(+prompt(`Nhập phần tử thứ ${i + 1}: `));
    }
    var max1 = arr[0], max2 = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2 && arr[i] !== max1) {
            max2 = arr[i];
        }
    }
    if (max1 === max2) {
        console.log("Không có số lớn thứ hai");
    } else {
        console.log(max2);
    }
}
