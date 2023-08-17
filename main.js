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
console.log(li);
}


