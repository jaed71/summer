function getName(element){
    const name=document.getElementById(element).innerText
    return name;
}
function getPrice(element)
{
    const priceText=document.getElementById(element).innerText
    price=parseFloat(priceText)
    return price;
}

function setProductDetailsBought(element, name)
{
 const Details=document.getElementById(element);
 const p=document.createElement('p');
 const count=Details.childElementCount;
 p.innerHTML=`${count+1}. ${name}`
 Details.appendChild(p)

}
function setTotalPrice(element,price){
    const priceElement = document.getElementById(element)
    const priceString=priceElement.innerText;
    const Price=parseFloat(priceString)
    priceElement.innerText=price+Price;
    if(price+Price>=200)
    {
      document.getElementById('coupon-code').removeAttribute('disabled')
    }
    return (price+Price);

}
function setTotal(element,price)
{
  const total=getPrice(element);
  const Total=total + price;
  document.getElementById('total').innerText=Total;
  return total;
}



document.getElementById('coupon-code').addEventListener('keyup',function(event)
{
  const couponCode=event.target.value;
  if(couponCode==='SELL200')
  {
document.getElementById('apply').removeAttribute('disabled')
  }
  else{
    document.getElementById('apply').setAttribute('disabled',true) 
  }

})
document.getElementById('apply').addEventListener('click',function()
{

  this.disabled=true;
  var discountPrice=getPrice('discount');
  const totalPrice=getPrice('total-price')
   
if(totalPrice>=200)
{
    discountPrice= discountPrice +  (totalPrice*20)/100;
    document.getElementById('discount').innerText=discountPrice;
    document.getElementById('total').innerText=totalPrice-discountPrice;
    
    
}

})

  document.getElementById('spoons').addEventListener('click',function()
{
    const name=getName('spoon-name');
    const price= getPrice('spoon-price');
    setProductDetailsBought('details',name);
     setTotalPrice('total-price',price)
     var discount=getPrice('discount');
     if(discount==0)
     {
      setTotal('total',price);
     }
    
 

})


  document.getElementById('homeCooker').addEventListener('click',function()
{
    const name=getName('homeCooker-name');
    const price= getPrice('homeCooker-price');
    setProductDetailsBought('details',name);
    setTotalPrice('total-price',price)
    var discount=getPrice('discount');
    if(discount==0)
    {
     setTotal('total',price);
    }
})
  document.getElementById('board').addEventListener('click',function()
{
    const name=getName('board-name');
    const price= getPrice('board-price');
    setProductDetailsBought('details',name);
    setTotalPrice('total-price',price)
    var discount=getPrice('discount');
    if(discount==0)
    {
     setTotal('total',price);
    }
})
  document.getElementById('cap').addEventListener('click',function()
{
    const name=getName('cap-name');
    const price= getPrice('cap-price');
    setProductDetailsBought('details',name);
    setTotalPrice('total-price',price)
    var discount=getPrice('discount');
    if(discount==0)
    {
     setTotal('total',price);
    }
})
  document.getElementById('jersey').addEventListener('click',function()
{
    const name=getName('jersey-name');
    const price= getPrice('jersey-price');
    setProductDetailsBought('details',name);
    setTotalPrice('total-price',price)
    var discount=getPrice('discount');
    if(discount==0)
    {
     setTotal('total',price);
    }
})
  document.getElementById('cates').addEventListener('click',function()
{
    const name=getName('cates-name');
    const price= getPrice('cates-price');
    setProductDetailsBought('details',name);
    setTotalPrice('total-price',price)
    var discount=getPrice('discount');
    if(discount==0)
    {
     setTotal('total',price);
    }
})

document.getElementById('make-purchase').addEventListener('click',function()
{
  document.getElementById('container').style.display='block'
}
)
document.getElementById('go-home').addEventListener('click',function(event)
{
  document.getElementById('container').style.display='none';
  document.getElementById('total-price').innerText='00'
  document.getElementById('discount').innerText='00'
  document.getElementById('total').innerText='00'

})