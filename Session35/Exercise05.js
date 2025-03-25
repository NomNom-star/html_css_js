let categories = JSON.parse(localStorage.getItem('categories')) || [];

function renderCategories() {
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = '';
    categories.forEach((category, index) => {
        categoryList.innerHTML += `
            <tr>
                <td>${category.code}</td>
                <td>${category.name}</td>
                <td class="${category.status ? 'status-active' : 'status-inactive'}">
                    ${category.status ? 'Đang hoạt động' : 'Ngừng hoạt động'}
                </td>
                <td>
                    <button class="btn-danger" onclick="deleteCategory(${index})">Xóa</button>
                </td>
            </tr>
        `;
    });
}

function openModal() {
    document.getElementById('category-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('category-modal').style.display = 'none';
}

function addCategory() {
    const code = document.getElementById('category-code').value.trim();
    const name = document.getElementById('category-name').value.trim();
    const status = document.getElementById('category-status-active').checked;

    if (!code || !name) {
        alert('Mã danh mục và tên danh mục không được để trống!');
        return;
    }

    categories.push({ code, name, status });
    localStorage.setItem('categories', JSON.stringify(categories));
    renderCategories();
    closeModal();
}

function deleteCategory(index) {
    categories.splice(index, 1);
    localStorage.setItem('categories', JSON.stringify(categories));
    renderCategories();
}

window.onload = renderCategories;