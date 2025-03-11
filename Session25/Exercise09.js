function checkEmail(email, arr){
    for (let i = 0; i < arr.length; i++){
        if (email == arr[i]) {
            console.log("Email đã tồn tại!");
            return;
        }
    }
    if (email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn") )) {
        arr.push(email);
        console.log("Đăng kí thành công");
        return;
    }
    console.log("Email không hợp lệ");
}
let users = ["namuy24@gmail.com"];
let email = prompt("Nhập email: ");
checkEmail(email, users);
console.log(users);