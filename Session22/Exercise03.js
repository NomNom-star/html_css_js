let input = +prompt("Nhập dãy số bất kì");
let arr , text;
if (Number.isInteger(input) === false) {
    console.log("Dãy không hợp lệ");
} else {
    text = String(input);
    arr = text.split("");
    arr.reverse();
    console.log(`${arr}`);
}