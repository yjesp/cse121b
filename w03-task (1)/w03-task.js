function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */

// Function expression for subtraction
const subtract = function(number1, number2) {
    return number1 - number2;
};

// Function expression to perform subtraction using values from HTML form controls
const subtractNumbers = function() {
    // Get values from HTML form controls
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    // Call the subtract function and assign the result to the 'difference' form element
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

// Add a "click" event listener to the button with ID 'subtractNumbers'
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

// Arrow function for multiplication
const multiply = (number1, number2) => number1 * number2;

// Arrow function to perform multiplication using values from HTML form controls
const multiplyNumbers = () => {
    // Get values from HTML form controls
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    // Call the multiply arrow function and assign the result to the 'product' form element
    document.querySelector('#product').value = multiply(factor1, factor2);
};

// Add a "click" event listener to the button with ID 'multiplyNumbers'
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
// Function declaration for division
function divide(dividend, divisor) {
    return dividend / divisor;
}

// Function expression to perform division using values from HTML form controls
const divideNumbers = function() {
    // Get values from HTML form controls
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    // Call the divide function and assign the result to the 'quotient' form element
    document.querySelector('#quotient').value = divide(dividend, divisor);
};

// Add a "click" event listener to the button with ID 'divideNumbers'
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

// Function to calculate total due
const calculateTotalDue = () => {
    // Get the numeric value entered by the user in the subtotal field
    let subtotal = Number(document.querySelector('#subtotal').value);

    // Check if the membership checkbox is checked
    let isMember = document.querySelector('#member').checked;

    // Apply a 15% discount if the user is a club member
    if (isMember) {
        subtotal *= 0.85; // Apply 15% discount
    }

    // Output the total to the 'total' span with two decimal places using a template string
    document.querySelector('#total').textContent = `$ ${subtotal.toFixed(2)}`;
};

// Add a "click" event listener to the button with ID 'getTotal'
document.querySelector('#getTotal').addEventListener('click', calculateTotalDue);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */

// Declare and instantiate an array variable to hold the numbers 1 through 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assign the value of the array variable to the HTML element with an ID of 'array'
document.querySelector('#array').textContent = numbersArray;

// Use the filter() array method to find all odd numbers and assign the result to the HTML element with an ID of 'odds'
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1);

// Use the filter() array method to find all even numbers and assign the result to the HTML element with an ID of 'evens'
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0);

// Use the reduce() array method to sum the array elements and assign the result to the HTML element with an ID of 'sumOfArray'
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);

// Use the map() array method to multiply each element by 2 and assign the result to the HTML element with an ID of 'multiplied'
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);

// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two.
// Assign the result to the HTML element with an ID of 'sumOfMultiplied'
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
