let a = +prompt("Nhập a:");
let b = +prompt("Nhập b:");
let c = +prompt("Nhập c:");
let delta = (b*b) - (4*a*c);
let x1; 
let x2;
if (delta > 0) {
    x1 = (-b + Math.sqrt(delta))/ (2*a);
    x2 = (-b - Math.sqrt(delta))/ (2*a);
    alert(` Phương trình có 2 nghiệm phân biệt là: x1=${x1} và x2=${x2}`)
} else if(delta === 0) {
    x1 = x2 = -b / (2*a);
    alert(` Phương trình có nghiệm kép x1=x2=${x1}`);
} else {
    alert("Phương trình vô nghiệm")
}