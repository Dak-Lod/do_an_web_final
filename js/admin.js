

const cate_admin = [
    'Trang chủ',
    'Quản lý sản phẩm',
    'Quản lý tài khoản',
    'Quản lý thể loại',
    'Quản lý đơn hàng',
]

let popup_rmv;
let popup_edt;
const currentView = location.href.split('?')
let popup_rmv_account;
let popup_edt_account;
let popup_edt_bill;

function cate_ren(categories){
    var table = document.querySelector('#cate-table > tbody')
    table.parentElement.childNodes[4].remove()
    table = document.createElement('tbody')
    document.querySelector('#cate-table').append(table)
    categories.forEach((ele, index) => {
        if (ele == null) return 
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.textContent = index
        tr.append(td)

        td = document.createElement('td')
        td.textContent = ele
        tr.appendChild(td)
        
        td = document.createElement('td')
        
        // let btn = document.createElement('button')
        // let i = document.createElement('i')
        // i.classList.add('fa-sharp', 'fa-solid', 'fa-gear')
        // btn.appendChild(i)
        // btn.setAttribute('class', 'btn-edt')
        // td.appendChild(btn) 

        // btn.addEventListener('click', function(e){
        //     blur.classList.toggle('active')
        //     popup_edt_cate.classList.toggle('active')
        //     popup_edt_cate.style.top = "50%"

        //     const info = e.currentTarget.parentNode.parentNode.children
        //     const index = info[0].textContent
        //     const popup_info = popup_edt_cate.children[2].children[0].children
        //     popup_info[0].children[1].value = index
        //     popup_info[1].children[1].value = categories[index].name


        // })
        
        
        // btn = document.createElement('button')
        // btn.innerHTML = `<i class="fa-sharp fa-solid fa-circle-xmark"></i>`
        // btn.setAttribute('class', 'btn-rmv')
        // btn.addEventListener('click', function(e){
        //     const blur = document.getElementById('blur')
        //     blur.classList.toggle('active')
        //     popup_rmv_account.classList.toggle('active')
        //     popup_rmv_account.style.top = "50%"
        //     const info = e.currentTarget.parentNode.parentNode.children
        //     const popup_info = popup_rmv_account.children[2].children

        //     const id_rmv = info[0].textContent
        //     const index = accounts.findIndex(({id})=>{
        //         return id_rmv == id
        //     })
        //     popup_info[0].textContent = id_rmv
        //     popup_info[1].textContent = accounts[index].name
            

        // })
        // td.appendChild(btn)
        tr.append(td)
        table.append(tr)

    })
}

function account_ren(accounts){
    var table = document.querySelector('#account-table > tbody')
    table.parentElement.childNodes[4].remove()
    table = document.createElement('tbody')
    document.querySelector('#account-table').append(table)
    accounts.forEach(ele => {
        if (ele == null) return 
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.textContent = ele.id
        tr.append(td)

        td = document.createElement('td')
        td.textContent = ele.name
        tr.appendChild(td)

        td = document.createElement('td')
        td.textContent = ele.username
        tr.appendChild(td)

        td = document.createElement('td')
        td.textContent = role[parseInt(ele.role)]
        tr.appendChild(td)

        td = document.createElement('td')
        // td.innerHTML = `<button class="btn-edt">
        // <i class="fa-sharp fa-solid fa-gear"></i>
        // </button>
        // <br>
        // <button class="btn-rmv">
        // <i class="fa-sharp fa-solid fa-circle-xmark"></i>
        // </button>`
        
        let btn = document.createElement('button')
        let i = document.createElement('i')
        i.classList.add('fa-sharp', 'fa-solid', 'fa-gear')
        btn.appendChild(i)
        btn.setAttribute('class', 'btn-edt')
        td.appendChild(btn) 
        
        

        btn.addEventListener('click', function(e){
            const blur = document.getElementById('blur')
            blur.classList.toggle('active')
            popup_edt_account.classList.toggle('active')
            popup_edt_account.style.top = "50%"

            const info = e.currentTarget.parentNode.parentNode.children
            const id_change = info[0].textContent
            const popup_info = popup_edt_account.children[2].children[0].children
            popup_info[0].children[1].value = id_change

            const index = accounts.findIndex(({id})=>{
                return id == id_change
            })

            popup_info[1].children[1].value = accounts[index].name
            popup_info[2].children[1].value = accounts[index].username
            popup_info[3].children[1].children[0].value = accounts[index].password
            popup_info[4].children[1].value = accounts[index].role
            
            

        })
        
        btn = document.createElement('button')
        btn.innerHTML = `<i class="fa-sharp fa-solid fa-circle-xmark"></i>`
        btn.setAttribute('class', 'btn-rmv')
        btn.addEventListener('click', function(e){
            const blur = document.getElementById('blur')
            blur.classList.toggle('active')
            popup_rmv_account.classList.toggle('active')
            popup_rmv_account.style.top = "50%"
            const info = e.currentTarget.parentNode.parentNode.children
            const popup_info = popup_rmv_account.children[2].children

            const id_rmv = info[0].textContent
            const index = accounts.findIndex(({id})=>{
                return id_rmv == id
            })
            popup_info[0].textContent = id_rmv
            popup_info[1].textContent = accounts[index].name
            
            

        })
        td.appendChild(btn)
        tr.append(td)
        table.append(tr)

    })
}

