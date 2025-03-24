function register() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    let generalError = document.getElementById("generalError");

    emailError.innerText = passwordError.innerText = confirmPasswordError.innerText = generalError.innerText = "";

    if (!email) {
        emailError.innerText = "Email không được bỏ trống";
        return;
    }
    if (!password) {
        passwordError.innerText = "Mật khẩu không được bỏ trống";
        return;
    }
    if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Xác nhận mật khẩu không khớp";
        return;
    }
    
    let users = JSON.parse(localStorage.getItem("users"));
    if (users.some(user => user.email === email)) {
        generalError.innerText = "Email đã tồn tại";
        return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công!");
}