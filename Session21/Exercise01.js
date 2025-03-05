let input;
let sum = 0;
for (let i = 1; i < 6; i++) {
    input = +prompt(` Nhập số thứ ${i}`);
    if (input % 2 != 0) {
        sum += input;
    }
}
console.log(` Tổng các số lẻ đã nhập là : ${sum}`);
