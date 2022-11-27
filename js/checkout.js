
function addItem (itemid)
{
	var carttemp;
	var cartsArray = JSON.parse(localStorage.getItem('carts'));
	var counter = 0;
	for (var i=0;i<= cartsArray.length;i++)
		{
			if (itemid==cartsArray[i].id)
				cartsArray[i].count++;
				counter++;
		}
	if (counter==cartsArray.length)
		for (var i =0; i< products.length;i++)
			{
				if(itemid==products[i].id)
					carttemp=products[i];
				cartsArray.push(carttemp);
			}
	localStorage.setItem('carts',JSON.stringify(cartsArray));
	showCartTable();
}


function removeItem ()
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

function deletecart(){
localStorage.removeItem('carts');
}

function showCartTable(){
if (localStorage.getItem('carts')===null || localStorage.getItem('carts')=='[]'){
	var s='<tr><th>Không có sản phẩm nào trong giỏ hàng</th></tr>';
	document.getElementById('carttable').innerHTML=s;
	document.getElementById('totalprice').innerHTML=0;
}else {
	var cartsArray = JSON.parse(localStorage.getItem('carts'));
	var s='<tr><th></th><th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng</th><th></th></tr>';
	var totalprice=0;
	for (var i = 0; i < cartsArray.length; i++){
		s+=  '<tr>'+
				'<td><img src="../'+cartsArray[i].img+'"></td>'+
				'<td>'+
					'<div>'+cartsArray[i].name+'</div>'+
				'</td>'+
				'<td>'+currency(cartsArray[i].price)+'</td>'+
				'<td>'+
					'<button onClick="quantitydown2('+cartsArray[i].productId+')">-</button>'+
					'<input id="quantity" type="text" disabled value="'+cartsArray[i].count+'" onchange="updateCart(this.value,'+cartsArray[i].Id+')">'+
					'<button onClick="quantityup2('+cartsArray[i].Id+')">+</button>'+
				'</td>'+
				'<td>'+currency(cartsArray[i].price*cartsArray[i].count)+'</td>'+
				'<td><button onClick="deletecartitem('+cartsArray[i].Id+')">&times;</buttom></td>'+
			'</tr>';
		totalprice+=cartsArray[i].price*cartsArray[i].count;	
	}
	document.getElementById('carttable').innerHTML=s;
	document.getElementById('totalprice').innerHTML=currency(totalprice);
}	
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
if(document.getElementById('count').value > 1){
	document.getElementById('count').value--;
}
}
function countUp(){

document.getElementById('count').value++;
}