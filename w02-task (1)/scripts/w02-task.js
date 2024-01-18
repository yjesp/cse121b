/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */

const nameElement = document.getElementById('name');
const fullName = 'Park Young Jae';
const currentYear = new Date().getFullYear(); 
const profilePicture = 'images/placeholder.png';  


/* Step 3 - Element Variables */

const foodElement = document.getElementById('food')
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${Park_Young_Jae}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', Placeholder);
imageElement.setAttribute('alt', `Profile image of ${Park_Young_Jae}`);




/* Step 5 - Array */


const favoriteFoods = ['Pizza', 'Sushi', 'Chocolate', 'Ice Cream'];
foodElement.innerHTML = favoriteFoods.join('<br>');
const newFavoriteFood = 'Burgers';
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${newFavoriteFood}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;