function product_ren(products){
    var table =  document.querySelector('.table-view > table > tbody')
    table.parentElement.childNodes[4].remove()
    table = document.createElement('tbody')
    document.querySelector('.table-view > table').append(table)
    products.forEach(function (ele){
        if (!ele) return
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.textContent = ele.id
        tr.append(td)

        let img = document.createElement('img')
        td = document.createElement('td')
        img.setAttribute('src', ele.img)
        td.append(img)
        tr.append(td)
        
        td = document.createElement('td')
        td.append(ele.name)
        tr.append(td)
        
        td = document.createElement('td')
        td.append(ele.cate)
        tr.append(td)

        td = document.createElement('td')
        td.append(moneyFormat(ele.price) + 'đ')
        tr.append(td)
        
        td = document.createElement('td')
    

        let btn = document.createElement('button')
        let i = document.createElement('i')
        i.classList.add('fa-sharp', 'fa-solid', 'fa-gear')
        btn.appendChild(i)
        btn.setAttribute('class', 'btn-edt')
        td.appendChild(btn) 
        btn.addEventListener('click', function(e){
            const blur = document.getElementById('blur')
            blur.classList.toggle('active')
            popup_edt.classList.toggle('active')
            popup_edt.style.top = "50%"

            // const info = e.currentTarget.parentNode.parentNode.children
            // const id_change = info[0].textContent
            // // const name = info[1].children[1].textContent
            // // const price = info[2].children[1].textContent
            // // const cate = info[3].children[1].textContent
            // // const img = info[4].
            const popup_info = popup_edt.children[2].children[0].children
            popup_info[0].children[1].value = ele.id

            // const index = products.findIndex(({id})=>{
            //     return id == id_change
            // })

            popup_info[1].children[1].value = ele.name
            popup_info[2].children[1].value = ele.price
            switch (ele.cate){
                case 'Nam':
                    popup_info[3].children[1].value = 0
                    break
                case 'Nữ':
                    popup_info[3].children[1].value = 1
                    break
                case 'Trẻ em':
                    popup_info[3].children[1].value = 2
                    break
            }

            const imgFile = new File([''], ele.img.split('/')[2], {
                type: 'img'
            })

            const dataTransfer = new DataTransfer()
            dataTransfer.items.add(imgFile)

            popup_info[4].children[1].children[0].files = dataTransfer.files
            popup_info[4].children[1].children[1].src = ele.img
            popup_info[5].children[1].value = ele.des

        })

        

        btn = document.createElement('button')
        btn.innerHTML = `<i class="fa-sharp fa-solid fa-circle-xmark"></i>`
        btn.setAttribute('class', 'btn-rmv')
        btn.addEventListener('click', function(e){
            const blur = document.getElementById('blur')
            blur.classList.toggle('active')
            popup_rmv.classList.toggle('active')
            popup_rmv.style.top = "50%"
            const info = e.currentTarget.parentNode.parentNode.children
            const popup_info = popup_rmv.children[2].children
            
            popup_info[0].textContent = info[0].textContent
            popup_info[1].textContent = info[2].textContent
            popup_info[2].src = info[1].children[0].src



        })
        
        td.appendChild(btn)

        tr.append(td)
        table.append(tr)
    });
}

function rmvImg(){
    const dataTransfer = new DataTransfer()
    document.querySelector('#popup-edt .img-preview').src = './img/noimg.png'
    document.querySelector('#popup-edt .img-product').files = dataTransfer.files

}

