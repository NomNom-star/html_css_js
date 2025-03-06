let arr = [1,2,6,2,4,4,1,7,9,3,12,3,12,4];
let newArr = new Set(arr); 
arr = [...newArr];
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


