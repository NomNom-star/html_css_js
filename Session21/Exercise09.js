let number = +prompt("Nhập số cần kiểm tra: ");
let isPrime = true;
if (Number.isInteger(number)) {
    if (number<2) {
        isPrime=false;
    }
    for (let i = 2; i < number; i++) {
        if (number%i===0) {
            isPrime=false;
        }
    }
    if (isPrime==false) {
        console.log("Không phải là số nguyên tố");
    } else {
        console.log("Là số nguyên tố");
    }
} else {
    console.log("Vui lòng nhập vào 1 số");
}