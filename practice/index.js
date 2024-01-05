// console.log("Christopher Wiafe Debrah");

// let todo1 = 3334;
// let todo2 = "use commercial car";
// let todo3 = "swap phone";

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

setTimeout(changeTitleName,5000);
function changeTitleName (){

    document.querySelector("head title").innerHTML = "Chris Todo App";
    console.log("worked!");
    setTimeout(function () {document.querySelector("head title").innerHTML = "JS Practice"; console.log("changed")}, 10000);
}




