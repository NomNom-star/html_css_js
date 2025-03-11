function isPalindrome(str) {
    let arr = str.split("");
    let reverseArr = arr.slice().reverse(); 
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != reverseArr[i]) {
            console.log("Không phải chuỗi đối xứng");
            flag = false;
            return;
        }
    }
    if (flag == true) {
        console.log("Là chuỗi đối xứng");
    }
}
let input = prompt("Nhập chuỗi bất kì ");
isPalindrome(input);