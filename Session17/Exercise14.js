const pi = 3.14;
let r = +prompt("Nhập bán kính hình trụ: ");
let h = +prompt("Nhập chiều cao hình trụ: ");
let dienTichXq = 2*pi*r*h;
let dienTichTp = dienTichXq * (2*pi*r*r);
let theTich = pi*r*r*h;
let chuViDay = 2*pi*(r/2);
console.log(`Diện tích xung quanh hinh trụ la ${dienTichXq}`);
console.log(`Diện tích toàn phần hinh trụ la ${dienTichTp}`);
console.log(`Thể tích hinh trụ la ${theTich}`);
console.log(`Chu vi đáy ${chuViDay}`);