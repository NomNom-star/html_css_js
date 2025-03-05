let number = +prompt("Nhập số số nguyên tố cần in ra: ");
let count = 0;
let num = 1;
while(count < number){
    let countprime = 0;
    for (let i = 0; i <= num; i++) {
        if (num%i==0) {
            countprime++;
        }
    }
    if (countprime==2) {
        console.log(num);
        count++;
    }
    num++;
}