function adminRen(){
    
    // Load view


    popup_edt = document.getElementById('popup-edt')
    popup_rmv = document.getElementById('popup-rmv')
    
    popup_edt_account = document.getElementById('popup-edt-account')
    popup_rmv_account = document.getElementById('popup-rmv-account')
    
    popup_edt_cate = document.getElementById('popup-edt-cate')
    popup_rmv_cate = document.getElementById('popup-rmv-cate')

    popup_edt_bill = document.getElementById('popup-edt-bill')

    document.querySelectorAll('.popup .cancel').forEach(ele=>{
        ele.addEventListener('click', disablePopup)
    })


    // Navigation
    const navBar = document.querySelector('nav')
    let navBar_cnt = document.querySelector('nav > .container')
    navBar_cnt.remove()
    navBar_cnt = document.createElement('div')
    navBar_cnt.classList.add('container')
    navBar.append(navBar_cnt)
    let indexActive = '1'
    if (currentView[1] != null){
        indexActive = currentView[1].split('=')[1]
        // console.log(currentView[1].split('=')[1]);
    }
    switch (indexActive){
        case '2':
            document.querySelector('.manager.account').style.display = "flex"
            account_ren(accounts)
            // Account form add
            let formAccount = document.getElementById('form-account')
            console.log();
            formAccount.children[1].children[1].value = Account.count + 10001
            // Input check
            formAccount.children[2].children[1].addEventListener('input', function (e){
                if (e.currentTarget.value == "" || e.currentTarget.value.trim() == ""){
                    e.currentTarget.setCustomValidity("Tên tài khoản không được trống!")
                    e.currentTarget.reportValidity()   
                }else
                    e.currentTarget.setCustomValidity("")
            })

           

            formAccount.children[3].children[1].addEventListener('input', function (e){
                if (e.currentTarget.value == "" || e.currentTarget.value.trim() == ""){
                    e.currentTarget.setCustomValidity("Tên đăng nhập không được trống!")
                    e.currentTarget.reportValidity()   
                }else
                    e.currentTarget.setCustomValidity("")
            })
            
            formAccount.children[4].children[1].children[0].addEventListener('input', function (e){

                    if (e.currentTarget.value == "" ){
                        e.currentTarget.setCustomValidity("Mật khẩu không được trống!")
                        e.currentTarget.reportValidity()   
                    }else
                        e.currentTarget.setCustomValidity("")
            })

            formAccount.children[5].children[1].addEventListener('input', function (e){
                if (e.currentTarget.value == "" || e.currentTarget.value.trim() == ""){
                    e.currentTarget.setCustomValidity("Loại tài khoản không được trống!")
                    e.currentTarget.reportValidity()   
                }else
                    e.currentTarget.setCustomValidity("")
            })
            
            
            
            
            // Popup btn remove
            popup_rmv_account.children[3].children[0].onclick = function(){
                const id_rmv =  popup_rmv_account.children[2].children[0].textContent
                const index = accounts.findIndex(({id})=>{
                    return id == id_rmv
                })
                accounts.splice(index, 1)
                localStorage.setItem('acc', JSON.stringify(accounts))
                location.reload()
            }

            // Popup btn edit
            popup_edt_account.children[3].children[0].onclick = function(){
                const form = document.querySelector('#popup-edt-account form')
                form.dispatchEvent(new Event('submit'))
            }


            break
            
        case '3':
                document.querySelector('.manager.cate').style.display = "flex"
                cate_ren(categories)
            // Cate form add
            // let formCate = document.getElementById('form-cate')

            // Popup btn remove
            // popup_rmv_account.children[3].children[0].onclick = function(){
            //     const id_rmv =  popup_rmv.children[2].children[0].textContent
            //     const index = accounts.findIndex(({id})=>{
            //         return id == id_rmv
            //     })
            //     accounts.splice(index, 1)
            //     localStorage.setItem('acc', JSON.stringify(accounts))
            //     location.reload()
            // }

            // // Popup btn edit
            // popup_edt_account.children[3].children[0].onclick = function(){
            //     const form = document.querySelector('#popup-edt-account form')
            //     form.dispatchEvent(new Event('submit'))
            // }
        
        
            break
            
        case '4':
            
            document.querySelector('.manager.bill').style.display = "flex"
            renBill(bills)

            break

        default:
            document.querySelector('.manager.product').style.display = "flex"
            product_ren(products)
                //Add product
    
            const id = Product.count + 1 + 10000
            document.getElementById('id-product').value = id
    
    
            const select = document.getElementsByClassName('cate-product')
            const dataList = document.createElement('datalist')
            
            dataList.id = "cate-datalist"
            
            categories.forEach(function (ele){
                const option = document.createElement('option')
                option.value = ele
                dataList.appendChild(option)
            })
            Array.prototype.forEach.call(select, ele => {
                ele.append(dataList)
                ele.setAttribute('list', 'cate-datalist')
    
            })
            
    
            //Input check
            // document.getElementById('name-product').addEventListener('input', function (e){
            //     if (e.target.value == "" || e.target.value.trim() == ""){
            //         e.target.setCustomValidity("Tên sản phẩm không được trống!")
            //         e.target.reportValidity()   
            //     }else
            //         e.target.setCustomValidity("")
            // })
    
            // document.getElementById('cate-product').addEventListener('input', function (e){
            //     if (e.target.value == "" || e.target.value.trim() == ""){
            //         e.target.setCustomValidity("Thể loại sản phẩm không được trống!")
            //         e.target.reportValidity()   
            //     }else
            //         e.target.setCustomValidity("")
            // })
    
    
    
            //add Image
            const imgUpload = document.getElementsByClassName("img-product")
            Array.prototype.forEach.call(imgUpload, ele=>{
                ele.addEventListener("change", function (event) {
                    const file = event.target.files[0]
                    const img = event.currentTarget.parentElement.children[1]
                    img.file = file
                    img.style.display = "block";
                    const reader = new FileReader();
                    reader.onload = function (e){
                        img.src = e.target.result
                    }
                    reader.readAsDataURL(file)
            
                })
    
            })
            // Popup btn remove
            popup_rmv.children[3].children[0].onclick = function(){
                const id_rmv =  popup_rmv.children[2].children[0].textContent
                const index = products.findIndex(({id})=>{
                    return id == id_rmv
                })
                products.splice(index, 1)
                localStorage.setItem('products', JSON.stringify(products))
                location.reload()
            }
    
            // Popup btn edit
            // popup_edt.children[3].children[0].onclick = function(){
            //     const form = document.querySelector('#popup-edt form')
            //     form.dispatchEvent(new Event('submit'))
            // }
            break
    }

    cate_admin.forEach((ele, index) => {
        var span = document.createElement('span');
        span.setAttribute('class', 'active');
        var link = document.createElement('a');
        if (index == 0)
        link.setAttribute('href', './index.html')
        else {
            link.setAttribute('href', location.pathname + `?page=${index}`)
        }
        if (index == indexActive)
        link.classList.toggle('active')
        link.innerText = ele
        navBar_cnt.appendChild(link)
    })
    
    
    
    


    // Show pass
    let showPass = document.getElementsByClassName('toggle-pass')
    Array.prototype.forEach.call(showPass, ele =>{
        ele.addEventListener('click', e=>{
            let input = e.currentTarget.parentElement.children[0]
            if (input.type == 'password')
                input.type = 'text'
            else    
                input.type = 'password'
            e.target.classList.toggle('fa-eye')
            e.target.classList.toggle('fa-eye-slash')
            
        })
    })

    // Search account
    document.getElementById('searchAccount').addEventListener('input', e=>{
        const id = e.target.value.toUpperCase()
        if (id.trim() !== ""){
            if (e.currentTarget.parentNode.children[0].value == 1){
                account_ren(accounts.map(function(ele){
                    if (ele.id.match(id))
                        return ele
                    else return null
                }))
            }else{
                account_ren((accounts.map(function(ele){
                    if (removeAccents(ele.name.toUpperCase()).match(id) || ele.name.toUpperCase().match(id) || removeAccents(ele.name.toUpperCase()).match(removeAccents(id)))
                        return ele
                    else return null
                })))
            }
        }else {
            account_ren(accounts)
        }
    })

    

}


