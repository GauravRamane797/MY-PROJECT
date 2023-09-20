                         // EVENT IN JAVASCRIPT 
    //  (1) 4 WAYS of writing Events in JavaScript
    //  (2) What is Event Object
    //  (3) MouseEvent in JavaScript
    //  (4) KeyboardEvent in JavaScript
    //  (5) InputEvents in JavaScript

    // const abhi = () => {
    //   setTimeout  (function  ()  {         //anonymous function using
    //        console.log('welcome gaurav');
    //    } , 3000);
    //    }
    //        abhi();

  //  const abhi = () => {
  //  setTimeout  (  ()  =>  { 
  //      console.log('welcome gaurav');
  //  } , 3000);
  //  }


  //       const raju = () => {
  //          console.log("hello raju");
  //      }
  //              raju();
  //              abhi();


// ADD EVENT LISTENER (EVENT OBJECT IN JAVASCRIPT)

//  const sumi = document.getElementById("fourthway");
//  const goru = () => {
//    console.log('apan baght ahot events');
//    console.log(event);
//    console.log(event.target);
//    console.log(event.type);
//  }
//  sumi.addEventListener('click',goru);



//**********************************************************************



//              MouseEvent din JavaScript
//      The MouseEvent object
// Events that occur when the mous interacts with the HTML
// documents belogns to the MouseEvent Object

 // function mouseDown() {
 // document.getElementById("myP").style.color="orange";}

 // function mouseUp() {
 // document.getElementById("myP").style.color="yellow";}

//                               addeventlistener using 

//     const enter = document.getElementById('box');
//     enter.addEventListener('mouseenter',()=>{enter.style.backgroundColor='red';
//    console.log('Mouse Enter Bro')});

//     const enter = document.getElementById('box');
//     enter.addEventListener('mouseleave',()=>{enter.style.backgroundColor= 'pink';
//    console.log('Mouse leave Bro')});



//**********************************************************************




//              KeyBoardEvent in JavaScript
// Events that occur when use rpresses a key on the keyborad,
// belongs to the keyboardEvent dObject.
//

//                          Timing based Events In js
//      (1)setTimeout()
//      (2)setInterval()
//      (3)clearTimeout()
//      (4)clearInternal()


// The windwo object allow execution of code at specified timeintervals.
// these time intervals are called timing events.
// the two key methods to use with javascript are:

//  setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

//  setInterval(function,milliseconds)
// same as setTimeout(), but repeats the execution of the function continously.


//      (1)setTimeout()
//      (2)setInterval()
//      (3)clearTimeout()
//      (4)clearInternal()

//    const showMyName = document.querySelector('#showMyName');
//     const btn = document.querySelector('#btn');

//     const showName = ()=> {
// setTimeout(() => {showMyName.innerHTML='gaurav ramane'},2000)
//     }

//     btn.addEventListener('click',showName); 


// const stopNum = document.querySelector('p')
// const btn1 = document.querySelector('#btn');
// let num = o;
//  const showMyNum =()=>{ stopNum.innerHTML = 'loading....'
// setInterval(()=>{
//     stopNum.innerHTML= "${num}";
//     num++;
//  },1000)


// btn.addEventListener('click',showMyName);

// stop.setInterval('click',()=> {clearInterval(timeRef);
// })

// }




//**********************************************************************




//                OOPS in javascript

// object oriented javascript

//  what is Object Literal?

// Object Literal is simply a key:value pair data structure.

// Storing variables and functions together in one container
// we can refer this as an Objects.

// How to create an Object?

//   we can refer this as an Object.

// object = "school Bag" ---->suppose

// 1st way
// let bioData = {name:'gaurav ramane', 
//              address:'kolhapur',
//              age:'24',
//              mobile number:function(){console.log('my name is'+bioData.age)}};
// console.log(bioData);

// 2nd way no need to write function as welll after es6

// let bioData1 = {
//               name:'gaurav ramane', 
//              address:'kolhapur',
//              age:'24',
//              mobile number(){
//                              console.log('my name is'+bioData1.age)}
//                  };
//                          console.log(bioData1);



//       What if we want object as a value inside an Object

// let  biodata = {
//      myName : {
//                  realName : "gaurav",
//                  ytube : "gaurav technical",
//              },
//                   myAge :"25",
//                      getData ()
//                              {
//                      console.log('my name is'+bioData.myName + 'and my age is'+bioData.myAge)
//              }
//                      }

