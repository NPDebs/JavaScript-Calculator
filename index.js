console.log("Hello World!")

// Receive user's choice of operation
var operation = prompt("What operation would you like to perform today? E.g '+', '-', '*', '/' or '%'?")

// Receive 2 numbers from user
var firstNumber = parseFloat(prompt("Enter the first number: "));
var secondNumber = parseFloat(prompt("Enter the second number: "));

let result;

if (operation == '+')  {
    (result = firstNumber + secondNumber)
}
else if (operation == '*')  {
    (result = firstNumber * secondNumber)
}
else if (operation == '-')  {
    (result = firstNumber - secondNumber)
}
else if (operation == '/') {
    (result = firstNumber / secondNumber)
}
else if (operation == '%') {
    (result = firstNumber % secondNumber)
}
else {
    alert('Not a valid expression!');
}

alert('The answer is: ' + result)