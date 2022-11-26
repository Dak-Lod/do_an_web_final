const role = [
    'Quản trị',
    'Khách hàng'
]

function disablePopup(e){
    setTimeout(()=>{
        blur.classList.toggle('active')
    }, 200)
    
    const popup = document.getElementsByClassName('popup')
    Array.prototype.forEach.call(popup, (ele=>{
        ele.style.top = 0;
        ele.classList.remove('active')
    }))
}

let blur;

var categories = localStorage.getItem('cate')
categories = JSON.parse(categories)
if (categories == null){
    categories  = 
    ['Nam', 'Nữ', 'Trẻ em', 'Khuyến mãi']
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


var accounts = localStorage.getItem('acc')
accounts = JSON.parse(accounts)
class Account {
    static count = 0;
    constructor (name, user, pass, role){
        Account.count++;
        this.id = Account.count + 10000
        this.name = name
        this.username = user
        this.password = pass
        this.role = role // 0 = admin, 1 = user
    }
}
if (accounts == null) {
    accounts = []
    accounts.push(new Account('Trần Dương Đắc Lộc', 'admin', 'admin', 0))
    accounts.push(new Account('Trần Dương Đắc Lộc', 'user', 'user', 1))

    localStorage.setItem('acc', JSON.stringify(accounts))
}else {
    Account.count = accounts.length
}

class Product {
    static count = 0;
    constructor (name, cate, price, des, img){
        Product.count++;
        this.id = Product.count + 10000;
        this.name = name;
        this.cate = categories[cate];
        this.price = price;
        this.des = des;
        this.img = img
    }
}
var products = localStorage.getItem('products')
products = JSON.parse(products)
if (products == null) {
    products = []
    products.push(new Product('Giày Thể Thao Nam Hunter Street Cream',1,781000,'Mô tả:  ', './img/product1.webp'))
    products.push(new Product('Giày Thể Thao Bé Trai', 3, 437000, 'Mô tả: ', './img/product2.webp'))
}else{
    Product.count = products.length    
}


function renData(){
    blur = document.getElementById('blur')
    $('#body').load('./home.html')



    // $('#body').load('./admin.html', adminRen) //Sửa admin.html thành tên file của mình
    // $('#body').load('./shopee.html') //Sửa admin.html thành tên file của mình
    // Search selection
    var srchSelect =  document.querySelector('.input-select')
    categories.forEach((ele, index) => {
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
    
    document.getElementById('blur').addEventListener('click',disablePopup)

}


window.onload = renData
