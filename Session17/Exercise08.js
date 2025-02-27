let c = prompt("Mời bạn nhập vào ngày thứ 1 (Định dạng YYYY-MM-DD): ");
let d = prompt("Mời bạn nhập vào ngày thứ 2 (Định dạng YYYY-MM-DD): ");
let result = Math.abs((new Date(d) - new Date(c))) / 86400000 ;
alert(`Độ chênh lệch là ${result} ngày`);