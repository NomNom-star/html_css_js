let rows = 10;
console.log("a");
for(let i = rows; i >=1; i--){
    let str = '';
    for(let j = 1; j <=i; j++){
        str += '*';
    }
    console.log(str);
}
console.log("\n");
console.log("b");
for (let i = 1; i <= rows; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += '*';
    }
    console.log(str);
}
console.log("\n");
console.log("c");
for (let i = 1; i <= rows; i++) {
    let str = '';
    for (let j = 1; j <= rows - i; j++) {
        str += ' ';
    }
    for (let k = 1; k <= i; k++) {
        str += '*';
    }
    console.log(str);
}
console.log("\n");
console.log("d");
for (let i = rows; i >= 1; i--) {
    let str = '';
    for (let j = 1; j <= rows - i; j++) {
        str += ' ';
    }
    for (let k = 1; k <= i; k++) {
        str += '*';
    }
    console.log(str);
}

