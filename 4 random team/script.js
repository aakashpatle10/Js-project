var span = document.querySelector('span');
var button = document.querySelector('button');
var arr = [ 'RCB','LSG','CSK','KKR','RR','DC','PBKS','SRH','MI','GT']

button.addEventListener('click',function() {
   var random = Math.floor(Math.random() * arr.length);
    span.innerHTML = arr[random];  
})
