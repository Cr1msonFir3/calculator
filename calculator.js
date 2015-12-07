//create a simple calculator app;
//create functions for the various math operators
function addition(number1, number2) {
  var addition3 = number1 + number2;
  return addition3;
}

function subtraction(number1, number2) {
  var subtraction3 = number1 - number2;
  return subtraction3;
}

function multiplication(number1, number2) {
  var mul3 = number1 * number2;
  return mul3;
}

function division(number1, number2) {
  var div3 = number1 / number2;
  return div3;
}

//variables for calling the function
var addFunc;
var subFunc;
var divFunc;
var mulFunc;



// Get what kind of process the user wants
var getProcess;
var refineProcessAdd;
var refineProcessSub;
var refineProcessMul;
var refineProcessDiv;
do {
  getProcess = prompt('What kind of math do you want to do? Add, Subtract, Multiply, or Divide');
  refineProcessAdd = getProcess.toUpperCase('ADD');
  refineProcessSub = getProcess.toUpperCase('SUBTRACT');
  refineProcessMul = getProcess.toUpperCase('MULTIPLY');
  refineProcessDiv = getProcess.toUpperCase('DIVIDE');
} while (!refineProcessAdd || !refineProcessDiv || !refineProcessSub || !refineProcessAdd)







  // Question Prompt variables


  var questionAdd;
  var questionAdd2;

  var questionSub;
  var questionSub2;

  var questionMul;
  var questionMul2;


  var questionDiv;
  var questionDiv2;

  if (refineProcessAdd === 'ADD') {
    //Get the fist number
    questionAdd = prompt('What is your first addend?')
    //Parse the string into a number
    var getIntAdd = parseInt(questionAdd);
    //Get the Second number
    questionAdd2 = prompt('What is your second addend?');
    //Parse the String into a number
    var getIntAdd2 = parseInt(questionAdd2);
    //call the function with a variable and add getIntAdd and getIntAdd2 as arguements
    addFunc = addition(getIntAdd, getIntAdd2);
    //Print the result of the math to the screen
    document.write('<h1>This is the Addition problem you created with its Answer : ' + getIntAdd + ' + ' + getIntAdd2 + ' = ' + addFunc + '</h1>');
  } else if (refineProcessSub === 'SUBTRACT') {
    //Get the fist number
    questionSub = prompt('What is your minuend?');
    //Parse the string into a number
    var getIntSub = parseInt(questionSub);
    //Get the second number
    questionSub2 = prompt('What is your subtrahend');
    //Parse the string into a number
    var getIntSub2 = parseInt(questionSub2);
    //call the function with a variable and add getIntSub and getIntSub2 as arguements
    subFunc = subtraction(getIntSub, getIntSub2);
    //Print the result of the Math to the screen
    document.write('<h1>This is the Subtraction problem you created with its Answer : ' + getIntSub + ' - ' + getIntSub2 + ' = ' + subFunc + '</h1>');
  } else if (refineProcessMul === 'MULTIPLY') {
    //Get the first number
    questionMul = prompt('What is your first factor');
    //Parse the string into a  number
    var getIntMul = parseInt(questionMul);
    //Get the second number
    questionMul2 = prompt('What is your second factor');
    //Parse the string into a number
    var getIntMul2 = parseInt(questionMul2);
    //call the function with a variable and add getIntMul and getIntMul2 as arguements
    mulFunc = multiplication(getIntMul, getIntMul2);
    //Print the result of the Math to the Screen
    document.write('<h1>This is the multiplication problem you created with its answer : ' + getIntMul + ' X ' + getIntMul2 + ' = ' + mulFunc + '</h1>');
  } else if (refineProcessDiv === 'DIVIDE') {
    //Get the first number
    questionDiv = prompt('What is your dividend');
    //Parse the string into a  number
    var getIntDiv = parseInt(questionDiv);
    //Get the second number
    questionDiv2 = prompt('What is your divisor');
    //Parse the string into a number
    var getIntDiv2 = parseInt(questionDiv2);
    //call the function with a variable and add getIntDiv and getIntDiv2 as arguements
    divFunc = division(getIntDiv, getIntDiv2);
    //Print the result to the Screen
    document.write('<h1>This is the Division problem you created with its answer : ' + getIntDiv + ' / ' + getIntDiv2 + ' = ' + divFunc + '</h1>')
  } else {
    //If the user does not enter a value or enters anything other than a math function this code runs
    document.write('<h1>You did not select any type of math function, please refresh the page to start over</h1>')
  }
