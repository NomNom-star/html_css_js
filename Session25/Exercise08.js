function isStrongPassword(password){
    if (password.length < 8) {
        return false;
    }
    let upperCount = 0;
    let lowerCount = 0;
    let numberCount = 0;
    for (let i = 0; i < password.length; i++) {
        if (password[i]>="A" && password[i]<="Z") {
            upperCount++;
        } else if (password[i]>="a" && password[i]<="z") {
            lowerCount++;
        } else if (password[i]>="0" && password[i]<="9") {
            numberCount++;
        }
    }
    if (upperCount <1 || lowerCount<1 || numberCount<1) {
        return false;
    }
    return true;
}
let input = prompt("Nhập password")
console.log(isStrongPassword(input));