function currency(num) {

	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
  }

  function showCartTable()
{
	if (localStorage.getItem('carts')==null || localStorage.getItem('carts')=='[]')
	{
		var s='<tr><th>Không có sản phẩm nào trong giỏ hàng</th></tr>';
		document.getElementById('cartTable').innerHTML=s;
		document.getElementById('totalPrice').innerHTML=0;
	}
	else 
	{
		var s='<tr><th></th><th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng</th><th></th></tr>';
		var total =0;
		carts.forEach(
			function makeTable(ele)
			{
				s+=`<tr>
				<td><img src="${ele.img}" alt="${ele.img}"></td>
					<td>
						<div>${ele.name}</div>
					</td>
					<td>${currency(ele.price)}</td>
					<td>
						<button onclick="countDown(${ele.id})">-</button>
						<input id="${ele.id}" type="text" disabled="" value="${ele.sell}">
						<button onclick="countUp(${ele.id})">+</button>
					</td>
					<td i>${currency(ele.price*ele.sell)}</td>
					<td><button onclick="removeItem(${ele.id})">×</button></td>
			</tr>`
				total+=ele.price*ele.sell;
			}
		)
		document.getElementById('cartTable').innerHTML=s;
		document.getElementById('totalPrice').innerHTML=currency(total);	
	}
}

function removeItem (id){
	if(carts.length<1) 
		{deleteCart();}
	else{
		for(var i=0; i< carts.length;i++)
			{if (carts[i].id==id)
				{	
					carts.splice(i,1);
					localStorage.setItem('carts',JSON.stringify(carts));
				}
			}
		showCartTable();
		}
}

function deleteCart(){
	localStorage.removeItem('carts');
	showCartTable();
}


function countDown(id){
	for(var i = 0; i<carts.length; i++)
		{
			if ( id == carts[i].id)
				{
					if(carts[i].sell > 1)
					{
						carts[i].sell--;
						showCartTable();
					}
					else  
					{ 
						removeItem(id);
					}
						
				}
		}
}
function countUp(id){
	for(var i = 0; i<carts.length; i++)
		{
			if ( id == carts[i].id)
				{
					carts[i].sell++;
				}
		}
	showCartTable();
}


function PayCart()
{
	if (checkLogin())
	{	
		var tempBillArray = JSON.parse(localStorage.getItem('bills'))
		var tempAcc = JSON.parse(localStorage.getItem('signed'));
		var tempBill = new bill;
		var today = new date;
		tempBill.date = today.getdate();
		tempBill.name = tempAcc.name;
		tempBill.address = tempAcc.address;
		if (tempBillArray==null)
			{
				tempBillArray=[];
				tempBillArray[0]=tempBill;
			}
		else
			{
				var i = tempBillArray.length+1;
				tempBillArray[i]=tempBill
			}
		localStorage.setItem('bills',JSON.stringify(tempArray));
	}
}

