// console.log("Christopher Wiafe Debrah");

// console.log("It is a type of: "+typeof(todo1));

// let date = new Date();
// let getMonth = date.getMonth();
// let month;

// let dayOfMonth = date.getDay();
// let year = date.getFullYear();


// switch (getMonth) {
//     case 0:
//         month = "January";        
//         break;

//     default:
//         console.log("unknown month");
//         break;
// }
// console.log("Today's date is: "+month+ " "+ dayOfMonth + ", "+year);

// let observation1 = 4 + 5 * 3;
// let observation2 = (4 + 5) * 3;

// console.log(observation1);
// console.log(observation2);


// let age = 20;
// let message = "I am " + age + " years old";
// console.log("The typeOf message variable is: "+ typeof(message));

// setTimeout(changeTitleName,5000);
// function changeTitleName (){

//     document.querySelector("head title").innerHTML = "Chris Todo App";
//     console.log("worked!");
//     setTimeout(function () {document.querySelector("head title").innerHTML = "JS Practice"; console.log("changed")}, 10000);
// }

// let todo1 = 3334;
// let todo2 = "Use Commercial Car";
// let todo3 = "Swap Phone";

// function addToDo(todoTitle){
//     let divElement = document.createElement('div');
//     divElement.innerText = todoTitle;
//     document.body.appendChild(divElement);
// }

// // let btnElement = document.createElement('button');
// // btnElement.innerText = "Click Me";
// // document.body.appendChild(btnElement);


// addToDo(todo1);
// addToDo(todo2);
// addToDo(todo3);


// function greeting (firstName){
//     console.log("Hello "+firstName);
// }
// greeting('nana annaa');

// function toUpper (str){
// console.log(str.toUpperCase());
// }
// toUpper("Chris");

// function inchesToCentimeters(inches){
//     console.log(" The length of "+inches+" inches is "+inches * 2.54 + " cm.");
// }
// inchesToCentimeters(2);


// newToDosUpperCase = [];
// toDos = ["Buy Twister", "Sell Twister", "Credit Twister"]
// toDos.forEach(todosHead => {
//     newToDosUpperCase.push(todosHead.toUpperCase());
// });
// console.log(newToDosUpperCase);
// console.log("The new toDos array is: "+newToDosUpperCase);



// newtoDosArrayDouble = [];
// toDosToDouble = ["ant", "fly", "cry"]
// toDosToDouble.forEach(
//     function array(theToDoArr){
//         newtoDosArrayDouble.push(theToDoArr);
//         newtoDosArrayDouble.push(theToDoArr);
//     }
// );
// console.log(newtoDosArrayDouble);

// numbersArray = [1,2,3,4,5];
// let summerFinal = 0;
// numbersArray.forEach(function arraySUm(params) {
//     summerFinal +=params;
//     console.log("For each summation of "+params+ " which has an index of "+numbersArray.indexOf(params)+" is: "+summerFinal);
// });
// console.log("Final summation is: "+summerFinal);


// function changeText(){
//     let btnID = document.querySelector('#todo-button');
//     btnID.innerText = "Done";
// }

// let count = 0;

// function increaseNumber(){
//     // let btnID = document.querySelector('#increase-button');
//     let divIDWithCounterNumber = document.querySelector('#counter');
//     divIDWithCounterNumber.innerHTML = count +=1;

// }
// function decreaseNumber(){
//     let divIDWithCounterNumber = document.querySelector('#counter');
//     divIDWithCounterNumber.innerHTML = count -=1;
// }

// function takeAndShow(){
//     let getInputID = document.querySelector('#input-value-ID');
//     let getInputText = getInputID.value;
//     let getShowDivID = document.querySelector('#show-here');
//     getShowDivID.innerText = getInputText;
// }

function addApple (){
    let appleBtnID = document.querySelector('#apple-id');
    let appleBtnText = appleBtnID.innerText;
   
    let newID = document.createElement('div');
    newID.innerText = appleBtnText;
    
    let cartID = document.getElementById('cart');
    cartID.appendChild(newID);
}
function addTomato (){
    let tomatoBtnID = document.querySelector('#tomato-id');
    let tomatoBtnText = tomatoBtnID.innerText;
   
    let newID = document.createElement('div');
    newID.innerText = tomatoBtnText;
    
    let cartID = document.getElementById('cart');
    cartID.appendChild(newID);
}
function addEggs (){
    let eggsBtnID = document.querySelector('#eggs-id');
    let eggsBtnText = eggsBtnID.innerText;
   
    let newID = document.createElement('div');
    newID.innerText = eggsBtnText;
    
    let cartID = document.getElementById('cart');
    cartID.appendChild(newID);
}
function clearSelection (){
    document.getElementById('cart').innerHTML = '';
}




