let n = +prompt("Nhập vào số n");
let f0 = 1; 
let f1 = 1;
let fn;
let list;
if (Number.isInteger(n) && n>0)  {
    if (n==1) {
        console.log(`${f0}`);
    } else if(n==2) {
        list = f0 + " " + f1
        console.log(list);
    } else { 
        list = f0 + " " + f1;
        for (let i = 2; i < n; i++) {
            fn = f0 + f1;
            list += " " +fn ;
            f0 = f1;
            f1 = fn;
        }
        console.log(list);
    }
} else {
    console.log("Không hợp lệ");
}