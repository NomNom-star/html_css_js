function checkPrime(a) {
    if (Number.isInteger(a) && a>0) {
        if (a<2) {
            console.log("Không là số nguyên tố");
            return false;
        }
        for (let i = 2; i < a; i++) {   
            if (a % i == 0) {
                console.log("Không là số nguyên tố");
                return false;
            }
        }
        console.log("Là số nguyên tố");
        return true;
    }
    console.log("Dữ liệu không hợp lệ"); 
}
let input = +prompt("Nhập số nguyên dương để kiểm tra");
checkPrime(input);