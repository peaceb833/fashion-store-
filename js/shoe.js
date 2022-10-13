var buy= document.querySelectorAll('.buy')

var ca= document.querySelector('.ca')

var quantity= document.querySelector('.quantity')

buy.forEach((b)=>{

b.addEventListener('click',function(){

    

    quantity.textContent=+1

 

})

})