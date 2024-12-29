const users = [
    {
        dp : 'https://images.unsplash.com/photo-1734365294963-743f3ed421c1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        story : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D',

    },
    {
        dp : 'https://i.pinimg.com/236x/bf/31/06/bf31067532c1571816456612229385c6.jpg',
        story : 'https://images.unsplash.com/photo-1732919258529-44f50088aefd?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
        dp : 'https://i.pinimg.com/736x/61/c2/92/61c292d8656805ebd028a4c000ad6a0e.jpg',
        story : 'https://plus.unsplash.com/premium_photo-1734631072471-b2a9d81079a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
        dp : 'https://plus.unsplash.com/premium_photo-1710364762890-8176083b84a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story : 'https://images.unsplash.com/photo-1734613876170-079f67aa0d15?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
        dp : 'https://images.unsplash.com/photo-1732129606581-e887b3651a20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story : 'https://images.unsplash.com/photo-1734009589019-7c557c4e7e11?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
        dp : 'https://plus.unsplash.com/premium_photo-1729688321610-f026deddf74f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story : 'https://images.unsplash.com/photo-1733778567717-312f3ed1a654?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
        dp : 'https://images.unsplash.com/photo-1637766652059-af65a50715eb?q=80&w=2121&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story : 'https://images.unsplash.com/photo-1732965757891-368c1f235e7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
]

var sum = ''
var storiya = document.querySelector('#storiya');

users.forEach(function(user,idx) {
    sum +=`
           <div class="story">
    
           <img id=${idx} src="${user.dp}" alt="">                
        </div>
        
    `
})

storiya.innerHTML = sum
var full = document.querySelector('#full');
storiya.addEventListener('click', function(e) {
    var a = users[e.target.id]
    full.style.display = 'block'
    full.style.backgroundImage = `url('${a.story}')`
    
    setTimeout(function() {
        full.style.display='none'
    },3000);
})