let a = +prompt("Nhập số thứ 1: ");
let b = +prompt("Nhập số thứ 2: ");
let c = Math.floor(Math.random() * (b - a)) + a;
alert(`Số ngẫu nhiên trong khoảng từ ${a} đến ${b} là: ${c}`);