//              console.log(biodata.myName.ytube);




//**********************************************************************



//     what is this Object?

//---> The defination of 'this' oject is that it  contain the cuurent context.

//---> The this object can have different values depending don where it is placed

// // For Example 1
// // console.log(this);
//---> it refers to the current context and that is window global object


// // ex 2
// function  myName() {
//        console.log(this);
// }
// myName();


//   example 3

// var myNames = "vinod";
// function myName(){
//          console.log(this.myNames);
//      }
//  myName();


// example 4

// const obj = {
//             myAge : 25;
//             myName(){
//                      console.log(this);
//          }
//        }
//          obj.myName(); 


// example 5

// --> this object will not work with arrow function bcz

// const obj = {
//             myAge : 25;
//             myName: () => {
//                      console.log(this);
//          }
//        }
//          obj.myName(); 

// example  6

//     let bio = {
//         myName : {
//             realName : 'gaurav ramane',
//             name : 'gaurav technical'
//         },
    //thigs to remember is that the myName is the key and the object is act like a values
//         Age : 26,
//         getData ()
//     {
//         console.log('my name is' + this.myName.cName+ 'and my ageis'+this.Age)
//     }
//     } 
//     bioData.getData();

// ---> call method is used to call the method of another object
//---> or with call(), an object can use a method belonging to another object

// ---> but as per other it is simply the way to use this keyword or another object 





//**********************************************************************




//                          Destructuring in ES6


//---> the destructuring assignement syntax is a Javascript expression that makes it possible to unpack values from arays, or properties from objects, into distinct variables.


//                  --->  ARRAY DESTRUCTURING <---                 //

// const myBioData = ['gaurav','sumit','bhagwan',25];


//         let myFName = myBioData[0];
//         let myLName = myBioData[2];
//         let myAge = myBioData[3];
// let [myFName,myLName, myAge]= myBioData;
//      console.log(myFName);
//      console.log(myLName);
//      console.log(myAge);

//              -- we can add values too---
// let [myFName,myLName, myAge, myDegree ='MCS'] = myBioData;
// console.log(myDegree);

//        ----> OBJECT DESTRUCTURING <---                   //

//let bioData1 = {
//               name:'gaurav ramane', 
//              address:'kolhapur',
//              age:'24'}

// let age = bioData1.name;
// console.log(age);


// let {name,address,age,Degree ='MCA'} = myBioData;
// console.log(Degree);


//---> we can use Dynamic properties

//   let NAMES = "Gaurav"
//       const sumit = {
//         [NAMES]: 'HELLO HOW ARE YOU',
//         26 : 'is my age',
//          [30+5]: 'SUMIT AGE'
//      }
//      console.log(NAMES);                  // output--> 26:is my age and Gaurav : HELLO HOW ARE YOU and 35 :  sumit age

  // no need to write key and value, if both are same

// let myName = 'gaurav ramane';
//  let myAge = 26;

// method (1)
//  const myBioData = {
//  gaurav : myName,
//  sumit :  myAge
//  }
//      console.log(myBioData);

// method (2)
// let myName = 'gaurav ramane';
//  let myAge = 26;

//  const myBioData = {
//   gaurav,sumit
//      }

//     console.log(myBioData);




//              ----->  SPREAD OPERATOR  <-----


//  const colors = ['red','orange','blue','white'];

//  const myColors = ['red','orange','blue','white','black','yellow'];

// 2nd time add one more color on top and tell we need to write it again on myColor array too

// const MyFavColors = [ ...myColors, 'brown', 'whitegreen']
//   runtime output is ['red','orange','blue','white','black','yellow', 'brown', 'whitegreen'];
//              console.log(MyFavColors);



//----------------------ECMA Script 2015 END-------------------------






//**********************************************************************






// ES7 features

//      1: array include

//  const colors = ['red','orange','blue','white'];

//  const myColors = ['red','orange','blue','white','black','yellow'];
//               console.log(myColors.includes('blue'));


//     2: exponenation operator-->(**)
//       console.log(2**3); 



//**********************************************************************




//     ---------> ECMAScript 2017/ ES8  <----------

//      String padding
//      Object.values()
//      Object.enteries()

// string padding--->

            //-------method (1)
 //   const sumit = "Gaurav";
//   console.log(sumit.padStart(6));
//                                              } Adding space in values
//   let rohit = "hello sumitt".padStart(5); 
//   console.log(rohit);


            //-------method (2)
