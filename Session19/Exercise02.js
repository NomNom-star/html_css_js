let word = prompt("Nhập ký tự cần kiểm tra");
if (word.includes("0") || word.includes("1") ||word.includes("2") ||word.includes("3") ||word.includes("4") ||word.includes("5") ||word.includes("6") ||word.includes("7") || word.includes("8") ||word.includes("9") ) {
    alert("Không phải chữ cái");
} else  {
    alert(` Ký tự ${word} là chữ cái`);
}
