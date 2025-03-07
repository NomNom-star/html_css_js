let arr = ["", false, 0, 5, 10, "Hello world!", undefined, null, NaN, "test", 4, "JavaScript", true, " "];
let filteredArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        filteredArr.push(arr[i]);
    }
}
console.log(filteredArr);
