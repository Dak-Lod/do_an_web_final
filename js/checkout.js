function showCartTable(){
	if (localStorage.getItem('carts')==null || localStorage.getItem('carts')=='[]')
	{
		var s='<tr><th>Không có sản phẩm nào trong giỏ hàng</th></tr>';
		document.getElementById('cartTable').innerHTML=s;
		document.getElementById('totalPrice').innerHTML=0;
	}
	else 
	{
			var s='<tr><th></th><th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng</th><th></th></tr>';
			var cartsArray = JSON.parse(localStorage.getItem(carts));
			var total = 0;
			for (var i =1; i<= cartsArray.length; i++)
				{
					s+='<tr>'+
					'<td><img src="./img/'+cartsArray[i].img+'"></td>'+
					'<td>'+
						'<div>'+cartsArray[i].name+'</div>'+
					'</td>'+
					'<td>'+currency(cartsArray[i].price)+'</td>'+
					'<td>'+
						'<button onClick="countDown()">-</button>'+
						'<input id="quantity" type="text" disabled="" value="'+getElementByID('quantity')+'" onchange="updateCart('+getElementById('quantity')+','+cartsArray[i].id+')">'+
						'<button onClick="countUp()">+</button>'+
					'</td>'+
					'<td>'+currency(cartsArray[i].price*getElementById(quantity))+'</td>'+
					'<td><button onClick="removeItem('+cartsArray[i].id+')">&times;</buttom></td>'+
				'</tr>';
			totalprice+=cartsArray[i].price*getElementById('quantity');	
	}
		document.getElementById('cartTable').innerHTML=s;
		document.getElementById('totalPrice').innerHTML=currency(total);
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
}
function countUp(){

	document.getElementById('quantity').value++;
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