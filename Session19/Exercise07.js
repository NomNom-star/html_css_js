let num1 = +prompt("Nhập số thứ nhất: ");
let num2 = +prompt("Nhập số thứ hai: ");
let num3 = +prompt("Nhập số thứ ba: ");
let max;
// let max = Math.max(num1,num2,num3);
if (Number.isInteger(num1) && Number.isInteger(num2) && Number.isInteger(num3)) {
    (num1 > num2 && num1 > num3) ? (max = num1) : (num2>num3) ? (max = num2) : (max = num3);
} else {
    alert("Vui lòng nhập vào số")
}

alert(` Số lớn nhất trong 3 số là: ${max}`);