var btn = document.querySelectorAll('button');
var body = document.querySelector('body')

btn.forEach(function(btns){
    btns.addEventListener('click', function() {
        console.log(btn.innerHTML);
        
        body.style.backgroundColor = btns.innerHTML
    })
})
