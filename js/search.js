
function renSearch(n){

    let s = ''
    products.forEach(
        function(ele){
            let isNew = '';
            if (n == -1 ||categories[n].includes(ele.cate))

                if (ele.new == 1)
                    isNew = '<span class="product-status">NEW</span>'
                    s += `<div class="product-item">
                    <img class="product-img" src = "${ele.img}"></img>
                    <div class="product-label">
                        <span class="product-discount">-30%</span>
                        `+ isNew +`
                        </div>
                    <div class="product-category">${ele.cate}</div>
                    <div class="product-name">${ele.name}</div>
                    <div class="price-box">
                        <span class="product-price">${ele.price}</span>
                    </div>
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
                </div>`
        } 
        )
    document.querySelectorAll('.right-content')[0].innerHTML = s

}

