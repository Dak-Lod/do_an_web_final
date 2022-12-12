
function renSearch(prd){

    // const wrapper = document.createElement('div')
    // wrapper.className = "product-item"
    // const img = document.createElement('img');
    // img.src = prd.img
    // const status = document.createElement('span')
    // status.className="product-status"
    // status.innerText= 'MỚI'
    // const cate = document.createElement('div')
    // cate.className = "product-cate"
    // cate.innerText = prd.cate
    // const title = document.createElement('div')
    // title.className = "product-name"
    // title.innerText = prd.name
    // const price = document.createElement('div')
    // price.className = "product-price"
    // price.innerText = prd.price + 'đ'
    // const div = document.createElement('div')
    // div.className = 'product_rate'
    // div.innerHTML = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'
    // const footer = document.createElement('div')
    // footer.className = 'addtocart'
    // const btn = document.createElement('button')
    // div.appendChild(btn)
    // btn.className = "cart-button"
    // btn.innerText = "Thêm vào giỏ hàng"
    // wrapper.appendChild(img)
    // wrapper.appendChild(title)
    // wrapper.appendChild(price)
    // wrapper.appendChild(div)
    // wrapper.appendChild(footer)
    // return wrapper

    const wrapper= document.createElement('div')
    wrapper.className='product-item'
    const img= document.createElement('img')
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
    price.innerText = prd.price + 'đ'
    const div = document.createElement('div')
    div.className = 'product-rate'
    div.innerHTML = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'
    const footer = document.createElement('div')
    footer.className = 'addtocart'
    const btn = document.createElement('button')
    footer.appendChild(btn)
    btn.className = "cart-button"
    btn.innerText = "Thêm vào giỏ hàng"
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
   

function cateChanged(obj)
{
    var value = obj.value;
    if (value === 'tatca'){
        //box=
    }
    else if (value === 'nam'){
        
    }
    else if (value === 'nu'){
        
    }
}

function renSearchPage(){
    //renSearch(-1)
    let searchInfo = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
   // document.querySelector("input").value= searchInfo[1].name
    
    let min = parseInt(document.getElementById('pr-min').value)
    let max = parseInt(document.getElementById('pr-max').value)
    console.log(document.querySelector('.right-content'))     
        
    renSP(-1, 0)

   /* if (searchInfo.trim() !== "" || min != -1){
        renSearch(products.map(function(ele){
            if (removeAccents(ele.name.toUpperCase()).match(searchInfo.name) || ele.name.toUpperCase().match(searchInfo.name) || removeAccents(ele.sname.toUpperCase()).match(removeAccents(searchInfo.name)))
                if(ele.cate == searchInfo.cate )
                    if(ele.price >= min && ele.price <= max )
                        return ele
        }))
        } else renSearch(products)   */
}
 
function renSP(n, index){
    let body= document.querySelector('.right-content')
    body.innerHTML = ''
    let count = 0
    products.every(ele =>{
        if (n == -1 || (categories[n].includes(ele.cate))) {
            if (count >= index * 5)
                body.appendChild(renSearch(ele))
            count ++ 
        }
        if (count == (5 * (index + 1))) return false;
        return true;
    })

    document.querySelectorAll('.btn-li').forEach(
        function(item,idx) {
            if(idx <= 2) {
                item.classList.remove('btn--active')
            }
    })

    document.querySelectorAll('.btn-li')[index].classList.add('btn--active')
}