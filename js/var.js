var categories = localStorage.getItem('cate')
categories = JSON.parse(categories)
if (!categories){
    categories  = 
    ['Trang chủ', 'Nam', 'Nữ', 'Trẻ em', 'Khuyến mãi']
    localStorage.setItem('cate', JSON.stringify(categories))
}

var info = localStorage.getItem('info')
info = JSON.parse(info)

if (!info) {
    info = {
        'phone-num' : "+84337961759",
        'email' : 'trandacloc123@gmail.com',
        'address' : 'Đại học Sài Gòn'
    }
    localStorage.setItem('info', JSON.stringify(info))
}


var account = localStorage.getItem('acc')
account = JSON.parse(account)
if (!account) {
    account = [
        {
            username: 'admin',
            password: 'admin'
        }
    ]
    localStorage.setItem('acc', JSON.stringify(account))
}

var products = localStorage.getItem('products')
products = JSON.stringify(products)
class product {
    constructor (name, cate, price, des, img){
        product.count++;
        this.id = product.count + 10000;
        this.name = name;
        this.cate = categories[cate];
        this.price = price;
        this.des = des;
        this.img = img
    }
}
product.count = 0
if (products) {
    var tmp = new product('Giày Thể Thao Nam Hunter Street Cream',1,781000,'Mô tả:  ', './img/product1.webp')
    products = []
    products.push(tmp)
    products.push(new product('Giày Thể Thao Bé Trai', 3, 437000, 'Mô tả: ', './img/product2.webp'))
}


function renData(){

    // $('#body').load('./admin.html', adminRen) //Sửa admin.html thành tên file của mình
    $('#body').load('./shopee.html') //Sửa admin.html thành tên file của mình
    // Search selection
    var srchSelect =  document.querySelector('.input-select')
    categories.forEach((ele, index) => {
        if (index == 0) return
        var tmp = document.createElement('option');
        tmp.setAttribute('value', index)
        tmp.innerText = ele
        srchSelect.appendChild(tmp)
    });




    // Navigation
    var navBar = document.querySelector('nav > .container')
    console.log(navBar);
    categories.forEach(ele => {
        var span = document.createElement('span');
        span.setAttribute('class', 'active');
        var link = document.createElement('a');
        link.innerText = ele
        // link.appendChild(span)
        navBar.appendChild(link)
    })

    

    
    

}

window.onload = renData

