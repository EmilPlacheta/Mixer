


const selection = document.getElementById('selection');
const addBtn = document.getElementById('add-btn');
const inputField = document.getElementById('input');




///////add-btn functionality///////////

let addSpirit = function() {
  //gets the input
  let userInput = document.getElementById('input').value;
  //...creates new 'p' tag
 let newPara = document.createElement('p');
 //...assigns a class to it
 newPara.setAttribute('class', 'spirit-name');
 
 //... appends it to the right div...
 selection.append(newPara);
 //...appends user ipnout to it..
 newPara.append(document.createTextNode(userInput));

 //...clears the input.
 inputField.value = '';

 //keeps input focused
 inputField.focus();
}


///////Add user choice to the Selection List after clicking add, or pressing enter///////////
addBtn.addEventListener('click', addSpirit);
inputField.addEventListener('keypress', function(e) {

  if (e.keyCode === 13) {
    addSpirit();
  }
})


/// Grab users selected spirits, getElementByClassName returns a nodeList, kinda like an array, treat it like an aray for now...
const selectedSpirits = document.getElementsByClassName('spirit-name');
let querySelected = document.querySelectorAll('.spirit-name');

console.log(selectedSpirits[0].textContent)
console.log(querySelected[0].textContent);

