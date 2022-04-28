// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  //iterate through each element of array
  // if modolo % 2  != 0, add to return array
  //return the filtered array
 let result = array.filter(element => element %2 > 0)
return result; 
}

//console.log(returnOdds([1,2,3,4,5,6,7]))

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  let result = array.filter(element => element %2 === 0)
  return result;   
}
//console.log(returnEvens([1,2,3,4,5,6,7]))

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
 let result = array.reduce((previousValue, currentValue, currentIndex) => { 

  if (currentValue > previousValue)
  previousValue = currentValue;
  return previousValue;
 }
 )
 return result;  
}

//console.log(findMax([1,25,6,3]))
/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
  function trim(string) {
    //convert string to array
    let arry =  string.split('');
    let result = []; 
    console.log(arry)
    //iterate through array up to first letter
    let element = arry[0]
    let counter = 0; 
    while (element === ' ')
    {
    counter++;
    element = arry[counter];
    }
    console.log(counter)
    
    let counterend = arry.length -1; 
    element = arry[counterend]
    while (element === ' ')
    {
    
        counterend--;
        element = arry[counterend]
    }
    console.log(counterend)
    return arry.slice(counter, counterend +1).join("") 
    // if element is white space, ignore
    //otherwise add to result array
    //return result array and concat back to string...
      }
//console.log(trim(" hello  "));
// under the hood, a JavaScript array is a specific type of object in which values are paired with sequentially numbered keys.
// the "Array" object also contains a number of methods that give arrays their functionality.
// the below function should return an empty object that has the behavior and functionality of an array. this object should have the following methods:
  // push(val) adds val to the end
  // pop() removes a value from the end and returns it
  // unshift(val) adds val to the beginning
  // shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and create an object that has those methods
function createArray() {
  this.value = {};  

}

createArray.prototype.length= function () { 
   let counter = 0; 
   let element = this.value[counter];
   while (element !== undefined)
   {
       counter++;
       element = this.value[counter]
   }
  console.log(counter)
  return counter; 
  };

  createArray.prototype.push= function (val) { 
    this.value[this.length()] = val;
     };
    
     createArray.prototype.pop= function () { 
     let result = this.value[this.length() -1];
      delete this.value[this.length() -1 ];
      return result;
       };

       createArray.prototype.shift= function () { 
          let counter =0; 
          let result = this.value[counter];
          let element = this.value[counter]; 
          while (element !== undefined && this.value[counter +1] !== undefined ){
              this.value[counter] = this.value[counter+1];
              counter++; 
              element = this.value[counter]
              console.log(element)
          }
          delete this.value[this.length() -1]
          return result; 
            };

            createArray.prototype.shift= function () { 
              let counter =0; 
              let result = this.value[counter];
              let element = this.value[counter]; 
              while (element !== undefined && this.value[counter +1] !== undefined ){
                  this.value[counter] = this.value[counter+1];
                  counter++; 
                  element = this.value[counter]
                 // console.log(element)
              }
              delete this.value[this.length() -1]
              return result; 
                };
  
                createArray.prototype.unshift= function(val) { 
                 let counter = this.length(); 
                 while (counter > 0 )
                 {
                     this.value[counter ] = this.value[counter-1]
                   counter--
                 }
                 this.value[0] = val;
                 return this.length()
                    };
let myArry = new createArray(); 
console.log(myArry.push("jason"))
console.log(myArry)