let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function checkPrime(arr) {
    if (Array.isArray(arr)) {
        if (arr.length != 0) {
            let result = arr.filter(function isPrime(item) {
                if (item<2) {
                    return;
                } else {
                    for (let i = 2; i < item-1; i++) {
                        if (item % i == 0) {
                            return;
                        }
                    }
                    return item;
                }
            })
            console.log(result);
        } else {
            console.log("Mảng không có phần tử nào");  
        }
    } else {
        console.log("Dữ liệu không hợp lệ");  
    }
}
checkPrime(arr);