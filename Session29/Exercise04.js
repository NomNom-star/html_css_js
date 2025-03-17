let users = [];

function main() {
    let choice;
    do {
        choice = +prompt(`
            1. Đăng nhập
                Yêu cầu email phải chứa @ và kết thúc bằng .com hoặc .vn, mật khẩu phải từ  6 ký tự trở lên (gồm ký tự đặc biệt, ký tự viết hoa).
            2. Đăng ký
            3. Thoát
        `);
        
        switch (choice) {
            case 1:
                let loginEmail = prompt("Nhập email:");
                let loginPassword = prompt("Nhập mật khẩu:");
                loginUser(loginEmail, loginPassword);
                break;

            case 2:
                let fullName = prompt("Nhập tên:");
                let email = prompt("Nhập email:");
                let password = prompt("Nhập mật khẩu:");
                registerUser(fullName, email, password);
                break;

            case 3:
                console.log("Thoát chương trình.");
                break;

            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    } while (choice !== 3);
}

function isValidEmail(email) {
    return email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"));
}

function isValidPassword(password) {
    if(!password.length>6){
        return "password phải lớn hơn 6 ký tự";
    }
    if(!password.includes("!")||!password.includes("@")||!password.includes("#")||!password.includes("$")||!password.includes("%")||!password.includes("^")||!password.includes("&")||!password.includes("*") && !containsUpperCase(password)){
        return "Phải chứa ký tự đặc biệt và chữ hoa";

    }
}
function containsUpperCase(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'A' && str[i] <= 'Z') {
        return true;
      }
    }
    return false;
  }

function registerUser(name, email, password) {
    if (!name || !email || !password) {
        console.log("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    if (!isValidEmail(email)) {
        console.log("Email không hợp lệ. Email phải chứa '@' và kết thúc bằng '.com' hoặc '.vn'.");
        return;
    }

    if (!isValidPassword(password)) {
        console.log("Mật khẩu không hợp lệ. Mật khẩu phải có ít nhất 6 ký tự, chứa chữ hoa và ký tự đặc biệt.");
        return;
    }

    if (users.some(user => user.email === email)) {
        console.log("Email đã được đăng ký. Vui lòng sử dụng email khác.");
        return;
    }

    users.push({ name, email, password });
    console.log("Đăng ký thành công! Bây giờ bạn có thể đăng nhập.");
}

function loginUser(email, password) {
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        console.log(`Đăng nhập thành công! Chào mừng, ${user.name}!`);
    } else {
        console.log("Email hoặc mật khẩu không đúng. Vui lòng thử lại.");
    }
}

main();
