var closeElement = document.getElementById('x')
var boxcontainer = document.getElementById('boxcontainer')
var containeritem = document.getElementById('containeritem')
var imgs = Array.from(document.querySelectorAll('.item img'))
var right = document.getElementById('right')
var left = document.getElementById('left')
var iimgs = Array.from(document.querySelectorAll("img.w-25"))
var mainimg = document.getElementById('mainimg')
var items = document.querySelector('.items')


function closeContainer(){
    boxcontainer.style.display='none'
}
function openContainer(){
    boxcontainer.style.display='flex'
}

//close
closeElement.addEventListener('click',closeContainer)
document.addEventListener('keydown',function(e){
  if(e.key=='Escape'){
    closeContainer();
  }
})
boxcontainer.addEventListener('click',closeContainer)
containeritem.addEventListener('click' , function(e){
e.stopPropagation();
})


//open
let index
for (let i = 0; i < imgs.length; i++) {
  
  imgs[i].addEventListener('click' , function(e){
  index=i
    containeritem.style.backgroundImage=`url(${e.target.getAttribute('src')})`
    openContainer();
  })
}

//next item
function nextimg(){
  index++
  index=index%imgs.length;
  containeritem.style.backgroundImage=`url(${imgs[index].getAttribute('src')})`
}
right.addEventListener('click',nextimg)
document.addEventListener('keydown' , function(e){
  if(e.key=='ArrowRight')nextimg();
})

// prev
function prevImg(){
  index--
  if(index<0){index=imgs.length-1}
  containeritem.style.backgroundImage=`url(${imgs[index].getAttribute('src')})`
}

left.addEventListener('click',prevImg)
document.addEventListener('keydown' , function(e){
  if(e.key=='ArrowLeft')nextimg();
})




items.addEventListener('click' , function(e){
  if(e.target.tagName =='IMG'){
    document.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')
    var current = e.target.getAttribute('src')
    mainimg.setAttribute('src' , current )
  }
})

