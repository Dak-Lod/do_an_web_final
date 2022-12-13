const role = [
    'Quản trị',
    'Khách hàng'
]

function removeAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ", "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ"    
    ];
    for (var i=0; i<AccentsMap.length; i++) {
      var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
}

class bill {
    constructor (id, user, date, info, total, status){
        this.id = id;
        this.user = user;
        this.date = date;
        this.info = info;
        this.total = total;
        this.status = status
    }
}


var bills = localStorage.getItem('bills')
bills = JSON.parse(bills)
if (bills == null)
    bills = []

function moneyFormat(money){
    return moneyFormater.format(money)
}

const moneyFormater = new Intl.NumberFormat('vn-VN', );

function disablePopup(){
    setTimeout(()=>{
        blur.classList.toggle('active')
    }, 200)
    
    const popup = document.getElementsByClassName('popup')
    Array.prototype.forEach.call(popup, (ele=>{
        ele.style.top = 0;
        ele.classList.remove('active')
    }))
}
let blur
let popup_login
let popup_signup
let popup_signup_complete
let popup_must_login
let login_info
let popup_detail

var categories = localStorage.getItem('cate')
categories = JSON.parse(categories)
if (categories == null){
    categories  = 
    ['Nam', 'Nữ', 'Trẻ em', 'Khuyến mãi']
    localStorage.setItem('cate', JSON.stringify(categories))
}




var accounts = localStorage.getItem('acc')
accounts = JSON.parse(accounts)
class Account {
    static count = 0;
    constructor (name, user, pass, role, address, phoneNumber){
        Account.count++;
        this.id = Account.count + 10000
        this.name = name
        this.username = user
        this.password = pass
        this.role = role // 0 = admin, 1 = user
        this.address = address
        this.phoneNumber = phoneNumber
    }
}
if (accounts == null) {
    accounts = []
    accounts.push(new Account('Trần Dương Đắc Lộc', 'admin', 'admin', 0, '776/3', '0337961759'))
    accounts.push(new Account('Trần Dương Đắc Lộc', 'user', 'user', 1, '776/3', '0337961759'))

    localStorage.setItem('acc', JSON.stringify(accounts))
}else {
    Account.count = accounts.length
}

class Product {
    static count = 0;
    constructor (name, cate, price, des, img, sell, newPrd){
        Product.count++;
        this.id = Product.count + 10000;
        this.name = name;
        this.cate = categories[cate];
        this.price = price;
        this.des = des;
        this.img = img
        this.sell = sell
        this.new = newPrd
    }
}
class Cart {
    static count = 0;
    constructor (prd){
        this.prd = prd
        this.qty = 1
    }
}

let carts = localStorage.getItem('carts')
carts = JSON.parse(carts)
if (carts == null){
    carts = []
    localStorage.setItem('carts', JSON.stringify(carts))
}





var products = localStorage.getItem('products')
products = JSON.parse(products)
if (products == null) {
    products = []
    products.push(new Product('Giày Thể Thao Nam Hunter Cream',0,781000,'Màu xanh', './img/product1.webp',1,0))
    products.push(new Product('Giày Thể Thao Bé Trai', 2, 437000, 'Mô tả: ', './img/product2.webp',1,0))
    products.push(new Product('Giày Thể Thao Nữ Hunter X', 1, 1000000, 'Mô tả: ', './img/nu2.webp',1,0))
    products.push(new Product('Giày Thể Thao Bé Gái Hunter', 2, 643000 , 'Mô tả: ', './img/treEm2.webp',1,0))
    products.push(new Product('Giày Thể Thao Nam Hunter Street', 0, 1540000 , 'Mô tả: ', './img/nam2.webp',1,0))

    products.push(new Product('Giày Thể Thao Nam Hunter X 2k22',0,1781000,'Mô tả:  ', './img/nam3.webp',0,1))
    products.push(new Product('Giày Thể Thao Nam Bloomin', 0, 1354000, 'Mô tả: ', './img/nam4.webp',0,1))
    products.push(new Product('Giày Thể Thao Nam Hunter Tennis', 0, 853000 , 'Mô tả: ', './img/Nam5.webp',0,1))
    products.push(new Product('Giày Thể Thao Nữ Hunter Street ', 1, 1540000 , 'Mô tả: ', './img/nu1.webp',0,1))
    products.push(new Product('Giày Thể Thao Nữ Hunter X', 1, 1187000 , 'Mô tả: ', './img/nu3.webp',0,1))

    products.push(new Product('Giày Thể Thao Nữ Hunter X Dune ', 1, 1187000, 'Mô tả: ', './img/nu4.webp',0,1))
    products.push(new Product('Giày Búp Bê Nữ', 1, 457000 , 'Mô tả: ', './img/nu5.webp',1,1))

    products.push(new Product('Dép Eva Phun Trẻ Em', 2, 226000, 'Mô tả: ', './img/treEm3.webp',0,0))
    products.push(new Product('Giày Thể Thao Bé Trai X Junior', 2, 643000 , 'Mô tả: ', './img/te.webp',0,0))
    products.push(new Product('Giày Thể Thao Bé Trai DSB', 2, 457000 , 'Mô tả: ', './img/treEm5.webp',0,0))
    // products.push(new Product())
    localStorage.setItem('products', JSON.stringify(products))
}else{
    Product.count = products.length    
}

