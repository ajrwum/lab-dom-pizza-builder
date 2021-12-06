// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    }
    else mushroom.style.visibility = 'hidden';
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    }
    else oneGreenPepper.style.visibility = 'hidden';
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const theWhiteSauce = document.querySelector('.sauce-white');
  if (state.whiteSauce) {
    theWhiteSauce.style.visibility = 'visible';
  }
  else theWhiteSauce.style.visibility = 'hidden';
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const theCrust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    theCrust.classList.add('crust-gluten-free');
  }
  else {
    theCrust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach(oneBtn => {
    if (oneBtn.classList.contains('btn-pepperoni')) {
      if (state.pepperoni) oneBtn.classList.add('active');
      else oneBtn.classList.remove('active');
    }
    if (oneBtn.classList.contains('btn-mushrooms')) {
      if (state.mushrooms) oneBtn.classList.add('active');
      else oneBtn.classList.remove('active');
    }
    if (oneBtn.classList.contains('btn-green-peppers')) {
      if (state.greenPeppers) oneBtn.classList.add('active');
      else oneBtn.classList.remove('active');
    }
    if (oneBtn.classList.contains('btn-sauce')) {
      if (state.whiteSauce) oneBtn.classList.add('active');
      else oneBtn.classList.remove('active');
    }
    if (oneBtn.classList.contains('btn-crust')) {
      if (state.glutenFreeCrust) oneBtn.classList.add('active');
      else oneBtn.classList.remove('active');
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceElement = document.querySelector('aside strong');
  const ingredientsList = document.querySelector('aside ul');
  // initialize total price with base price
  let total = basePrice;
  // reset the ingredients list
  ingredientsList.innerHTML = '';
  // loop through state to see what ingredients to consider
  for (const ingredient in state) {
    if (state[ingredient]) {
      // updating price
      total += ingredients[ingredient].price;
      // updating list of ingredients added to bill
      ingredientsList.innerHTML += `<li>'$'${ingredients[ingredient].price} ${ingredients[ingredient].name.toLowerCase()}</li>`;
    }
  }
  // updating the total price displayed
  priceElement.textContent = '$' + total;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
