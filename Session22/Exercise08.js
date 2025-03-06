let arr = [4,8,7,8,1,9,6,9,15,3];
for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length-1; j > i; j--) {
        if (arr[j]>arr[j-1]) {
            let index = arr[j];
            arr[j] = arr[j-1];
            arr[j-1]= index;
        }
    }
}
