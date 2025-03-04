let n = +prompt("Nhập 1 số bất kì");
if (Number.isInteger(n) && n>=1) {
    console.log(` Các số chia hết cho 5 trong khoảng từ 1 đến ${n} là:`);
    
    for(let i = 1; i <= n; i++){
        if (i%5===0) {
            console.log(i);
        }
    }
} else{
    console.log("Dữ liệu nhập vào không hợp lệ");
}

