let currentCate = -1
function renSearch(prd){
    const wrapper= document.createElement('div')
    wrapper.className='product-item'
    const img= document.createElement('img')
    img.addEventListener('click', (e)=>{
        blur.classList.toggle('active')
        popup_detail.classList.toggle('active')
        document.querySelector('#popup-prd-detail .left-content img').src = prd.img
        const form = document.querySelector('#popup-prd-detail .right-content')
        form.children[0].textContent = prd.name
        form.children[1].textContent = moneyFormat(prd.price)
        form.children[2].textContent = 'Thể loại: ' + prd.cate
        form.children[3].textContent = 'Mô tả: ' + prd.des
        if (carts.findIndex(e => {
            return e.prd.id == prd.id
        }) > -1){
            form.children[4].classList.add('cartAdded')
            form.children[4].textContent = "Đã thêm vào giỏ"
            form.children[4].disabled = true
        }
        else{
            
            form.children[4].classList.remove('cartAdded')
            form.children[4].disabled = false
            form.children[4].textContent = "Thêm vào giỏ"
            form.children[4].addEventListener('click', function (event){
                event.target.classList.add('cartAdded')
                event.target.innerText = "Đã thêm vào giỏ"
                event.target.disabled = true
                addCart(prd)
            })
        }
    })
    img.className='product-img'
    img.src = prd.img
    const status = document.createElement('span')
    status.className="product-status"
    status.innerText= 'MỚI'
    const cate = document.createElement('div')
    cate.className = "product-category"
    cate.innerText = prd.cate
    const title = document.createElement('div')
    title.className = "product-name"
    title.innerText = prd.name
    const price = document.createElement('div')
    price.className = "product-price"
    price.innerText = moneyFormat(prd.price) + 'đ'
    const div = document.createElement('div')
    div.className = 'product-rate'
    div.innerHTML = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'
    const footer = document.createElement('div')
    footer.className = 'addtocart'
    const btn = document.createElement('button')
    footer.appendChild(btn)
    btn.className = "cart-button"
    btn.innerText = "Thêm vào giỏ hàng"
    if (carts.findIndex(e => {
        return e.prd.id == prd.id
    }) > -1){
        btn.classList.add('cartAdded')
        btn.disabled = true
        btn.innerText = "Đã thêm vào giỏ"
    }
    else
        btn.addEventListener('click', function (event){
            event.target.classList.add('cartAdded')
            event.target.innerText = "Đã thêm vào giỏ"
            event.target.disabled = true
            addCart(prd)
        })
    // if (carts.findIndex(e => {
    //     return e.prd.id == prd.id
    // }) > -1){
    //     btn.classList.add('cartAdded')
    //     btn.disabled = true
    //     btn.innerText = "Đã thêm vào giỏ"
    // }
    // else
    //     btn.addEventListener('click', function (event){
    //         event.target.classList.add('cartAdded')
    //         event.target.innerText = "Đã thêm vào giỏ"
    //         event.target.disabled = true
    //         addCart(prd)
    //     })
    wrapper.appendChild(img)
    wrapper.appendChild(cate)
    wrapper.appendChild(title)
    wrapper.appendChild(price)
    wrapper.appendChild(div)
    wrapper.appendChild(footer)
    return wrapper
           
}
    /*let s = ''
    products.forEach(
        function(ele){
            let isNew = '';
            if (n == -1 ||categories[n].includes(ele.cate))
                {
                if (ele.new)
                    
                    s += `
                    <div class="product-item">
                        <img class="product-img" src = "${ele.img}"></img>
                        '<span class="product-status">MỚI</span>'
                        <div class="product-category">${ele.cate}</div>
                        <div class="product-name">${ele.name}</div>
                        <div class="product-price">${ele.price}</div>
                        <div class="product-rate">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>

                        <div class="addtocart">
                            <button class="cart-button">Thêm vào giỏ hàng</button>
                        </div>
                    </div>`}
        } 
        )
    
        document.querySelectorAll('.right-content')[0].innerHTML = s; */
   

function searchChange(cate)
{
    currentProduct = []
    searchIndex = 0
    if (cate != null){
        switch (cate.value){
            case "-1":
                currentCate = -1
                break
            case "0":
                currentCate = 0
                break
            case "1":
                currentCate = 1
                break
            case "2":
                currentCate = 2
                break
            case "3":
                currentCate = 3
                break
        }
    }

    const name = document.getElementById("main-search").value.toUpperCase()
    let min = document.getElementById("pr-min").value
    let max = document.getElementById("pr-max").value
    
    if (min != "")
        min = parseInt(min)
    if (max != "")
        max = parseInt(max)

    products.forEach(function(ele){
        
        if (currentCate == -1 || categories[currentCate].includes(ele.cate))
            if (removeAccents(ele.name.toUpperCase()).match(name) || ele.name.toUpperCase().match(name) || removeAccents(ele.name.toUpperCase()).match(removeAccents(name)))
                if (min == "" || ele.price >= min)
                    if (max == "" || max >= ele.price)
                    currentProduct.push(ele)
        
    })

    renSP(currentProduct)

    
}



function renSearchPage(){
    let searchInfo = JSON.parse(localStorage.getItem('search'))
    const checkCate = document.querySelector('#search .category-wrapper')
    document.getElementById('main-search').value = searchInfo.name
    switch (searchInfo.cate + ''){
        case "-1":
            checkCate.children[0].children[0].checked = true
            currentCate = -1
            searchChange()
            break
        case "0":
            checkCate.children[1].children[0].checked = true
            currentCate = 0
            searchChange()
            break
        case "1":
            checkCate.children[2].children[0].checked = true
            currentCate = 1
            searchChange()
            break
        case "2":
            checkCate.children[3].children[0].checked = true
            currentCate = 2
            searchChange()
            break
        case "3":
            checkCate.children[4].children[0].checked = true
            currentCate = 3
            searchChange()
            break
    }
    document.getElementById('main-search').addEventListener('input', e=>{
        searchChange()
    })
}


function showMoreFunc(){
    searchIndex++
    renSP(currentProduct)
}

let searchIndex = 0
let currentProduct = products

function renSP(prd){
    let body = document.querySelector('.product-view')
    body.innerHTML = ''

    for (let i = 0; i < 5 * (searchIndex + 1); i++){
        if (prd[i] == null) break
        body.appendChild(renSearch(prd[i]))
    }
    
    const showMorebtn= document.querySelector('.showMore button')
    if (prd.length > 5 * (searchIndex + 1)){
        // console.log('tesst');
        showMorebtn.style.display='inline-block'
    }else {
        showMorebtn.style.display='none'
        
    }
        

}