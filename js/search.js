
function renSearch(n){

    let s = ''
    products.forEach(
        function(ele){
            let isNew = '';
            if (n == -1 ||categories[n].includes(ele.cate))

                if (ele.new == 1)
                    isNew = '<span class="product-status">NEW</span>'
                    s += `<div class="product-item">
                    <div class="product-img" style="background-image:url()"></div>
                    <div class="product-label">
                        <span class="product-discount">-30%</span>
                        `+ isNew +`
                        </div>
                    <div class="product-category">${ele.cate}</div>
                    <div class="product-name">${ele.name}</div>
                    <div class="price-box">
                        <span class="old-price">${ele.price}</span>
                        
                    </div>
                    <div class="product-rate">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="product-action">
                        <span class="product-like product-liked">
                            <i class="product-like-icon far fa-heart"></i>
                            <i class="product-like-icon-fill fas fa-heart"></i>
                        </span>
                        <span class="product-cmp">
                            <i class="fa-solid fa-arrow-right-arrow-left"></i>
                        </span>
                        <span class="product-quickview">
                            <i class="fa-regular fa-eye"></i>
                        </span>
                    </div>
                </div>`
            
        } 
        )
    document.querySelectorAll('.right-content')[0].innerHTML = s

}

