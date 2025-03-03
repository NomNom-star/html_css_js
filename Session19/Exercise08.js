let month = +prompt("Nhập tháng để kiếm tra");
if (month === 1 || month === 2 || month===3) {
    alert("Mùa xuân");
} else if(month === 4 || month === 5 || month===6) {
    alert("Mùa hè");
} else if (month === 7 || month === 8 || month===9) {
    alert("Mùa thu");
} else if(month === 10 || month === 11 || month===12) {
    alert("Mùa đông");
} else {
    alert("Tháng nhập vào không hợp lệ");
}