function searchChange(){
    let min = document.getElementById('product-price-min').value;
    let max = document.getElementById('product-price-max').value;
    let product_search = products

    if (min != "") 
        min = parseInt(min)
    if (max != "") 
        max = parseInt(max)

    var id = document.getElementById('product-id-search').value.toUpperCase()
    if (id.trim() !== "" || min != "" || max != ""){
        if (document.getElementById('searchSlt').value == 1)
            product_ren(product_search.map(function(ele){
                if (ele.id.toString().match(id))
                    if (min == "" || min <= ele.price)
                        if (max == "" || max >= ele.price)
                    return ele
                else return null
            }))
        else
            product_ren(product_search.map(function(ele){
                if (removeAccents(ele.name.toUpperCase()).match(id) || ele.name.toUpperCase().match(id) || removeAccents(ele.name.toUpperCase()).match(removeAccents(id)))
                    if (min == "" || min <= ele.price)
                        if (max == "" || max >= ele.price)
                    return ele
                else return null
            }))
    }else{
        product_ren(product_search)
    }


}


function checkNullPrd(ele){
    let err = document.querySelector('.manager.product .input-err')
    if (ele.value.trim() != "") {
        err.style.display = 'none'
        ele.style.borderColor = 'unset'
        return
    }
    err.innerText = 'Thông tin không được trống!'
    err.style.display = 'block'
    ele.style.borderColor = 'red'

}

