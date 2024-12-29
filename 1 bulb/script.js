var button = document.querySelector('button');
var bulb = document.querySelector('#bulb');
var flag = 1
button.addEventListener('click', function() {
    if ( flag === 1 ) {
        bulb.style.backgroundColor = "yellow";
        flag = 0;
        button.textContent = "Turn Off";

    }
    else if ( flag === 0 ) {
        bulb.style.backgroundColor = "white";
        flag = 1;
        button.textContent = "Turn On";
    }
    
})
