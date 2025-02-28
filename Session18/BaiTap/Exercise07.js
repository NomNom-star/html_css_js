let a = +prompt("Mời bạn nhập số a: ");
let b = +prompt("Mời bạn nhập số b: ");
let phepTinh = prompt("Mời bạn nhập phép tính(+,-,*,/): ");
let result;
if (phepTinh == "+") {
    result= a + b;
    alert(` Kết quả của phép tính trên: ${a}+${b}=${result}`);
} else if (phepTinh == "-") {
    result= a - b;
    alert(` Kết quả của phép tính trên: ${a}-${b}=${result}`);
} else if (phepTinh == "*") {
    result= a * b;
    alert(` Kết quả của phép tính trên: ${a}*${b}=${result}`);
} else if(phepTinh == "/") {
    result= a / b;
    alert(` Kết quả của phép tính trên: ${a}/${b}=${result}`);
} else{
    alert("Nhập vào phép tính hợp lệ !");
}