function updateQty(){
    if (carts.length > 0){
        let qty = document.getElementById("qty")
        qty.style.display = "block"
        qty.innerText = carts.length
    }
}

function renData(){
    updateQty()
    let form = document.querySelector('.header-search form')
    form.addEventListener('submit', e=>{
        let cate = form.children[0].value
        let name = form.children[1].value
        callSearch(parseInt(cate), name)
    })
    blur = document.getElementById('blur')
    popup_login = document.getElementById('popup-login')
    popup_signup = document.getElementById('popup-signup')
    popup_detail = document.getElementById('popup-prd-detail')
    popup_signup_complete = document.getElementById('popup-signup-complete')
    popup_must_login = document.getElementById('popup-must-login')

    login_info = localStorage.getItem('signed')
    login_info = JSON.parse(login_info)
    if (login_info != null){
        let tmp = document.getElementById('login-name')
        tmp.innerText = login_info.name
        tmp.classList.add('signed')
        let logout_btn = document.getElementById('btn-logout')
        logout_btn.addEventListener('click', ()=>{
            localStorage.removeItem('signed')
            location.reload()
        })

        if (login_info.role == '0'){
            let btn = document.createElement('button')
            btn.innerText = "Admin"
            btn.onclick = function (){
                window.location.href = './admin.html'
            }
            logout_btn.parentNode.appendChild(btn)
            logout_btn.parentNode.appendChild(logout_btn)
        }
    }else {
        //Popup login
        document.getElementById('btn-login').addEventListener('click',
        (event)=>{
            blur.classList.toggle('active')
            popup_login.classList.toggle('active')
            // popup_login.style.top = "50%"
        })

    }


    // $('#body').load('./admin.html', adminRen) //Sửa admin.html thành tên file của mình
    // $('#body').load('./shopee.html') //Sửa admin.html thành tên file của mình
    // Search selection
    let srchSelect =  document.querySelector('.input-select')
    let tmp = document.createElement('option');
    tmp.setAttribute('value', -1)
    tmp.innerText = 'Tất cả'
    srchSelect.append(tmp)
    categories.forEach((ele, index) => {
        tmp = document.createElement('option');
        tmp.setAttribute('value', index)
        tmp.innerText = ele
        srchSelect.appendChild(tmp)
    });

    let link = location.href.split('?')
    // console.log(link[0].includes('admin.html'));
    
    if (!link[0].includes('admin.html')){
        
        // Navigation
        let navBar = document.querySelector('nav > .container')
        let aMain = document.createElement('a');
        aMain.innerText = "Trang chủ"
        aMain.href = './index.html'
        aMain.addEventListener('click', e=>{
            localStorage.removeItem('search')
        })
        // if (JSON.parse(localStorage.getItem('search')).cate == -1)
        //     aMain.classList.add('active')
        navBar.appendChild(aMain)
        
        let a
        const search = JSON.parse(localStorage.getItem('search'))
        for (let i = 0; i < 4; i++){
            a = document.createElement('a');
            a.innerText = categories[i]
            a.setAttribute('onclick', `callSearch(${i}, '')`)

            if (search != null && search.cate == i)
                a.classList.add('active')
            navBar.appendChild(a)
        }
        
        switch (link[1]){
            case 'checkout':
                document.getElementById('checkout').style.display = 'block'
                renCheckout()
                break
            case 'search' :
                document.getElementById('search').style.display = 'block'
                renSearchPage()
                break
            default:
                aMain.classList.add('active')
                document.getElementById('home').style.display = 'block'
                renHome()
                break

            
        }
        

        //Button login
        document.getElementById('login-btn').addEventListener('click',
            (event)=>{
                const form_login = event.currentTarget.parentNode.parentNode.children[2].children[0]
                const user = form_login.children[0].value
                const pass = form_login.children[1].value
                const errText = form_login.children[2]
                if (user == "" || pass == ""){
                    errText.innerText = "Tài khoản mật khẩu không được trống!"
                    errText.style.display = "block"
                    return
                }
                let isLogin = false
                errText.style.display = 'none'
                accounts.forEach((ele) => {
                    if (ele.username == user && ele.password == pass){
                        localStorage.setItem('signed',JSON.stringify(ele))
                        isLogin = true
                        location.reload()
                        return
                    }
                })
                if (!isLogin){
                    errText.innerText = "Tài khoản mật khẩu không đúng!"
                    errText.style.display = "block"
                }
                
            }
        )

        document.getElementById('signup-btn').addEventListener('click', event =>{
            popup_login.classList.remove('active')
            setTimeout(() => {
                popup_signup.classList.add('active')
            }, 200);
            // popup_signup.top = "50%"
        })

        document.querySelector('#popup-signup .login').addEventListener('click', event =>{
            popup_signup.classList.remove('active')
            setTimeout(() => {
                popup_login.classList.add('active')
            }, 200);
        })

        const signup_form = document.querySelector('#popup-signup .body form')
        const signup_err = document.querySelector('#popup-signup .input-error')
        let signup_info = new Account()
        signup_form.children[0].addEventListener('input', event=>{
            if (event.target.value == "" || event.target.value.trim() == ""){
                signup_err.textContent = "Tài khoản không được trống!"
                signup_err.style.display = 'block'
                event.target.style.borderColor = 'red'
            }else {
                signup_err.style.display = 'none'
                event.target.style.borderColor = 'unset'
                signup_info.username = event.target.value
            }
        })
        signup_form.children[1].addEventListener('input', event=>{
            if (event.target.value == ""){
                signup_err.textContent = "Mật khẩu không được trống!"
                signup_err.style.display = 'block'
                event.target.style.borderColor = 'red'
            }else {
                signup_err.style.display = 'none'
                event.target.style.borderColor = 'unset'
                signup_info.password = event.target.value
            }
        })
        signup_form.children[2].addEventListener('input', event=>{
            if (event.target.value == "" || event.target.value.trim() == ""){
                signup_err.textContent = "Tên tài khoản không được trống!"
                signup_err.style.display = 'block'
                event.target.style.borderColor = 'red'
            }else {
                signup_err.style.display = 'none'
                event.target.style.borderColor = 'unset'
                signup_info.name = event.target.value
            }
        })
        signup_form.children[3].addEventListener('input', event=>{
            if (event.target.value == "" || event.target.value.trim() == ""){
                signup_err.textContent = "Địa chỉ không được trống!"
                signup_err.style.display = 'block'
                event.target.style.borderColor = 'red'
            }else {
                signup_err.style.display = 'none'
                event.target.style.borderColor = 'unset'
                signup_info.address = event.target.value
            }
        })
        signup_form.children[4].addEventListener('input', event=>{
            if (event.target.value == "" || event.target.value.trim() == ""){
                signup_err.textContent = "Số điện thoại không được trống!"
                signup_err.style.display = 'block'
                event.target.style.borderColor = 'red'
            }else {
                signup_err.style.display = 'none'
                event.target.style.borderColor = 'unset'
                signup_info.phoneNumber = event.target.value
            }
        })

        //Button sign up
        document.querySelector('#popup-signup .signup').addEventListener('click', ()=>{
            for (let i = 0; i < 5; i++){
                signup_form.children[i].dispatchEvent(new Event('input'))
            }
            console.log(signup_info);
            if (signup_err.style.display == 'none'){
                if (accounts.findIndex((ele)=>{
                    return ele.username == signup_info.username
                }) > -1) {
                    signup_err.textContent = "Tên tài khoản đã tồn tại!"
                    signup_err.style.display = 'block'
                    signup_form.children[0].style.borderColor = 'red'
                }else {
                    accounts.push(new Account(signup_info.name, signup_info.username, signup_info.password, 1, signup_info.address, signup_info.phoneNumber))
                    localStorage.setItem('signed', JSON.stringify(accounts[accounts.length - 1]))
                    localStorage.setItem( 'acc' ,JSON.stringify(accounts))
                    location.reload()
                }
            }
        })

    }else {
        if (login_info == null || login_info.role != 0)
            window.location.href = "./index.html"
    }


    //Disable blur
    document.getElementById('blur').addEventListener('click',disablePopup)

    document.querySelector('#popup-must-login .login').addEventListener('click', event=>{
        popup_must_login.style.top = 0
        popup_must_login.classList.remove('active')
        setTimeout(() => {
            popup_login.style.top = "50%"
            popup_login.classList.add('active')
        }, 200);
    })

    document.querySelector('#popup-must-login .cancel').addEventListener('click', event=>{
        popup_must_login.style.top = 0
        popup_must_login.classList.remove('active')
        blur.classList.remove('active')
    })

}


