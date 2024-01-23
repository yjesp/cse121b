<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSE 121b | W03: Programming Tasks</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="styles/main.css">
</head>

<body>
    <nav>
        <ul id="menu">
            <li><a id="toggleMenu">&equiv;</a></li>
            <li><a href="index.html">Home</a></li>
            <li><a href="w01-task.html">W1 Task</a></li>
            <li><a href="w03-task.html" class="active">W3 Task</a></li>
            <li><a href="w04-task.html">W4 Task</a></li>
            <li><a href="w05-task.html">W5 Task</a></li>
            <li><a href="project.html">Project</a></li>
        </ul>
    </nav>>
    <header>
        <h1>W03: Programming Tasks</h1>
    </header>
    <main id="task3">
        <section id="section1">
            <h2>Functions</h2>
            <article>
                <h3>Addition</h3>
                <div>
                    <label for="add1">Number 1:</label>
                    <input type="text" id="add1" name="add1">
                </div>
                <div>
                    <label for="add2">Number 2:</label>
                    <input type="text" id="add2" name="add2">
                </div>
                <div>
                    <input type="button" id="addNumbers" value="Add Numbers">
                </div>
                <div>
                    <label for="sum">Sum:</label>
                    <input type="text" id="sum" name="sum" disabled>
                </div>
            </article>
            <article>
                <h3>Subtraction</h3>
                <div>
                    <label for="subtract1">Number 1:</label>
                    <input type="text" id="subtract1" name="subtract1">
                </div>
                <div>
                    <label for="subtract2">Number 2:</label>
                    <input type="text" id="subtract2" name="subtract2">
                </div>
                <div>
                    <input type="button" id="subtractNumbers" value="Subtract Numbers">
                </div>
                <div>
                    <label for="difference">Difference:</label>
                    <input type="text" id="difference" name="difference" disabled>
                </div>
            </article>
            <article>
                <h3>Multiplication</h3>
                <div>
                    <label for="factor1">Number 1:</label>
                    <input type="text" id="factor1" name="factor1">
                </div>
                <div>
                    <label for="factor2">Number 2:</label>
                    <input type="text" id="factor2" name="factor2">
                </div>
                <div>
                    <input type="button" id="multiplyNumbers" value="Multiply Numbers">
                </div>
                <div>
                    <label for="product">Product:</label>
                    <input type="text" id="product" name="product" disabled>
                </div>
            </article>
            <article>
                <h3>Division</h3>
                <div>
                    <label for="dividend">Dividend:</label>
                    <input type="text" id="dividend" name="dividend">
                </div>
                <div>
                    <label for="divisor">Divisor:</label>
                    <input type="text" id="divisor" name="divisor">
                </div>
                <div>
                    <input type="button" id="divideNumbers" value="Divide Numbers">
                </div>
                <div>
                    <label for="quotient">Quotient:</label>
                    <input type="text" id="quotient" name="quotient" disabled>
                </div>
            </article>
        </section>
        <div>
            <section id="section2">
                <h2>Selection Structures</h2>
                <label class="right">Subtotal:
                    <input type="number" id="subtotal" size="5">
                </label>
                <label class="middle right">
                    Club Member?
                    <input type="checkbox" id="member">
                </label>
                <div class="right">
                    <input type="button" id="getTotal" value="Get Total Due">
                </div>
                <div class="right">Total:
                    <span class="larger" id="total">$ --.--</span>
                </div>
            </section>
            <section id="section3">
                <h2>Array Methods</h2>
                <p>
                    Source Array: <span id="array"></span>
                </p>
                <p>
                    Odd Numbers: <span id="odds"></span>
                </p>
                <p>
                    Even Numbers: <span id="evens"></span>
                </p>
                <p>
                    Sum of Source Array: <span id="sumOfArray"></span>
                </p>
                <p>
                    Source Array Times Two: <span id="multiplied"></span>
                </p>
                <p>
                    Sum of Source Array Times Two: <span id="sumOfMultiplied"></span>
                </p>
            </section>
        </div>
    </main>
    <footer>
        &copy;<span id="year"></span> | CSE 121b | Task 03
    </footer>
    <script src="scripts/main.js"></script>
    <script>
        document.getElementById("year").innerHTML = new Date().getFullYear();
    </script>
    <script src="scripts/w03-task.js"></script>
    <script>
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

</script>
</body>

</html>