function addProduct(){
    try {
        const id = document.querySelector(".product-add  #id-product").value
        let name = document.querySelector(".product-add  #name-product")
        let price = document.querySelector('.product-add #price-product')
        let cate = document.querySelector(".product-add  #cate-product")   
        const des = document.querySelector(".product-add  #des-product").value
    
       
        name.dispatchEvent(new Event('input'))
        price.dispatchEvent(new Event('input'))

        if (name.value.trim() == "" || price.value.trim() == ""){
            return false
        }
        name = name.value
        price = price.value
        cate = parseInt(cate.value)
     
        const file = document.getElementById("img-product").files[0]
        let img = 'noimg.png'
        if (file != null)
            img = file.name
        
        products.push(new Product(name, cate, price, des, './img/' + img))
        localStorage.setItem('products', JSON.stringify(products))
        location.reload()
        return false


    }catch (e){
        alert(e)
        return false
    }


}

function changePrd(ele){
    let info_change = ele.parentNode.parentNode.children[2].children[0]
    let input_err = document.querySelector('#popup-edt .input-err')
    if (info_change.children[1].children[1].value.trim() == "" || info_change.children[2].children[1].value.trim() == ""){
        input_err.innerText = "Thông tin không được trống!"
        input_err.style.display = 'block'
        return false
    }
    input_err.style.display = 'none'
    let index = products.findIndex(ele=>{
        return ele.id == info_change.children[0].children[1].value
    })
    
    
    products[index].name = info_change.children[1].children[1].value
    products[index].price = info_change.children[2].children[1].value
    products[index].cate = categories[info_change.children[3].children[1].value]
    if (info_change.children[4].children[1].children[0].files[0] != null){
        products[index].img = './img/' + info_change.children[4].children[1].children[0].files[0].name
    }else {
        products[index].img = './img/noimg.png'
    }
    products[index].des = info_change.children[5].children[1].value
    
    localStorage.setItem('products', JSON.stringify(products))
    location.reload()
    
}

function addAccount(){
    console.log('test');
    let formAccount = document.getElementById('form-account')
    
    for (let i = 0; i < 6; i++){
        formAccount.children[2].children[1]
    }

    const name = formAccount.children[2].children[1].value
    const user = formAccount.children[3].children[1].value
    const pass = formAccount.children[4].children[1].children[0].value
    const role = formAccount.children[5].children[1].value

    if (name.trim() == "" || user.trim() == "" || pass.trim() == ""){
        return false;
    }


    accounts.push(new Account(name, user, pass, role))
    
    localStorage.setItem('acc', JSON.stringify(accounts))
    location.reload()
    return false
}

function changeAccount(e){
    const popup_info = popup_edt_account.children[2].children[0].children
    const id_change  = popup_info[0].children[1].value

    if (popup_info[1].children[1].value.trim() == "" ||
       popup_info[2].children[1].value.trim() == ""||
       popup_info[3].children[1].children[0].value.trim() == "")
        return false
    const index = accounts.findIndex(({id})=>{  
        return id == id_change
    })

    accounts[index].name = popup_info[1].children[1].value
    accounts[index].username = popup_info[2].children[1].value
    accounts[index].password = popup_info[3].children[1].children[0].value
    accounts[index].role = popup_info[4].children[1].value
    
    localStorage.setItem('acc', JSON.stringify(accounts))
    location.reload()
    return false
}
let currentBill = []

