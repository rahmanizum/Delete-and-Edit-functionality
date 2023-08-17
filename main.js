const form = document.getElementById('addForm');
const itemList= document.getElementById('items');

//form submit event 
form.addEventListener('submit',addItem);
function addItem(e){
 e.preventDefault();

 //Get input value
 const newItem= document.getElementById('item');

//create new li element 
const li= document.createElement('li');

//Add class
li.className='list-group-item d-flex justify-content-between';
li.className='list-group-item d-flex justify-content-between';
//Add text node with input value
li.appendChild(document.createTextNode(newItem.value));

//create button 
const btn= document.createElement('button');
btn.className='btn btn-danger btn-sm float-right delete';
btn.appendChild(document.createTextNode('x'));

//btn append to li 
li.appendChild(btn);

//append li to itemList

itemList.appendChild(li);

// clear the field
newItem.value='';
}

// delete event
itemList.addEventListener('click',removeItem);

function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

// filter event 
const filter = document.getElementById('filter');
filter.addEventListener('keyup',filterItems);

//define filterFunction

function filterItems(e){
    //convert text to lowercase
    const text= e.target.value.toLowerCase();
    
    //Get all item in HTML collections
    const items=itemList.getElementsByTagName('li');

    //convert HTML collectons into Array
    const itemsArr=Array.from(items);
    //iterate through array
    itemsArr.forEach(blockdisplay);
 
    //define blockdisplay

    function blockdisplay(value){
       const itemName=value.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text)!=-1){
        value.classList.add('d-flex');
        value.style.display='block';
        console.log(value);
       }
       else{
        value.classList.remove('d-flex');
        value.style.display='none';
       }
    }
}

//or you can simplye write 
// function filterItems(e){
//     //convert text to lowercase
//     const text= e.target.value.toLowerCase();
    
//     //Get all item in HTML collections
//     const items=itemList.getElementsByTagName('li');

//     //convert HTML collectons into Array
//   Array.from(items).forEach(function(value){
//     const eachitem=value.firstChild.textContent.toLocaleLowerCase();
//     if(eachitem.indexOf(text)!=-1){
//         value.classList.add('d-flex');
//         value.style.display='block';   
//     }
//     else
//     {
//         value.classList.remove('d-flex');
//         value.style.display='none';   
//     }
//   })
// }
