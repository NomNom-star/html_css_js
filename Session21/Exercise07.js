let a = +prompt("Nhập số tiền gửi");
let b = +prompt("Nhập lãi suất: ");
let c = +prompt("Nhập số tháng gửi: ");
let d, e;
if (Number.isNaN(a) || Number.isNaN(b) || a<0 || b<0 || Number.isInteger(c) == false || c<0 ) {
    console.log("Dữ liệu nhập vào không hợp lệ");
} else {
    d = a * (b/100) * ((c*31)/365);
    e = a + d;
    console.log(` Số tiền lãi là: ${d}`);
    console.log(` Số tiền nhận được là: ${e}`);
    
}