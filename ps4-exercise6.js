/* Functions */

console.log('Functions')

// Exercise 6-a

function suma (varNum1, varNum2){
    return varNum1 + varNum2;
}
var sumVar = suma(parseInt(prompt('Enter first number')), parseInt(prompt('Enter second number')));
console.log(sumVar);

// Exercise 6-b
    
function suma (varNum1, varNum2){
    if (isNaN(varNum1) && isNaN(varNum2)) {
        alert('error');
        return 'NaN';
    }
    return varNum1 + varNum2;
}
var sumVar = suma(parseInt(prompt('Enter first number')), parseInt(prompt('Enter second number')));
console.log(sumVar);

// Exercise 6-c

function validateInteger (x) {
    if (Number.isInteger(x)) {
       alert('true');
   }else{
       alert('false');
   }
}
var g = validateInteger((Number(prompt('enter number'))));

// Exercise 6-d

function suma (varNum1, varNum2){
    if (isNaN(varNum1) && isNaN(varNum2)){
        alert('error');
    }else{
        var num1Int=  validateIntegerInt (varNum1);
        var num2Int=  validateIntegerInt (varNum2);
            return num1Int + num2Int;
    }
}
function validateIntegerInt (x){
    if (Number.isInteger(x)){
       return x;
    }
    else {
        alert ("Is not integer");
        return Math.round(x);
    }               
}
var sumVar = suma(Number(prompt('Enter first number')), Number(prompt('Enter second number')));
console.log(sumVar);

// Exercise 6-e

function suma (varNum1, varNum2){
    if (valideNumber(varNum1) && valideNumber(varNum2)){
        return varNum1 + varNum2;
    }else{
        alert('error');
        return 'NaN';
    }
}
var sumVar = suma(parseInt(prompt('Enter first number')), parseInt(prompt('Enter second number')));
console.log(sumVar);

function valideNumber(x){
    if (isNaN(x)){
      return false;
    }else{
      return true;
    }
}