//   const sumit = "Gaurav";
//   console.log(sumit.padEnd(6));

//   let rohit = "hello sumitt".padEnd(5); 
//   console.log(rohit);


//  <------     Object.values() AND Object.enteries() AND Object.FromEnteries()  ------>

//       const person = { name:'Fred', age: 87};


//        console.log(Object.values(person));

//object value convert into array--> console.log(Object.entries(person));
//                                                BUT
// object values runtime convert into object--->
//                         console.log(object.FromEntries(person));


//     ---------> END ES8  <----------


//                    ---------> ECMAScript 2019 <----------

//          Array.prototype.{flat,flatMap}
//          Object.FromEntries() 




//                    ---------> ECMAScript 2020 <----------

//  # 1 : BigInt

//      let oldNum = Number.MAX_SAFE_INTEGER;
//          console.log(oldNum);
//          console.log(99416498849643n + 18n);

//          const newNum = 994148446142867n + 18n;
//                       console.log(newNum);
//                       console.log(typeof newNum);



//-------->JavaScript Nullish Coalescing(??) Operator<--------

//      The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. 

//const foo = null ?? 'default string';
//          console.log(foo);
// Expected output: "default string"

//      const baz = 0 ?? 42;
//      console.log(baz);
//  Expected output: 0


//    ------>   ES 2014  <------

//     "use strict";
//               let x = 'hello';
//              console.log(x)



//**********************************************************************
//**********************************************************************
//**********************************************************************





//                      =======> @~/-ADVANCED JAVASCRIPT-\~@ <=======

//          (1) Event Propagation (Event Bubbling and Event Capturing)
//          (2) Higher Order Function
//          (3) Callback Function
//          (4) Fuction Currying (We will see after Async JS section)
//          (5) CallBack Hell
//          (6) AJAX call usign XMLHttrequest
//          (7) BONUS Section JSON
//          (8) Fetch API
//          (9) Promises
//          (10) Async-Await
//          (11) Error Handling in JS


//  (1) Event Propagation (Event Bubbling and Event Capturing)        

//  WHAT IS EVENT PROPAGATION...?
//    ---> The Event Propagation mode determines in which order the elements receive the event.
 
//      Event bubblin gand capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event.

// the Event propagation mode determines in which order the elements receive the event.


 // WHAT IS EVENT BUBBLING..? --->  With Event Bubbling. The event is first captured and handled by the innermost elemnt and then propagated to outer elements.
  
// WHAT IS EVENT CAPTURING..? -->   With Event Capturing. THe evnt is first captured byy the outermost elememnt  and propagated to th einner elements.         Capturing is also called "trickling", which helps remember the propagation order


//      const parentID = document.getElementById('parentId');
//      const childID = document.getElementById('childId');

//      const prentCall = () => {
//          alert('parent div call');
//          console.log('parent div call')
//      } 

//      const childCall = () => {
//            alert('child div call');
//            console.log('child div call')
//        } 

//      parentId.addEventListener('click',parentCall,true/false);
//      childID.addEventListener('click',childCall,true/false);



//**********************************************************************



//   3rd argument true/false determine the Bubbling and caputring 


//  ```````````(2) Higher order fucntion
//   --->   function which takes another funcion as an arguments is called HOF
//    wo function jo dusre function ko as an argument krta hai use HOF


//**********************************************************************



// ````````````(3) Callback function
//---> function which get passed as an argument dto another functionis called CBF a callback function is a funtion that is passed as an argument to another function, to be "called back" at a later time.
//   Jis bhi function ko hum kisi or function ke under as an arguments passed 
//   karte hai then  usko hum CallBack fun bolte hai

//  //  // we need to create a calculator

// const add = (a,b) => {
//         return a+b;
//       }

// const sub = (a,b) => {
//         return Math.abs(a-b);
//       }

// const mult = (a,b) => {
//         return a*b;
//     }

//      const calculator = (num1,num2,operator) => {
//              return operator(num1,num2);
//  }
//    console.log(calculator(5,2,add));
//      console.log(calculator(5,2,subs));
//        console.log (calculator(5,2,multi));


//  //  //  I have to do the hardcoded for each operation which is bad 
//  //  // we will use the callback and the HOF to make it simple to use

// // code comes here

// // // now instead of calling each function indiviualy we can call it 
// // // by simply using one function that is calculator


// //  // // // IneterVieew Question
// // Differencee between Higher order function and CallBack Function?


//**********************************************************************


