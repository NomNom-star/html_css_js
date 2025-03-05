console.log("Các số amstrong có 3 chữ số là: ");
let sum; 
for (let i = 100; i < 1000; i++) {
    let index = i.toString();
    let i1 = Number(index[0]);
    let i2 = Number(index[1]);
    let i3 = Number(index[2]);
    sum = Math.pow(i1, 3) + Math.pow(i2, 3) + Math.pow(i3, 3);
    if (sum == i) {
        console.log(i);
    }
}