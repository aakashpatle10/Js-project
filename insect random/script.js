var btn= document.querySelector('button')
var body=document.querySelector('body')
var arr=['https://imgs.search.brave.com/qZdkOyYNmkPTP6CfGJdTM2177WbQx029y5uQiQ-yOWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NS9JbnNlY3QtUE5H/LUNsaXBhcnQucG5n','https://imgs.search.brave.com/DjoaKM009lzg_8WdgiLe_suScVItKoRagcvCIjxysCs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMi8w/NC8wMi8xNC8yNC9i/ZWUtMjQ2MzNfXzM0/MC5wbmc','https://imgs.search.brave.com/MGastpJaqeAd9P7cVwRMtAUkOZUsa9yd1OOyFy-1Mbg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEvQnV0/dGVyZmx5LVBORy1U/cmFuc3BhcmVudC1J/bWFnZXMucG5n','https://imgs.search.brave.com/2VKwaKl4XJD4MSlZdjkDiI2YXRNUPKK-E0U7j-IrkBg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/Mi8xNi8xOS8xMy9h/bnQtMTA5NjM5NF9f/MzQwLnBuZw']

btn.addEventListener('click',function(){
    var image = document.createElement("img")
    var ranx = Math.random()*96
    var rany = Math.random()*96
    var rot = Math.random()*360
    var ran = Math.floor(Math.random()*arr.length)
    image.setAttribute('src',arr[ran])
    image.style.height= '50px'
    image.style.position='absolute'
    image.style.left =ranx + '%'
    image.style.top= rany + '%'
    image.style.rotate= rot +'deg'
    
    body.appendChild(image)
})