var btn = document.querySelector('button')
var grow = document.querySelector('#grow')
var h2 = document.querySelector('h2')

var pro=0;

btn.addEventListener('click',function(){

    var chotu =setInterval(function(){
        pro++
        h2.innerHTML=pro+'%'
        grow.style.width=pro+'%'
        btn.innerHTML="Downloding"
    },100)
    setTimeout(function(){
        clearInterval(chotu);
        btn.innerHTML='Downloded'
        
    },10000)
})

