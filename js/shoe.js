
var buy= document.querySelectorAll('.buy')
var brat= document.querySelector('.brat');

var up= document.querySelector('.up')
var empty= document.querySelector('.empty')


var ca= document.querySelector('h1')
var cars= document.querySelector('.cars')
var cancel= document.querySelector('.cancel')
var image= document.querySelector('.imag')
var trouser = document.querySelectorAll('.trouser')




buy.forEach((b)=>{

b.addEventListener('click',function(){

    var add= Number(ca.getAttribute('data-count')|| 0);
    ca.setAttribute('data-count', add + 1);
    ca.classList.add('zero')
    b.innerText='added'
     
    

})
})
// brat.addEventListener('click',function(){
    // fra.classList.toggle('dis')
    // 
    // })


    ca.addEventListener('click',function(){
        cars.classList.add('d') 
        if (cars===''){

            empty.innerText='Your cart is empty'
        
            
        
           }
        
        })
       
        cancel.addEventListener('click',function(){
            cars.classList.remove('d')
            if(cars.value ===''){
              empty.innerHTML='nothing'
            } 
            
           })


    