//       WHAT WE WILL SE NOW --->
//                   (1) Hoisting in JavaScript
//                   (2) Scope Chain
//                   (3) Lexical Scoping in JavaScript
//                   (4) Use Strict Mode
//                   (5) This keyword
//                   (6) Closures in JavaScript
//                   (7) What is Asynchronous JavaScript Programming?
//                   (8) what is Event loop?


//      ------(1) Hosting in JavaScript-----

//  // we have a creation phase and execution phase.
//  // Hoisting in Javascript is a mechanism where variables and functions
//  // declarations are moved to the top of their scope before the code execution

// // for Example
// console.log(myName);
// var myName;
// myName = "gaurav";


// // how it will be in output during creation phase
//  var myName = undefined;
//  console.log(myName);
//  myName = "gaurav";

//  //  in ES2015 (a.k.a. ES6), hoisting is avoided by using the let keywored
//  // instead of var. ( The other difference is that variablkes declared) with let are local to the surrounding block, not the entire function)



//  -----(2 and 3) What is Scope Chain and Lexical Scopin in JavaScript?--->
//  // The scope chain is used to resolve the value of variable names in js.

// // Scope chain in js is lexically defined, which means that we can see what the scope chain will be by looking at the code.

//  // At the top, we have the Global Scope, which is the window Object in the browser.

//  // Lexical Scoping means Now, the inner function can get accees to their parent functions variables But the vice-versa is not true.


// // For Example

//                      (1) global scope-->
//    Global Scope: When a variable is defined outside of any functions or blocks, it has a global scope. This means that it can be accessed from anywhere within the program, including within functions.



// let name = "John"; // Global variable
  
//  function sayHello() {
//   console.log("Hello " + name);
// }

//  sayHello(); // Output: "Hello John"



//                      (2) local scope-->
//      Local Scope: When a variable is defined within a function or block, it has a local scope. This means that it can only be accessed within that function or block.

//  function sayHello() {
//     let name = "John"; // Local variable
  
//      console.log("Hello " + name);
//  }

//      sayHello(); // Output: "Hello John"

//      console.log(name); 
// Output: Uncaught ReferenceError: name is not defined



//                    (3) Nested Scope -->

//      Nested Scope: When a function is defined within another function, it has access to variables defined in the parent function. This is known as nested scope.

//      Example:
//      Javascript
//      function outer() {
//          let name = "John"; // Outer function variable
  
//          function inner() {
//              console.log("Hello " + name);
//          }
  
//          inner(); // Output: "Hello John"
//      }
  
//      outer();



//                      (4) Block scope-->
//      Block Scope: ES6 introduced the let and const keywords, which allow variables to have block scope. This means that variables defined within a block of code (such as within an if statement or a for loop) can only be accessed within that block.


//  function sayHello() {
//    let name = "John"; // Function variable
  
//   if (true) {
//        let message = "Hello"; // Block variable
//        console.log(message + " " + name); 
        // Output: "Hello John"
//   }
  
//    console.log(message); 
    // Output: Uncaught ReferenceError: 
    // message is not defined
//  }
  
//  sayHello();


//          ------(6) Closures in JavaScript-----


//  A closure is the combination of a function bundled together (enclosed ) with references to its surrounding state ( the lexical environment).

// In other words, a closure gives you access to an outer function's scope from an inner function.

// In javaScript, closures are created every time a function is created, at function creation time.


// For Example


// const outerFun = (a) => {
//      let b = 3;
// const innerFun = () => {
//        let sum = a+b;
//          console.log(sum);    
// } 
//    innerFun();
// }
// outerFun(4);

// it same like lexical scoping 

// One more Example


// const outerFun = (a) => {
//      let b = 3;
// const innerFun = () => {
//        let sum = a+b;
//          console.log(sum);    
// } 
//   return innerFun();
// }
// let checkclosure = outerFun(4);
//  checkClousure();




 //  --------------(7) Synchornous JavaScript Prog-------

 // 
    // // Asynchronous JavaScript

// Synchronous JavaScript Prog

//   const fun2 = ()=> {
//        console.log('function 2 is called ');
//  }

//const fun1 = ()=> {
    //        console.log('function 1 is called ');
    //        fun2();
   //            console.log('function 1 again is called ');
    //  }
//  fun1();


// Asynchronous JavaScirpt Prog
//    const fun2 = () => {
//       setTimeouut(()=>{)
//             console.log('function 2 is called');
//  }, 2000);
// }

