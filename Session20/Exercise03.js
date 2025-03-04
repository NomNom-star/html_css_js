let number = prompt("Nhập số cần kiểm tra");
let length = number.length;
let n = Number(number);
let soDoiXung = true;
if (Number.isInteger(n) && n>=1 && length>=1){
    let i=0;
    let j= length - 1;
     while (i<j){
        if (number[i] != number[j] ) {
            console.log(`${n} Không phải số đối xứng`);
            soDoiXung = false;
            break;
        } else {
            ++i;
            --j;
        }
    }
    if (soDoiXung== true) {
        console.log(`${n} Là số đối xứng`);
    }
} else{
    console.log("Dữ liệu nhập vào không hợp lệ");
}