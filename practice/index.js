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

let todo1 = 3334;
let todo2 = "Use Commercial Car";
let todo3 = "Swap Phone";

function addToDo(todoTitle){
    let divElement = document.createElement('div');
    divElement.innerText = todoTitle;
    document.body.appendChild(divElement);
}

let btnElement = document.createElement('button');
btnElement.innerText = "Click Me";
document.body.appendChild(btnElement);


addToDo(todo1);
addToDo(todo2);
addToDo(todo3);


function greeting (firstName){
    console.log("Hello "+firstName);
}
greeting('nana annaa');

function toUpper (str){
console.log(str.toUpperCase());
}
toUpper("Chris");

function inchesToCentimeters(inches){
    console.log(" The length of "+inches+" inches is "+inches * 2.54 + " cm.");
}
inchesToCentimeters(2);







