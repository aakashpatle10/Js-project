var img = document.querySelector('img');
var h4 = document.querySelector('h4');
var flag = 1
h4.addEventListener('click', function(){
    if(flag ===1){

        h4.innerHTML = 'Sending..';
        setTimeout(function(){
            h4.innerHTML = 'Remove';
            h4.style.backgroundColor = "white";
        }, 2000);
        flag=0
    }
    else if(flag ===0){
        flag=1
        h4.style.backgroundColor = "blue";
        h4.innerHTML = 'Add friend';
    }
})