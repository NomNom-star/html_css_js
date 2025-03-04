let n = +prompt("Nhập 1 số bất kì");
let sum = 0;
if (Number.isInteger(n) && n>=1) {
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    console.log(`Tổng các số từ 1 đến ${n} là ${sum}`);
} else{
    console.log("Dữ liệu nhập vào không hợp lệ");
}