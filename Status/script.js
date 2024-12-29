const user = [
    {
        name: 'Rishabh ',
        profile_image:'https://media.istockphoto.com/id/1368346570/photo/an-asian-poor-labor-is-working-on-the-site-and-smiling-and-his-has-crossed-eyes.webp?a=1&b=1&s=612x612&w=0&k=20&c=8xE8x_PKboIJ8sy31l0ih8Dqa1-kBVd5VF0nFxtSS8w=',
        Time: '10 min ago',
        status : 'https://i.pinimg.com/736x/37/ad/cb/37adcbcfd8ccb65601d18aeadb001eb5.jpg',

    },
    {
        name: 'Rohil',
        profile_image:'https://i.pinimg.com/236x/80/32/a8/8032a818d1cb282664a01590453c8e73.jpg',
        Time: '1 hour ago',
        status : 'https://i.pinimg.com/736x/02/b4/f2/02b4f280752837d8b1724d45ef38442d.jpg',

    },
    {
        name: 'Nikhil ',
        profile_image:'https://i.pinimg.com/236x/45/f4/52/45f452315f2e9f4ee7fc981a52a7943b.jpg',
        Time: '1 hour ago',
        status : 'https://i.pinimg.com/736x/54/43/b4/5443b4715106d244dd3f0ad295c1d710.jpg',
    },
    {
        name: 'Tunni',
        profile_image:'https://i.pinimg.com/236x/b8/0a/cd/b80acd70a2293cfec875a0f7f98ea73e.jpg',
        Time: '2 hour ago',
        status : 'https://i.pinimg.com/736x/68/c3/f3/68c3f390c838d8cd5173662dcfe25981.jpg',
    },
    {
        name: 'Dada',
        profile_image:'https://i.pinimg.com/236x/00/35/0d/00350d8fa38abd4034ca79e5e3656b07.jpg',
        Time: '2 hour ago',
        status : 'https://i.pinimg.com/736x/68/c3/f3/68c3f390c838d8cd5173662dcfe25981.jpg',
    },
    {
        name: 'Gotiya ',
        profile_image:'https://i.pinimg.com/236x/6b/c5/4f/6bc54f11e8ddc1e7445e89b560a607f9.jpg',
        Time: '5 hour ago',
        status : 'https://i.pinimg.com/736x/b3/ff/3a/b3ff3accc46377d013a80eb9519c8c1c.jpg',
    },
    {
        name: 'Dalal',
        profile_image:'https://i.pinimg.com/236x/b6/c9/fd/b6c9fd82b5634c0fb45c0adf560e8809.jpg',
        Time: '6 hour ago',
        status : 'https://i.pinimg.com/736x/db/35/ff/db35ffb96297bfe74d46e5a8912ba66c.jpg',
    },
    {
        name: 'Mukesh Ambani',
        profile_image:'https://i.pinimg.com/236x/90/c9/85/90c985b416282502543186bcfd47f849.jpg',
        Time: '8 hour ago',
        status : 'https://i.pinimg.com/736x/c2/81/43/c281438bf1989f2b6182e70165b49c5d.jpg',
    },
    {
        name: 'Amit 33',
        profile_image:'https://i.pinimg.com/236x/97/2f/1b/972f1b8aca65479e3c401b800a4bd76a.jpg',
        Time: '10 hour ago',
        status : 'https://i.pinimg.com/736x/4a/84/7c/4a847c6438c10238461a47a45edbeb0c.jpg',
    },
    {
        name: 'Anddkush',
        profile_image:'https://i.pinimg.com/236x/cb/06/ae/cb06ae59ababc23022b679cd2cdf234d.jpg',
        Time: 'yesterday',
        status : 'https://i.pinimg.com/236x/cb/ce/ba/cbceba02fb396f779daae6e3fca15b79.jpg',
    },
    {
        name: 'Perpendicular',
        profile_image:'https://i.pinimg.com/236x/00/47/f2/0047f257df1e81a6ed3f8521d552eb24.jpg',
        Time: 'yesterday',
        status : 'https://i.pinimg.com/736x/b6/c9/fd/b6c9fd82b5634c0fb45c0adf560e8809.jpg',
    },
    
]

var sum =''
var st=document.querySelector('#st')
user.forEach(function(e,idx) {
    sum = sum + `
            <div class="allstatus" id=${idx}>
                <img src="${e.profile_image}" alt="">
                <div id="statusin">
                    <h2>${e.name}</h2>
                    <p>${e.Time}</p>
                </div>
            </div>
    `
})

st.innerHTML=sum;
var full = document.querySelector('.full')

var status = document.querySelector('#status')

st.addEventListener('click', function(dets){
    var gold = user[dets.target.id]
    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.status})`

    setTimeout(function() {
        full.style.display='none'
    },3000);
})