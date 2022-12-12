
let total = 0
const date = new Date()


function removeItem(index){
	carts = carts.slice(index + 1, 1)
	localStorage.setItem('carts', JSON.stringify(carts))
	renCart()
}

function updateTotal(index){
	let old_value = document.getElementById(`total-col-${index}`).innerText
	let value = document.getElementById(`total-col-${index}`)
	value.innerText = moneyFormat(carts[index].prd.price * document.getElementById(`qty-col-${index}`).innerText) 
}

function renCart(){
	total = 0
	document.querySelector('.cart-list tbody').innerHTML = ''
	carts.forEach((element, index) => {
		total += element.prd.price * element.qty
		const tr = document.createElement('tr')

		let td = document.createElement('td')
		let img = document.createElement('img')
		img.classList.add('img')
		img.src = element.prd.img
		td.appendChild(img)
		tr.appendChild(td)

		td = document.createElement('td')
		td.classList.add('name')
		td.textContent = element.prd.name
		tr.appendChild(td)

		td = document.createElement('td')
		td.id = `price-col-`
		td.textContent = moneyFormat(element.prd.price * element.qty)
		td.textContent += 'đ'

		tr.appendChild(td)

		td = document.createElement('td')
		td.classList.add('qty')
		let btnRmvQty = document.createElement('button')
		btnRmvQty.classList.add('remove')
		btnRmvQty.addEventListener('click', ()=>{
			if (document.getElementById(`qty-col-${index}`).innerText > 1){
				document.getElementById(`qty-col-${index}`).innerText --
				element.qty --
				localStorage.setItem('carts', JSON.stringify(carts))
				updateTotal(index)
				document.getElementById('total-carts').innerText = moneyFormat(total - carts[index].prd.price)
				total -= carts[index].prd.price
			}

		})
		btnRmvQty.textContent = '-'
		td.appendChild(btnRmvQty)
		tr.appendChild(td)
		
		let span = document.createElement('span')
		span.classList.add('qty')
		span.id = `qty-col-${index}`
		span.textContent = element.qty
		td.appendChild(span)
		tr.appendChild(td)
		

		const btnAddQty = document.createElement('button')
		btnAddQty.classList.add('add')
		btnAddQty.addEventListener('click', even=>{
			const value = document.getElementById(`qty-col-${index}`)
			value.innerText = parseInt(value.innerText) + 1
			element.qty ++
			localStorage.setItem('carts', JSON.stringify(carts))
			updateTotal(index)
			document.getElementById('total-carts').innerText = moneyFormat(total + carts[index].prd.price)
			total += carts[index].prd.price
		})
		btnAddQty.textContent = '+'
		td.appendChild(btnAddQty)
		tr.appendChild(td)
		
		td = document.createElement('td')
		td.classList.add('total-col')
		span = document.createElement('span')
		span.id = `total-col-${index}`
		span.textContent = moneyFormat(element.prd.price)
		td.appendChild(span)
		td.append('đ')
		tr.appendChild(td)

		td = document.createElement('td')
		const btnRmvPrd = document.createElement('button')
		btnRmvPrd.classList.add('remove')
		btnRmvPrd.textContent = 'X'
		btnRmvPrd.addEventListener('click', () =>{
			document.getElementById('total-carts').innerText = moneyFormat(total - element.prd.price * document.getElementById(`qty-col-${index}`).innerText)
			carts.splice(carts.findIndex((ele)=>{return ele == element}), 1)
			localStorage.setItem('carts', JSON.stringify(carts))
			renCart()
		})
		td.appendChild(btnRmvPrd)
		tr.appendChild(td)

		document.querySelector('.cart-list tbody').appendChild(tr)
		document.getElementById('total-carts').innerText = moneyFormat(total)

	});
	
}

function renBill(){
	document.querySelector('.bill-list').innerHTML = ''

	for (let i = bills.length - 1; i > -1; i--){
		if (bills[i].user.id == login_info.id){
			let item = document.createElement('div')
			item.classList.add('item')
			let info = document.createElement('div')
			info.classList.add('info')
			info.innerText = bills[i].info.map(ele=>{
				return ele.qty + 'x ' + ele.prd.name
			}).join('\n')
			// info.innerText = bills[i].info.qty + 'x ' + bills[i].info.prd
			let total = document.createElement('div')
			total.classList.add('total')
			total.innerText = moneyFormat(bills[i].total) + 'đ'
			let date = document.createElement('div')
			date.classList.add('date')
			date.innerText = bills[i].date
			let status = document.createElement('div')
			status.classList.add('status')
			if (bills[i].status == 0){
				status.innerText = "Chưa xử lý"
			}else {
				status.innerText = "Đang vận chuyển"
			}
			item.innerHTML = `<div class="info">Sản phẩm</div>
			<div class="total">Tổng tiền</div>
			<div class="date">Ngày mua</div>
			<div class="status">Tình trạng</div>`
			document.querySelector('.bill-list').append(item)
			item.appendChild(info)
			item.appendChild(total)
			item.appendChild(date)
			item.appendChild(status)
		}
	}
}

function renCheckout (){
	renCart()
	document.querySelector('#remove-all').addEventListener('click' ,event=>{
		if (carts.length < 1) return
		carts = []
		localStorage.removeItem('carts')
		total = 0
		document.getElementById('total-carts').innerText = 0
		renCart()
	})	

	document.getElementById('checkout-cart').addEventListener('click', even=>{
		if (carts.length < 1) return
		if (login_info == null){
			popup_must_login.style.top = "50%"
			popup_must_login.classList.add('active')
			blur.classList.add('active')
		}else {
			const info = carts.map((ele, index)=>{
				return ele
			})
			// let info = carts.map((ele, index)=>{
			// 	let qty = document.getElementById(`qty-col-${index}`).innerText
			// 	return `${qty}x ${ele.prd.name}`
			// }).join("\n")
			bills.push(new bill(bills.length + 1000, login_info, `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`, info, total, 0 ))
			localStorage.setItem('bills', JSON.stringify(bills))
			// console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,);
			renBill()
		}
		
	})
	if (login_info != null)
		renBill()

}