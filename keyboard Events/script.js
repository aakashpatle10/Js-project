var img = document.querySelector('img')
var improX = 0
var improY = 0


document.addEventListener('keydown',function(dets){
    
    
    if(dets.code == 'ArrowRight'){
        improX++
        img.style.left=improX+'%'
    }
    else if(dets.code == 'ArrowLeft'){
        improX--
        img.style.left = improX+'%'
    }
    else if(dets.code=='ArrowDown'){
        improY++
        img.style.top=improY+'%'
    }
    else if (dets.code == 'ArrowUp'){
        improY--
        img.style.top = improY+'%'
    }
    

})