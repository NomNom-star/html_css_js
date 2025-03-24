function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users"));
    
    let user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        alert("Login successful!");
        window.location.href = "Exercise02.html";
    } else {
        alert("Invalid email or password!");
    }
}