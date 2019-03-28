


const selection = document.getElementById('selection');
const resultsDisplay = document.getElementById('results');
const inputField = document.getElementById('input');
const addBtn = document.getElementById('add-btn');
const mixBtn = document.getElementById('mix-btn');
const resetBtn = document.getElementById('reset-btn');


let test = function() {
  console.log('logging');
}

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

////Grab user entered spirits
let grab = function() {
  let ingredients = document.getElementById('selection').children;
  let grabbedIngredients = [];
    for (let i = ingredients.length - 1; i >= 0; i--) {
     grabbedIngredients.push(ingredients[i].textContent);
    }
    return grabbedIngredients;
}


 //////Mix it///// grabbed spirit filtered through the cocktail list and display them
 const displayCocktails = function() {
   //Filter.....
  let availabeSpirits = grab();
  let result = cocktails.filter(recipe => recipe.spirit.every(spirit => availabeSpirits.includes(spirit)));

  ///...and display:

 let newPara = document.createElement('p');
 newPara.setAttribute('class', 'spirit-name');
 resultsDisplay.append(newPara);

  let resultsArr = [];
 for (let i = 0; i < result.length; i++) {
  resultsArr.push(newPara.append(document.createTextNode(`${result[i].name}| `)));
 }
 console.log(resultsArr);
 }

////Do above `displayCocktails` on button Mix It button click.
mixBtn.addEventListener('click', displayCocktails)