// const fun1 = () => {
//    console.log('function 1 is called');
//   fun2();


//               --------(8) Event loop-->

// What is event loop--->:
//         event loop :     The event loop is a constantly running process that monitors both the callback queue and the call stack. If the call stack is not empty, the event loop waits until it is empty and places the next function from the callback queue to the call stack.


//  console.log('Start script...');

//  setTimeout(() => {
//    task('Download a file.');
//  }, 1000);

//console.log(' Start script...Done!');

//  Expected Output --->
//      Start script...Done!
//      Download a file.


//**********************************************************************


// ````````````(4)#-FUNCTION CURRYING-#-----------

//  transforms a function with multiple arguments into a nested series of functions, each taking a single argument. 

//  Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.

// example (1)---> Function Currying

//const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);

// sum (5)(3)(8);


//this is a function with full arguments. (currrying)
//function sum(a) {
//   return (b) => {
//        return (c) => {
//           return a + b + c
//           }
//      }
//  }
//  console.log(sum(1)(2)(3)) // output--> 6


// example (2)

//each taking a single argument
//  function sum(a, b, c) {
//    return a + b + c;
//  }
//  sum(1,2,3); // 6


//**********************************************************************



//              ````````````(5) CALLBACK HELL------------
//      Callback Hell: Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. 

//      Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.

// const gaurav =  setTimeout(()=>{console.log('Work is done');
//  setTimeout(()=>{
//   console.log('Work is done 1');
//       setTimeout(()=>{console.log('Work is done 2');
//          setTimeout(()=>{console.log('Work is done 3');
//              setTimeout(()=>{console.log('Work is done 4');
//                  setTimeout(()=>{console.log('Work is done 5');
//                      setTimeout(()=>{console.log('Work is done 6');
//                         setTimeout(()=>{console.log('Work is done 7');
//                               },1000)
//                            },1000)
//                        },1000)
//                    },1000)
//               },1000)
//          },1000)
//     },1000)          
//},1000)
// console.log(gaurav);

//**********************************************************************


//            ```````````(6) AJAX Call Using XMLHttprequest------------
//                            (Asynchronous JavaScript And XML)


//  Is a programming practice of buidling complex. dynamic webpages using a technology known as XMLHttprequest.

// Ajax allows yo to update part of the DOM of an HTML page instead without the need for a full page refresh. Ajax also lets you work arynchronously, meaning your code continues to run while the targeted part of your web page is trying to reload(compared to synchronously. which blocks your code from running until Part of your page is done reloading).




//**********************************************************************
 

//        ------------(7) JSON (JavaScript Object Notation)------------
//-----> JSON hum isiliye use karate hai ki ek server se dusare server ke bich me communicate karna ho ya data transfer krna ho tabhi ye JSON standered format apnate hai

// JSON sabhi object ko string hi manata hai 
//  JSON sabhi data(key:values) ko string manata hai

//     JSON.Stringify turns a Javascript object into JSON text and scores that JSON text in a string, eg:

 

// var my_object = { key_1 : "some text", key_2 : true , key_3 : 5 };

// var object_as_string = JSON.stringify(my_object);
//  "{"key_1":"some text", "key_2":true,"key_3":5}"

// typeof(object_as_string);
// "string"

// --> JSON.parse truns a string of JSON text a JavaScript object, eg:

// var object_as_string_as_object = JSON.parse(object_as_string);
//      { key_1 : "some text", key_2 : true , key_3 : 5 };

// typeof(object_as_string_as_object);
// "Object"

    
// PROMICES 

//  const jokes = document.getElementById('joke');
//  const jokeBtn = document.querySelector('#jokeBtn');

// const generateJokes = () => {

//const setHeader ={ 
//      headers: {
//      Accept : 'application/json'
//     }
//  }

//  fetch ('https://icamhazdadjoke.com', setHeader)
//  .then((res) => res.json())
//  .then ( (data) => {
//      jokes.innerHTML = data.joke;
//  }). catch((error) => {
//      console.log(error);
//  })





//  Async Await

//   const generateJokes = async () => {
//      try{
//         const setHeader ={
//          headers: {
//          Accept : 'application/json'
//         }
//      }
//      const res = await fetch ('https://icamhazdadjoke.com', setHeader);
//      const data = await res.json();
//      jokes.innerHTML = data.joke;
//   }
//    catch(err){
//      console.log('the error is'+ err);
//   }
//  }
