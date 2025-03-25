const products = [
    { id: 1, name: 'Laptop Dell XPS 15', price: 35990000, image: 'https://www.laptopvip.vn/images/ab__webp/thumbnails/1100/900/detailed/33/laptop-xps-9520-t-black-gallery-3-www.laptopvip.vn-1696316340.png.webp', description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.' },
    { id: 2, name: 'iPhone 15 Pro Max', price: 29990000, image: 'https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.xlarge.jpg', description: 'Điện thoại Flagship của Apple với camera 48MP và chip A17 Pro.' },
    { id: 3, name: 'Samsung Galaxy S24 Ultra', price: 28990000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuKDgTGJ8afnyMgIFj1LW2tgSpC3CtcD4Xw&s', description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.' },
    { id: 4, name: 'Tai nghe Sony WH-1000XM5', price: 7990000, image: 'https://sony.scene7.com/is/image/sonyglobalsolutions/360-RA-category-icon-20221202?$S7Product$&fmt=png-alpha', description: 'Tai nghe chống ồn chất lượng cao với thời gian pin 30 giờ.' },
    { id: 5, name: 'Apple Watch Series 9', price: 11990000, image: 'https://product.hstatic.net/200000850199/product/3_cae3c290c1304ada9b5dbb1c72748027_4a963c3f875a44c9b0aa57d35edf4c86.jpg', description: 'Đồng hồ thông minh cao cấp với màn hình Always-on và hỗ trợ thể thao.' },
    { id: 6, name: 'Loa JBL Charge 5', price: 3600000, image: 'https://hoanghamobile.com/Uploads/2021/03/09/image-removebg-preview-6.png', description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.' }
];

if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(products));
}

function getProductsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('products')) || [];
}


function renderProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        productList.innerHTML += `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p>${product.price.toLocaleString()} VND</p>
                    <button class="btn btn-primary">Buy</button>
                </div>
            </div>
        `;
    });
}

function searchProducts() {
    const searchText = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));
    renderProducts(filteredProducts);
}

document.getElementById('search-btn').addEventListener('click', searchProducts);
renderProducts(products);