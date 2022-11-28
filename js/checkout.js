function showCartTable(){
	if (localStorage.getItem('carts')==null || localStorage.getItem('carts')=='[]')
	{
		var s='<tr><th>Không có sản phẩm nào trong giỏ hàng</th></tr>';m
		document.getElementById('cartTable').innerHTML=s;
		document.getElementById('totalPrice').innerHTML=0;
	}
	else 
	{
			var s='<tr><th></th><th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng</th><th></th></tr>';
			var total = 0;
			for (var i =0; i < carts.length; i++)
			console.log(carts[i].img)
				{
					s+='<tr>'+
					'<td><img src="'+carts[i].img+'"></td>'+
					'<td>'+
						'<div>'+carts[i].name+'</div>'+
					'</td>'+
					'<td>'+carts[i].price+'</td>'+
					'<td>'+
						'<button onClick="countDown()">-</button>'+
						'<input id="quantity" type="text" disabled="" value="'+document.getElementById('quantity')+'" onchange="updateCart('+document.getElementById('quantity')+','+carts[i].id+')">'+
						'<button onClick="countUp()">+</button>'+
					'</td>'+
					'<td>'+carts[i].price*document.getElementById('quantity')+'</td>'+
					'<td><button onClick="removeItem('+carts[i].id+')">&times;</buttom></td>'+
				'</tr>';
			total+=carts[i].price*document.getElementById('quantity');	
	}
		document.getElementById('cartTable').innerHTML=s;
		document.getElementById('totalPrice').innerHTML=total;
	}	
}

function removeItem (itemid)
{
	var cartsArray = JSON.parse(localStorage.getItem('carts'));
	for (var i = 0;i<=cartsArray.length;i++)
	{
		if(itemid==cartsArray[i].id)
		{
			cartsArray[i].slice(i,1);
			localStorage.setItem('carts',JSON.stringify(cartsArray));
	}
	}
	showCartTable();
}

function deleteCart(){
	localStorage.removeItem('carts');
	showCartTable();
}

function updateCart(count,id){
	var cartsArray = JSON.parse(localStorage.getItem('carts'));
	for (var i = 0; i < cartsArray.length; i++) {
		if(cartsArray[i].productId==id){
			cartsArray[i].count=count;
		}
	}
	localStorage.setItem('carts',JSON.stringify(cartsArray));
	showCartTable();
}

function countDown(){
	if(document.getElementById('quantity').value > 1){
		document.getElementById('quantity').value--;
	}
	showCartTable()
}
function countUp(){

	document.getElementById('quantity').value++;
	showCartTable();
}


function PayCart()
{
	if (localStorage.getItem('signed')==null)
		{alert('Xin Vui lòng đăng nhập để mua hàng');}
	else
	{
		var tempArray = JSON.parse(localStorage.getItem('bills'));
		var tempAcc = JSON.parse(localStorage.getItem('signed'));
		var tempbill = new bill;
		var today = new date;
		tempbill.date = today.getdate();
		tempbill.name = tempAcc.name;
		tempbill.address = tempAcc.address;
		tempArray[tempArray.length+1]= tempbill;
		localStorage.setItem('bills',JSON.stringify(tempArray));
	}
}
