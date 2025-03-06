let arr = [2,5,7,4,1,8,6,2,5,7];
let input = +prompt("Nhập 1 số bất kì:");
let count = 0;
if (Number.isInteger(input) == false) {
    console.log("Không hợp lệ");
} else {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === input) {
            count++;
        } 
    } 
}
if (count != 0) {
    console.log(` Số ${input} xuất hiện ${count} lần trong mảng`);
} else {
    console.log(` Số ${input} không tồn tại trong mảng`);
    
}
