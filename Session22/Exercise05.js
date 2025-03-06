let arr = [1, 4, 7, 8, 3];
let tongLe=0;
let tongChan=0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2== 0) {
        tongChan += arr[i];
    } else {
        tongLe += arr[i];
    }
}
console.log(` Tổng các số lẻ là: ${tongLe}`);
console.log(` Tổng các số chẵn là: ${tongChan}`);

