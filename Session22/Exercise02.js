let numbers = [2,5,7,4,6,9];
let input = +prompt("Nhập 1 số bất kì");
let flag = false;
for (let i = 0; i < numbers.length; i++) {
    if (input == numbers[i]) {
        console.log("Bingo");
        flag= true;
        break;
    }
}
if (flag == false) {
    console.log("Chúc bạn may mắn lần sau");
}