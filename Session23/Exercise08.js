var n = +prompt("Nhập số lượng phần tử của mảng: ");
if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Không phải dãy số fibonacci");
} else {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(+prompt(`Nhập phần tử thứ ${i + 1}: `));
    }
    var isFibonacci = true;
    for (var i = 2; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            isFibonacci = false;
            break;
        }
    }
    if (isFibonacci && arr.length >= 2) {
        console.log("Là dãy số fibonacci");
    } else {
        console.log("Không phải dãy số fibonacci");
    }
}