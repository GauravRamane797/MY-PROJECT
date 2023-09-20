// mouse event in javascript (mouse related)
// the moouse event object
// Events that occur when the mouse interacts with the HTML
// documents belongs to the MouseEvents Objects

// <p id="myP" onmousedown ="mouseDown()" onmouseup="mouseUp">hello im javascript you call me javascript</p>
// <script>
// function mouseDown(){
//     document.getElementById('myP').style.color=red
// }function mouseUp () {
//     document.getElementById('myP').style.color=yellow
// }</script> 

// mouseenter and mouseleave
//<script> const Enter= document.getElementById('box');
// enter.addEventListner['mouseEnter'() => {enter.style.background.color=red;
// console.log('mouseEnterBro');});

// enter.addEventListner['mouseLeave'() => {
//  console.log('mouseLeaveBro');
//  enter.style.background.color=red;});
// </script> 


// keyboardEvents in javascript
//   (1) events that occur when user presses a key on the keyword,
//   (2) belongs to the keyboard Events object.

//A function is triggered when the user is pressing a key in the input field 
// <input type='text' class='effect' onkeypress='keypress()' onkeyDown="keyDown()" onkeyup="keyUp()">

// <script>
// const keypress=()=>{document.getElementById('keys').innerHTML='you press' ${event.key} 'and its code is' ${event.code}}

// better to use 2nd and 3rd once
// const keyDown = () =>{document.getElementById('keys').innerHTMl='key is down';
// when use click backslash to deleter if will run }

// input events in javascript
// (1) the onchange event occurs when th value of an element has
// (2) for radiobuttons  and checkboxces, the onchange evnet occurs
// (3) ckecked state has been changed.



// < selct id ='ice-creams' name = "iceCreams" onchange="selectElemet">
//  <option values =''>select one</option>
//  <option values = "choco">choco</option>
//  <option values ='sardine'>sardinen</option>
//  <option values = "chocklate">chocklate</option>
//  </select>
// div id='result'></div>
//  <script>
//     selectElement =() => {
//         const inputChange= document.getElementById('ice').value;
//         const iceCreams=document.getElementById('iceCream').value;
//         const result= doucment.getElementById('results');
//         result.innerHTML="mr" (inputChange)'select' (iceCreams)'iceCreams flavoor';
//    

//                                             reference/events using 
//                 const iceCreams=document.getElementById('ice-creams');
//                 iceCreams.addEventListener('changed'()=>{const input change = document.getElementById('ice').value;
//                 const iceCreams=document.getElementById('iceCream').value;
//                 const result= doucment.getElementById('results');
//                 result.innerHTML="mr" (inputChange)'select' (iceCreams)'iceCreams flavoor';});
//     </script>}

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

//  <script>
//    const showMyName = document.querySelector('#showMyName');
//     const btn = document.querySelector('#btn');

//     const showName = ()=> {
// setTimeout(() => {showName.innerHTML='vinod'},1000)
//     }

//     btn.addEventListener('click',showMyName); 
 

// const stopNum = document.querySelector('p')
// const btn1 = document.querySelector('#btn');
// let num = o;
//  const showMyNum =()=>{ stopNum.innerHTML = 'loading....'

//  setInterval(()=>{
//     stopNum.innerHTML= "${num}";
//     num++;
//  },1000)


// btn.addEventListener('click',showMyName);

// stop.setInterval('click',()=> {clearInterval(timeRef);
// })

// }
// </script>


//                             OOPS IN JAVASCRIPT(object oriented javascript)
//    (1) what is object literal?
// object literal is simply a key:value pair data structure.

// Storing variables and functions together in one container.
// we can refer this as an Objects.

// How to create an Object?

// suppose--->object=school bag
// 1st way

//  (1) let biodata ="gaurav ramane"
// console.log(biodata);
 
//  let bioDAta = {
//     myName : "thaptechnical",
//     myAged : 26,
//     getData : function(){
//         console.log('my name is' (bioDAta.myName))
//     }
// }


// 2nd way no need to write functions as well after es6




























//  Section-7 ====> Arrays in Javascript

// When we use var, we can stord only one value at a time.
// var friend1 = "ramesh";
// var friend2 = "arjun";
// var friend3 = "vishal";

// var myFriends = [ 'ramesh', 22,male, 'arjun', 'vishal', true, 52];

// When we feel like storing mulitple values in one variable then
// instead of var, we will use an Array.

// In JavaScript, we have an Array  class, and arrays are the prototype of this class.

// Example

// var myFriends = [ 'ramesh', 22,male, 'arjun', 'vishal', true, 52];







//  ARRAY SUBSECTION: traversal in array
// navigate through an array

// if we want to get the single data at a time and also 
// if we want to change the data


// var myFriends = [ 'ramesh', 22,male, 'arjun', 'vishal', true, 52];

//     console.log(myFriends[myfriends.length -1]);

// if we want to check the lenght of elements of an array

// console.log(myFriends.length);

// we use for loop to navigate

// var myFriends = [ 'ramesh', 22,male, 'arjun', 'vishal', true, 52];
// for(var i=0; i<myFriends.length; i++){
// console.log(elements);
// }

// for(let elements of myFriends){
//   console.log(elements);
//   }

// Array.prototype.forEach()
// calls a function for each element in the array.

// var myFriends = [ 'ramesh', 22,male, 'arjun', 'vishal', true, 52];

// myFriends.forEach(function(element,index,array){
//      console.log(element + ' index: ' 
//                     + index + "" + array);
//      };)



// myFriends.forEach(function(element,index,array){
//      console.log(element + ' index: ' 
//                     + index + "" + array);
//      };)