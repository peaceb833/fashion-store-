var buy= document.querySelectorAll('.buy')

var ca= document.querySelector('h1')

buy.forEach((b)=>{

b.addEventListener('click',function(){

    var add= Number(ca.getAttribute('data-count')|| 0);
    ca.setAttribute('data-count', add + 1);
    ca.classList.add('zero')


})

})