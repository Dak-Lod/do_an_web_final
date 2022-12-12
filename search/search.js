let currentCate = -1
function renSearch(prd){
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
   

function cateChanged(cate)
{
    if (cate != null){
        currentProduct = []
        searchIndex = 0
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

    const name = document.getElementById("main-search")
    const min = parseInt(document.getElementById("pr-min"))
    const max = parseInt(document.getElementById("pr-max"))
    
    products.forEach(function(ele){
        
        if (currentCate == -1 || categories[currentCate].includes(ele.cate))
            if (removeAccents(ele.name.toUpperCase()).match(name.value) || ele.name.toUpperCase().match(name.value) || removeAccents(ele.name.toUpperCase()).match(removeAccents(name.value)))
                //if (min.value == "" || max.value =="")
                    if (min.value <= ele.price && max.value >= ele.price)
                    currentProduct.push(ele)
        
    })

    renSP(currentProduct)

    
}



function renSearchPage(){

    console.log(document.querySelector('.right-content'))     
        
    renSP(-1, 0)
    cateChanged(-1)
}


function showMoreFunc(){
    searchIndex++
    renSP(currentProduct)
}

let searchIndex = 0
let currentProduct = []

function renSP(prd){
    let body = document.querySelector('.product-view')
    body.innerHTML = ''

    for (let i = 0; i < 8 * (searchIndex + 1); i++){
        if (prd[i] == null) break
        body.appendChild(renSearch(prd[i]))
    }
    
    const showMorebtn= document.querySelector('.showMore button')
    if (prd.length > 8 * (searchIndex + 1)){
        // console.log('tesst');
        showMorebtn.style.display='inline-block'
    }else {
        showMorebtn.style.display='none'
        
    }
        

}