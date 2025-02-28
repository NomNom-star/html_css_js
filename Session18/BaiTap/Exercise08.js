let a = +prompt("Nhập cạnh thứ nhất: ");
let b = +prompt("Nhập cạnh thứ hai: ");
let c = +prompt("Nhập cạnh thứ ba: ");
if (a+b>c && a+c>b && b+c>a) {
    if (a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b) {
        alert("Tam giác vuông");
    } else if (a==b && b==c){
        alert("Tam giác đều")
    } else if(a==b || b==c || a==c){
        alert("Tam giác cân");
    } else{
        alert("Tam giác thường");
    }
} else {
    alert("Không phải là tam giác");
}