// adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8
function addTwo(number) {
  return number + 2;
  }
  
  //console.log(addTwo(2))
  
  
  
  
  
  
  // adds the two inputted numbers together
  // ex: add(5, 10); -> 15
  function add(num1, num2) {
return num1 + num2;   
  }
  
 // console.log(add(2,3))
  
  // adds all three inputted numbers together
  // ex: addd(1,2,3); -> 6
  // ex: addd(2,4,2); -> 8
  function addd(value1, value2, value3) {
return value1 + value2 + value3;   
  }

  //console.log(addd(1,2,3))
  
  
  // subtracts the second inputted number from the first inputted number
  // ex: subtract(5, 10); -> -5
  function subtract(n1, n2) {
return n1 - n2  
  }
  
  //console.log(subtract(5,10))
  // multiplies the inputted number by 2
  // ex: multiplyByTwo(5); -> 10
  // ex: multiplyByTwo(6); -> 12
  function multiplyByTwo(numero) {
return numero * 2;   
  }

  //console.log(multiplyByTwo(3))
  
  
  // multplies the two inputted numbers together
  // ex: multiply(1,2); -> 2
  // ex: multiply(2,2); -> 4
  function multiply(val1, val2) {
return val1 * val2;   
  }
  
  //console.log(multiply(2,2))
  //console.log(multiply(1,2))

  // multiplies all three inputted numbers together
  // ex: multiplyy(1,2,3); -> 6
  // ex: multiplyy(2,2,3); -> 12
  function multiplyy(a, b, c) {
return a * b * c;   
  }

  //console.log(multiplyy(3,3,3))
  
  
  // returns the square of the inputted number
  // ex: square(5); -> 25
  function square(value) {
return value * value;  
  }
  

  //console.log(square(5))
  
  // determines if the number is odd
  // outputs true if the number is odd
  // outputs false if the number is even
  // ex: isOdd(4); -> false
  // ex: isOdd(5); -> true
  function isOdd(num) {
if (num %2 === 0)
return false;
else
return true;  
  }
  
  
  // determines if the number is negative
  // outputs true if the number is negative
  // outputs false if the number is zero or positive
  // ex: isNegative(-1); -> true
  // ex: isNegative(1); -> false
  // ex: isNegative(0); -> false
  function isNegative(num) {
  if (num  < 0)
  return true; 
  else
  return false; 
  }


  
  
  // returns the absolute value of the inputted number
  // ex: positive(-1); -> 1
  // ex: positive(1); -> 1
  function positive(num) {
    if (num  < 0)
    return num * -1; 
    else
    return num;    
  }

  //console.log(positive(10))
  
  // Returns boolean of whether argument is classified as a Number object
  // isNumber(5); → true
  // isNumber('hi'); → false
  function isNumber(value) {
if (typeof value === 'number')
return true; 
else
return false; 


  }

  //console.log(isNumber(2))
  
  // Returns boolean of whether argument is classified as an Array object
  // isArray(5); → false
  // isArray([1,2,3]); → true
  function isArray(value) {
    if (Array.isArray(value))
    return true; 
    else
    return false;
  
  }

  //console.log(isArray(["hi", "second"]))
  
  // Returns boolean of whether argument is classified as an Object
  // isObject(5); → false
  // isObject([1,2,3]); → true
  function isObject(value) {
   if ((typeof value === "object" || typeof value === 'function') && (value !== null))
   return true; 
else
return false;
    
  }
/*
let test = new Object(); 
test.name = "john Paul";
*/
//console.log(isObject([1,2,3]))



  
  // return boolean of whether argument is classified as null
  // isNull(null); -> true
  // isNull(5); -> false
  function isNull(value) {
if (value === null)
return true; 
else return false;
  }
  
 // console.log(isNull(5))