// Do not change any of the function names

function multiplyArguments() {
  let product = 1;
  if (arguments.length === 0) {
    return 0; //code
  }
  else if (arguments.length === 1) {
    return 1;//code
  }
  else {
    for (let i = 0 ; i < arguments.length ; i++) {
        product = product * arguments[i];//code
    }
    
    return product;
  }
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
}

function invokeCallback(cb) {
    cb(name);//code
  // invoke cb
}

function sumArray(numbers, cb) {
  let sum = 0;
  for (let i = 0 ; i < numbers.length ; i++) {
    sum = sum += numbers[i];
  }
    cb(sum);//code
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
}

function forEach(arr, cb) {
      arr.forEach(cb); 

  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
}

function map(arr, cb) {
  arr.map(cb);
  let new_arr = arr.map(cb);
  return new_arr;
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
}

function createUserClass() {
  class User {
    constructor(options) {
      this.username = options.username;
      this.name = options.name;
      this.email = options.email; 
      this.password = options.password;
    }
      function(sayHiMethod) {
        return 'Hello, my name is ' + this.username;
    }
  }
    return User;
}
  
  // create a class constructor called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the constructor


function addPrototypeMethod(Constructor) {
  Constructor.prototype.sayHi = function() {
    return 'Hello World!';
  };
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
}

// !! This is the end of the homework exercises !!





// !! ------------------ !! 
/* The following exercises are extra credit, they are not required as part of the homework. In order to solve these problems you will need
   to independantly study the concepts of Closure, and Recursion. There are links in the main README file to strt you on your journey. 
   If you want to attempt these exercises, you will need to access the test.js file in the tests folder, and uncomment the tests pertaining 
   to the exercise you are attempting. Good luck! */


function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
}

function nFactorial(n) {
  // return the factorial for n
  // solve this recursively
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
}

function cacheFunction(cb) {
  // Extra Credit
  // use closure to create a cache for the cb function
  // the function that you return should accept a single argument and invoke cb with that argument
  // when the function you return is invoked with an argument it should save that argument and its result
  // when the function you return is called again with an argument that it has seen before it should not call cb
  // but should instead directly returned the previous result
  // example:
  // cb -> function(x) { return x * x; }
  // if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
  // if the function you return is invoked again with 5 it will look on an object in the closure scope
  // and return 25 directly and will not invoke cb again
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments: multiplyArguments,
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
  createUserClass: createUserClass,
  addPrototypeMethod: addPrototypeMethod,
  addReverseString: addReverseString,
  nFactorial: nFactorial,
  cacheFunction: cacheFunction
};
