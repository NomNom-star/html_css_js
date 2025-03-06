let arr = [2, 5, 7, 4, 1, 49, 6, 2, 55, 9];
for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length-1; j > i; j--) {
        if (arr[j]<arr[j-1]) {
            let index = arr[j];
            arr[j] = arr[j-1];
            arr[j-1]= index;
        }
    }
}
console.log(`${arr}`);