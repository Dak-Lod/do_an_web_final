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

let popup_rmv;

function table_ren(products){
    var table =  document.querySelector('.product-view > table > tbody')
    products.forEach(function (ele){
        if (!ele) return
        var tr = document.createElement('tr')
        var td = document.createElement('td')
        td.textContent = ele.id
        tr.append(td)

        var img = document.createElement('img')
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
        td.append(ele.price + 'đ')
        tr.append(td)
        
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
            console.log(blur);
            blur.classList.toggle('active')
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



function adminRen(){
    table_ren(products)

    popup_rmv = document.getElementById('popup-rmv')
    document.querySelector('.popup .cancel').addEventListener('click', disablePopup)
    //Add product

    const id = Product.count + 1 + 10000
    document.getElementById('id-product').value = id


    const select = document.getElementById('cate-product')
    const dataList = document.createElement('datalist')
    
    dataList.id = "cate-datalist"
    
    categories.forEach(function (ele){
        const option = document.createElement('option')
        option.value = ele
        dataList.appendChild(option)
    })
    select.append(dataList)
    select.setAttribute('list', 'cate-datalist')
    

    //Input check
    document.getElementById('name-product').addEventListener('input', function (e){
        if (e.target.value == "" || e.target.value.trim() == ""){
            e.target.setCustomValidity("Tên sản phẩm không được trống!")
            e.target.reportValidity()   
        }else
            e.target.setCustomValidity("")
    })

    document.getElementById('cate-product').addEventListener('input', function (e){
        if (e.target.value == "" || e.target.value.trim() == ""){
            e.target.setCustomValidity("Thể loại sản phẩm không được trống!")
            e.target.reportValidity()   
        }else
            e.target.setCustomValidity("")
    })



    //add Image
    const imgUpload = document.getElementById("img-product")
    imgUpload.addEventListener("change", function (event) {
        const file = event.target.files[0]
        console.log(file);
        const img = document.getElementById("img-preview")
        img.file = file
        img.style.display = "block";
        const reader = new FileReader();
        reader.onload = function (e){
            img.src = e.target.result
        }
        reader.readAsDataURL(file)

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

}



function searchChange(){
    console.log("Searching");
    let min = document.getElementById('product-price-min');
    let max = document.getElementById('product-price-max');
    let proudct_search = products

    if (min.value == "") min = 0;
    else min = min.value * 1000
    if (max.value == "") max = 2000000;
    else max = max.value * 1000

    if (max != 2000000 || min != 0 )
        proudct_search = products.map(function (ele){
            if (ele.price >= min && ele.price <= max)      
                return ele
            else 
                return null
    })

    var id = document.getElementById('product-id-search').value.toUpperCase()
    if (id.trim() !== ""){
        if (document.getElementById('searchSlt').value == 1)
            table_ren(proudct_search.map(function(ele){
                // console.log(id);
                if (removeAccents(ele.id.toString()).match(id) ||
                ele.id.toString().match(id) || removeAccents(ele.id.toString()).match(removeAccents(id)))
                    return ele
                else return null
            }))
        else
            table_ren(proudct_search.map(function(ele){
                if (removeAccents(ele.name.toUpperCase()).match(id) || ele.name.toUpperCase().match(id) || removeAccents(ele.name.toUpperCase()).match(removeAccents(id)))
                    return ele
                else return null
            }))
    }else{
        table_ren(proudct_search)
    }


}



function addProduct(){
    try {
        const id = document.querySelector(".product-add  #id-product").value
        let name = document.querySelector(".product-add  #name-product")
        let price = document.querySelector('.product-add #price-product')
        let cate = document.querySelector(".product-add  #cate-product")   
        const des = document.querySelector(".product-add  #des-product").value
    
        let err = false
    
        if (name.value == "" || name.value.trim() == ""){
            name.dispatchEvent(new Event('input'))
            err = true
        }
    
        if (cate.value == "" || cate.value.trim() == ""){
            cate.dispatchEvent(new Event('input'))
            err = true
        }
    
        if (err) return false
    
        name = name.value
        price = price.value
        cate = cate.value
    
    
        if (categories.indexOf(cate) == -1){
            categories.push(cate)
            localStorage.setItem('cate', JSON.stringify(categories))
            cate = categories.length 
        }else
            cate = categories.indexOf(cate)
     
        const file = document.getElementById("img-product").files[0]
        const data = new FormData()
        data.append('photo', file)
        
        
        products.push(new Product(name, cate, price, des, './img/' + file.name))
        localStorage.setItem('products', JSON.stringify(products))
        // return false
        


    }catch (e){
        alert(e)
        return false
    }


}
