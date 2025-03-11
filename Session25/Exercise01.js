function findMin(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Mảng không chứa phần tử");  
            return ;
        } 
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]<min) {
                min = arr[i];
            }
        }
        console.log("Giá trị nhỏ nhất trong mảng là",min);
        return min;    
    }
    console.log("Giá trị không hợp lệ");
}
let array =[5,2,7,5,8];
findMin(array);