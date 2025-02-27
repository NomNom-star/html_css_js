let a = +prompt("Mời bạn nhập vào số a:");
let b = +prompt("Mời bạn nhập vào số b:");
let c = +prompt("Mời bạn nhập vào số c:");
let delta = (b*b) - (4*a*c);
let x1 = (-b + Math.sqrt(delta)) / (2*a);
let x2 =  (-b - Math.sqrt(delta)) / (2*a);
alert(`2 nghiệm của phương trình là ${x1} và ${x2}`);