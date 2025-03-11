function checkPositive(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Mảng rỗng");
            return;
        }
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]>0 && Number.isInteger(arr[i])) {
                count++;
            }
        }
        if (count == 0) {
            console.log("Không có số nguyên dương trong mảng");
            return;
        }
        console.log(count);
        return;
    }
    console.log("Dữ liệu nhập vào không hợp lệ");
}
checkPositive([1.2,-3,-6])