function renBill(b){
    currentBill = b
    var table =  document.querySelector('#bill_table > tbody')
    table.parentElement.childNodes[4].remove()
    table = document.createElement('tbody')
    document.querySelector('#bill_table').append(table)
    b.forEach(function (ele){
        if (!ele) return
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.append(ele.user.name)
        tr.append(td)

        td = document.createElement('td')
        td.append(ele.date)

        tr.append(td)
        
        td = document.createElement('td')
        td.append(ele.info.map(ele=>{
            return ele.qty + 'x ' + ele.prd.name
        }).join('\n'))

        tr.append(td)
        
        td = document.createElement('td')
        td.append(moneyFormat(ele.total) + 'đ')
        tr.append(td)

        td = document.createElement('td')
        if (ele.status) {
            td.append('Đã xử lý')
        }else {
            td.append('Chưa xử lý')
        }
        tr.append(td)
        
        td = document.createElement('td')
    

        let btn = document.createElement('button')
        let i = document.createElement('i')
        i.classList.add('fa-sharp', 'fa-solid', 'fa-gear')
        btn.appendChild(i)
        btn.setAttribute('class', 'btn-edt')
        td.appendChild(btn) 
        btn.addEventListener('click', function(e){
            const blur = document.getElementById('blur')
            blur.classList.toggle('active')
            popup_edt_bill.classList.toggle('active')
            popup_edt_bill.style.top = "50%"

            let form = document.querySelector('#popup-edt-bill form')
            form.children[0].children[1].innerText = ele.user.name
            form.children[1].children[1].innerText = ele.date
            form.children[2].children[1].innerText = ele.info.map(ele=>{
                return ele.qty + 'x ' + ele.prd.name
            }).join('\n')
            form.children[3].children[1].innerText = moneyFormat(ele.total) + 'đ'
            if (ele.status == 0){
                form.children[4].children[1].innerText = 'Chưa xử lý'
                document.querySelector('#popup-edt-bill .status').style.color = 'var(--color-button-rmv)'
                document.querySelector('#popup-edt-bill input[type="checkbox"]').checked = false
            }
            else {
                form.children[4].children[1].innerText = 'Đã xử lý'
                document.querySelector('#popup-edt-bill .status').style.color = 'var(--color-primary-dark)'
                document.querySelector('#popup-edt-bill input[type="checkbox"]').checked = true
            }
            
            document.querySelector('#popup-edt-bill input[type="checkbox"]').setAttribute('onchange', `editBillChange(${ele.id},this)`)

        })

        tr.append(td)
        table.append(tr)
    });

}

function editBillChange(id, e){
    let form = document.querySelector('#popup-edt-bill form')
    const bill = bills.find(ele=>{
        return ele.id == id
    })
    if (e.checked){
        bill.status = 1
        form.children[4].children[1].innerText = 'Đã xử lý'
        document.querySelector('#popup-edt-bill .status').style.color = 'var(--color-primary-dark)'
    }
    else {
        bill.status = 0 
        form.children[4].children[1].innerText = 'Chưa xử lý'
        document.querySelector('#popup-edt-bill .status').style.color = 'var(--color-button-rmv)'
    }
    localStorage.setItem('bills', JSON.stringify(bills))
    renBill(currentBill)
}

function searchChangeBill(){
    let form = document.querySelector('.manager.bill form')
    let id = form.children[1].children[1].value.toUpperCase()
    let date = new Date(form.children[2].children[1].value)
    let status = parseInt(document.getElementById('bill-status-search').value)


    if (id.trim() !== "" || !isNaN(date.getTime()) || status != -1){
        renBill(bills.map(function(ele){

            if (removeAccents(ele.user.name.toUpperCase()).match(id) || ele.user.name.toUpperCase().match(id) || removeAccents(ele.user.name.toUpperCase()).match(removeAccents(id)))
                if (isNaN(date.getTime()) || ele.date.match(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`))
                    if (status == -1 || status == ele.status)
                        return ele
            
        }))
    }else{
        renBill(bills)
    }

    // let productAfterSelect = products.map(
    //     function (ele, index){
    //         console.log(ele.id + 'thu tu ' + index);
    //         if (ele.cate == "Nam") return ele
    //         else return null
    //     }
    // )

}

window.onload = ()=>{
    renData()
    adminRen()
}

