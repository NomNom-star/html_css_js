let input = prompt("Mời bạn nhập: ");
let password;
if (input === "ADMIN") {
    password = prompt("Nhập mật khẩu");
    if (password === "TheMaster") {
        alert("Welcome");
    } else if (password == null) {
        alert("Cancelled");
    } else{
        alert("Wrong password");
    }
} else if (input == null) {
    alert("Cancelled");
} else {
    alert("I don't know you");
}
    
