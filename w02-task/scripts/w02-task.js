/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
  const fullName = 'Park Young Jae';
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  const profilePicture = 'images/placeholder.png';

/* Step 3 - Element Variables */
  // Using getElementById for element with id 'food'
  const foodElement = document.getElementById('food');

  // Using getElementById for element with id 'name'
  const nameElement = document.getElementById('name');

  // Using querySelector for element with id 'year'
  const yearElement = document.querySelector('#year');

  // Using any viable method to get the profile image element
  const imageElement = document.querySelector('img[src="images/placeholder.png"]');
  // Note: Adjust the selector based on your actual image source and structure

/* Step 4 - Adding Content */
  
  // Assigning the fullName variable value to nameElement's innerHTML property
  nameElement.innerHTML = `<strong>${fullName}</strong>`;

  // Using textContent to set the value of the element to the currentYear variable
  yearElement.textContent = currentYear;

  // Using setAttribute to set the src property of the image element
  imageElement.setAttribute('src', profilePicture);

  // Using setAttribute to set the alt property of the image element with a template literal
  imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

  // Step 1: Declare an array variable to hold favorite foods
  const favFoods = ['Pizza', 'Ice Cream', 'Sushi'];

  // Step 2: Modify the HTML element with the id of 'food'
  foodElement.innerHTML = favFoods.join('<br>');

  // Step 3: Declare and instantiate a variable to hold another favorite food item
  const newFavoriteFood = 'Chocolate';

  // Step 4: Add the new item to the array using push()
  favFoods.push(newFavoriteFood);

  // Step 5: Append the new array values onto the displayed content of the HTML element with a line break
  foodElement.innerHTML += `<br>${newFavoriteFood}`;

  // Step 6: Remove the first element in the favorite food array
  favFoods.shift();

  // Step 7: Append the modified array output with a line break
  foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

  // Step 8: Remove the last element in the favorite food array
  favFoods.pop();

  // Step 9: Append the final modified favorite foods array with a line break
  foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

