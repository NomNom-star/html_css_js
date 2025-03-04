let a = +prompt("Nhập số a: ");
let b = +prompt("Nhập lũy thừa b: ");
let result = 1;
if (Number.isInteger(a) && Number.isInteger(b) && a != 0 ) {
    if (b>=0) {
        for (let i = 0; i < b; i++) {
            result *= a;
        }
        console.log(`${result}`);
    } else {
        for (let i = 0; i > b; i--) {
            result *= 1/a;
        }
        console.log(`${result}`);
    }
} else {
    console.log("Không hợp lệ");
}
