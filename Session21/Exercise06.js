let n = +prompt("Nhập số nguyên bất kì ");
if (Number.isInteger(n) == false || n==0) {
    console.log("Không hợp lệ");
} else {
    console.log(`Các ước số của số ${n} là :`);
        for (let i = 1; i <= Math.abs(n) ; i++){
            if (n % i == 0) {
                console.log(`${i}`);
                console.log(`${-i}`);
            }
        }
}
