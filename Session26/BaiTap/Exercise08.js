let arr = [];
function findOdd(arr) {
    if (Array.isArray(arr)) {
        if (arr.length != 0) {
            let primeArr = arr.filter(function isPrime(item) {
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
            let oddArr = primeArr.filter((item)=>{
                return item % 2 != 0;
            })
            console.log(oddArr);
        }else{
            console.log("Mảng không có phần tử nào");  
        }
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
for (let i = 0; i < 10; i++) {
    let num = +prompt(`Nhập giá trị thứ ${i+1}`);
    if (Number.isInteger(num)) {
        arr.push(num);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
findOdd(arr);