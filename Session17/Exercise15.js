const pi = 3.14;
let r = +prompt("Nhập bán kính hình cầu: ");
let theTich = (4/3) * pi *r*r*r;
let dienTich = pi * (r*2)*(r*2);
let chuVi = 2*pi*r;
console.log(` Thể tích hình cầu với bán kính ${r} là: ${theTich}`);
console.log(` Diện tích bề mặt hình cầu với bán kính ${r} là: ${dienTich}`);
console.log(` Chu vi lớn nhất của hình cầu với bán kính ${r} là: ${chuVi}`);