let money = +prompt("Mời bạn nhập vào số tiền gửi:");
let month = +prompt("Mời bạn nhập vào số tháng gửi ");
let interest = Math.round(money * (4.3/100) *(month*30 / 365));
alert(` Số tiền lãi bạn nhận được là: ${interest} VNĐ`);