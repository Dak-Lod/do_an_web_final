
let currentSelectCateNew = -1
let currentSelectCateSell = -1

function renItem(prd){
    const container = document.createElement('div')
    container.className = "item-SanPhamMoi"
        const img = document.createElement('img');
            img.src = prd.img
        const title = document.createElement('span')
            title.className = "prd-title"
            title.innerText = prd.name
        const price = document.createElement('span')
            price.className = "prd-price"
            price.innerText = moneyFormat(prd.price) + 'đ'
        const div = document.createElement('div')
            div.className = 'item-SanPhamMoi__footer'
            const btn = document.createElement('button')
            div.appendChild(btn)
            btn.className = "item-SanPhamMoi__btn"
            btn.innerText = "Thêm vào giỏ"

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
    container.appendChild(img)
    container.appendChild(title)
    container.appendChild(price)
    container.appendChild(div)
    return container
    
}



function renHome() {
    renProduct(-1, 0, "new")
    renProduct(-1, 0, "sell")
   
}



function renProduct(n, index, type){
    
    let body
    switch (type){
        case "new":
            body = document.querySelectorAll('.container-SanPhamMoi')[0]
            if (n == null)
                n = currentSelectCateNew
            else 
                currentSelectCateNew = n
            break
        case "sell":
            body = document.querySelectorAll('.container-SanPhamMoi')[1]
            if (n == null)
                n = currentSelectCateSell
            else 
                currentSelectCateSell = n
            break

            
    }

    body.innerHTML = ''
    let count = 0
    products.every(ele =>{
        if ((n == -1 || (categories[n].includes(ele.cate))) && ele[type] === 1) {
            if (count >= index * 5)
                body.appendChild(renItem(ele))
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

