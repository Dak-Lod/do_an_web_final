// const btnLeft = document.querySelector('.btn-left')
// const btnRight = document.querySelector('.btn-right')
// var x = 0 
// var y = 0
// function btnLeftTop() {
//     const containerWrap = document.querySelector('.container-wrap')
//     x +=16.75
//     if(x > 0) {
//         x = -16.75*3
//     }
//     containerWrap.style.marginLeft = x + 'vw'
// }

// function btnRightTop() {
//     const containerWrap = document.querySelector('.container-wrap')
//     x -=16.75
//     if(x <= -16.75*4) {
//         x = 0
//     }
//     containerWrap.style.marginLeft = x + 'vw'
// }

// function btnLeftBottom() {
//     const containerWrap = document.querySelectorAll('.container-wrap')[0]
//     y +=16.75
//     if(y > 0) {
//         y = -16.75*3
//     }
//     containerWrap.style.marginLeft = y + 'vw'
// }

// function btnRightBottom() {
//     const containerWrap = document.querySelectorAll('.container-wrap')[0]
//     y -=16.75
//     if(y <= -16.75*4) {
//         y = 0
//     }
//     containerWrap.style.marginLeft = y + 'vw'
// }




var fullItem = 0
function renderNew(n,vt) {
    let s= ''
    for(var i = vt*5; i < products.length; i++) {
        if(fullItem < 5) {
                if (n == -1 || (categories[n].includes(products[i].cate) && products[i].new == 1)) {
                    s = s + `<div style="text-align: center" class="item-SanPhamMoi">
                    <button style="border : 0; background-color: transparent; margin-inline: auto"><img src="${products[i].img}" alt=""></button>
                <div class="item-size-color">
                        <div class="font-product">+7 size</div>
                    <div class="font-product">+3 Màu sắc</div>
                    </div>
                <button style="border : 0; background-color: transparent" class="font-product"; margin-inline: auto>${products[i].name}</button>
                    <div class="price-product"><span style="font-size: 15px;">${products[i].price}</span></div>            
                    <div class="item-SanPhamMoi__footer">
                        <button class="item-SanPhamMoi__btn">thêm vào giỏ</button>
                </div>
                    </div>`
                fullItem +=1
            }
        }
    }
    // products.forEach(
    //     function(ele,idx){
    //         if(fullItem < 5 && idx > vt * 5) {
    //             if (n == -1 || (categories[n].includes(ele.cate) && ele.new == 1)) {
    //                 s = s + `<div style="text-align: center" class="item-SanPhamMoi">
    //                 <button style="border : 0; background-color: transparent; margin-inline: auto"><img src="${ele.img}" alt=""></button>
    //             <div class="item-size-color">
    //                     <div class="font-product">+7 size</div>
    //                 <div class="font-product">+3 Màu sắc</div>
    //                 </div>
    //             <button style="border : 0; background-color: transparent" class="font-product"; margin-inline: auto>${ele.name}</button>
    //                 <div class="price-product"><span style="font-size: 15px;">${ele.price}</span></div>            
    //                 <div class="item-SanPhamMoi__footer">
    //                     <button class="item-SanPhamMoi__btn">thêm vào giỏ</button>
    //             </div>
    //                 </div>`
    //             fullItem +=1
    //             }
    //         }
    //     }
    // )
    fullItem = 0
    document.querySelectorAll('.btn-li').forEach(
        function(item,idx) {
            if(idx <= 2) {
                item.classList.remove('btn--active')
            }
    })

    document.querySelectorAll('.btn-li')[vt].classList.add('btn--active')
    document.querySelectorAll('.container-SanPhamMoi')[0].innerHTML = s
}
function renderPrt(n,vt) {
    var fullItem1 = 0
    let s1=''
    let list = []
    products.forEach(product => {
        if(product.sell == 1) {
            list.push(product)
        }
    })
    for(var i = vt*5; i < list.length; i++) {
        if(fullItem1 < 5) {
            if (n == -1 || (categories[n].includes(list[i].cate) && list[i].sell == 1)) {
                    s1 = s1 + `<div style="text-align: center" class="item-SanPhamMoi">
                    <button style="border : 0; background-color: transparent; margin-inline: auto"><img src="${list[i].img}" alt=""></button>
                <div class="item-size-color">
                        <div class="font-product">+7 size</div>
                    <div class="font-product">+3 Màu sắc</div>
                    </div>
                <button style="border : 0; background-color: transparent" class="font-product"; margin-inline: auto>${list[i].name}</button>
                    <div class="price-product"><span style="font-size: 15px;">${list[i].price}</span></div>            
                    <div class="item-SanPhamMoi__footer">
                        <button class="item-SanPhamMoi__btn">thêm vào giỏ</button>
                </div>
                    </div>`
                    console.log('chay')
                    fullItem1 +=1
            }
        }
    }
    document.querySelectorAll('.btn-li').forEach(
        function(item,idx) {
            if(idx >=3) {
                item.classList.remove('btn--active')
            }
    })

    document.querySelectorAll('.btn-li')[vt+3].classList.add('btn--active')
    document.querySelectorAll('.container-SanPhamMoi')[1].innerHTML = s1
}
function renHome() {
    let s = ''
    // function render(className = undefined) {
    //     if(className != undefined) {
    //         for(var i=0; i < lists.length ; i++) {
    //             if(lists[i].classify == className) {
    //                 s = s + `<div class="item-SanPhamMoi">
    //                 <a href="#"><img src="${lists[i].img}" alt=""></a>
    //                 <div class="item-size-color">
    //                     <div class="font-product">+7 size</div>
    //                     <div class="font-product">+3 Màu sắc</div>
    //                 </div>
    //                 <a href="#" class="font-product">Giày Thể Thao Nam Hunter Street White</a>
    //                 <div class="price-product"><span style="font-size: 15px;"> 781,000 ₫ </span></div>            
    //                 <div class="item-SanPhamMoi__footer">
    //                     <button class="item-SanPhamMoi__btn">mua ngay</button>
    //                 </div>
    //                 </div>`
    //             }
    //         }
    //     } else {
    //         for(var i=0; i < lists.length ; i++) {
    //             s = s + `<div class="item-SanPhamMoi">
    //             <a href="#"><img src="${lists[i].img}" alt=""></a>
    //             <div class="item-size-color">
    //                 <div class="font-product">+7 size</div>
    //                 <div class="font-product">+3 Màu sắc</div>
    //             </div>
    //             <a href="#" class="font-product">Giày Thể Thao Nam Hunter Street White</a>
    //             <div class="price-product"><span style="font-size: 15px;"> 781,000 ₫ </span></div>            
    //             <div class="item-SanPhamMoi__footer">
    //                 <button class="item-SanPhamMoi__btn">mua ngay</button>
    //             </div>
    //             </div>`
    //         }
    //     } 
    //     document.querySelector('.container-wrap').innerHTML = s
    // }
    renderNew(-1)
    renderPrt(-1)
    // renderGagination()
    // document.querySelectorAll('.item-SanPhamMoi').forEach(item => {
    //     item.onclick = function() {
    //         console.log(this)
    //         document.querySelector('.showcart-wrap').classList.add('showcart-wrap--active')
    //         document.querySelector('.showcart').innerHTML = `<div style="width: 300px;" class="item-SanPhamMoi">
    //         <button style="border : 0; background-color: transparent"><img src="./img2/SPmoi_1.jpg" alt=""></button>
    //         <div class="item-size-color">
    //             <div class="font-product">+7 size</div>
    //             <div class="font-product">+3 Màu sắc</div>
    //         </div>
    //         <button style="border : 0; background-color: transparent" class="font-product">Giày Thể Thao Nam Hunter Street White</button>
    //         <div class="price-product"><span style="font-size: 15px;"> 781,000 ₫ </span></div>            
    //         <div class="item-SanPhamMoi__footer">
    //             <button class="item-SanPhamMoi__btn">mua ngay</button>
    //         </div>
    //         </div>`
    //     }
    // })
   
}

// document.querySelectorAll('.btn-li').forEach(btn => {
//     btn.onclick = function () {
//         console.log('bam dc')
//         document.querySelectorAll('.btn-li').forEach(btn => {
//             btn.classList.remove('btn--active')
//         })
//         this.classList.add('btn--active')
//         if(this.innerText == '2') {
//             renderNew(1)
//         }

//         if(this.innerText == '1') {
//             renderNew(2)
//         }
//         // if(this.innerText == '3') {
//         //     render(2)
//         // }
//     }
// })