window.onload = renData

function renMoney(money){
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
      
      return formatter.format(money)
}

var messHide = null

// function addCart(id){
//     products.forEach((ele)=>{
//         if (id == ele.id){
//             carts.push(ele)
//             localStorage.setItem('carts',JSON.stringify(carts))
//         }

//     })
//     updateQty()
//     if (messHide != null) 
//         clearTimeout(messHide)
//     messHide = setTimeout(()=>{
        // document.getElementById('popup-addCart').classList.remove('active')
//     }, 1000)
//     document.getElementById('popup-addCart').classList.add('active')

// }


function addCart(prd){
    if (carts.findIndex((ele)=> {
        return ele.prd.id == prd.id
    }) > -1){
        console.log('Trùng');
        return
    }
    carts.push(new Cart(prd))
    localStorage.setItem('carts', JSON.stringify(carts))
    updateQty()
    if (messHide != null)
        clearTimeout(messHide)
    messHide = setTimeout(() => {
        document.getElementById('popup-addCart').classList.remove('active')
    }, 1000);
    document.getElementById('popup-addCart').classList.add('active')
}

function callSearch(cate, name){
    let search = {
        cate: cate,
        name: name
    }
    localStorage.setItem('search', JSON.stringify(search))
    window.location.href = './?search'
}