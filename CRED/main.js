let proname = document.getElementById('proname')
let proprice = document.getElementById('proprice')
let procategory = document.getElementById('procategory')
let prodesc = document.getElementById('prodesc')


var database = []
   if(localStorage.getItem('allproduct')!=null){
    database = JSON.parse(localStorage.getItem('allproduct'))
      display()
   }

function getvalues(){
    Product={
        name:proname.value,
        price:proprice.value,
        category:procategory.value,
        description:prodesc.value 
    }
    database.unshift(Product)
    localStorage.setItem('allproduct' , JSON.stringify(database))
    display()
    clearrr()
}
function clearrr(){
    proname.value=''
    proprice.value=''
    procategory.value=''
    prodesc.value=''
}
function display(){
     var cartona =''
    for (let i = 0; i < database.length; i++) {
        cartona+=`
        <tr>
                     <td>${database[i].name}</td>
                    <td>${database[i].price}</td>
                    <td>${database[i].category}</td>
                    <td>${database[i].description}</td>
                    <td><button class="btn btn-outline-danger" onclick="deleteitem(${i})" id="delete">delete</button>
                         <button class="btn btn-outline-primary" onclick="updatepro(${i})" id="update">update</button></td>
                </tr>
        `
    }
    document.getElementById('tableBody').innerHTML= cartona 
}

function deleteitem(index){
    database.splice(index,1)
     localStorage.setItem('allproduct' , JSON.stringify(database))
    display()
}
var superindex
function updatepro(index){
    superindex = index
document.getElementById('updatee').style.display = 'block'
document.getElementById('add').style.display = 'none'

proname.value = database[index].name
proprice.value = database[index].price
procategory.value = database[index].category
prodesc.value = database[index].description
}

function newvalue(){
    document.getElementById('updatee').style.display = 'none'
document.getElementById('add').style.display = 'block'

database[superindex].name = proname.value 
database[superindex].price = proprice.value
database[superindex].category = procategory.value 
database[superindex].description = prodesc.value

localStorage.setItem('allproduct' , JSON.stringify(database))
    display()
}


function searchpro(inputValue){
    var cartona = ''
    for (let i = 0; i < database.length; i++) {
        if(database[i].name.toLowerCase().startsWith(inputValue.toLowerCase())){
            cartona+=`
        <tr>
                     <td>${database[i].name}</td>
                    <td>${database[i].price}</td>
                    <td>${database[i].category}</td>
                    <td>${database[i].description}</td>
                    <td><button class="btn btn-outline-danger" onclick="deleteitem(${i})" id="delete">delete</button>
                         <button class="btn btn-outline-primary" onclick="updatepro(${i})" id="update">update</button></td>
                </tr>
        `
        }
       
    }
    document.getElementById('tableBody').innerHTML= cartona 

}