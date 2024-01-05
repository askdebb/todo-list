// console.log("Christopher Wiafe Debrah");

// let todo1 = 3334;
// let todo2 = "use commercial car";
// let todo3 = "swap phone";

// console.log("It is a type of: "+typeof(todo1));
let date = new Date();
let getMonth = date.getMonth();
let month;

let dayOfMonth = date.getDay();
let year = date.getFullYear();


switch (getMonth) {
    case 0:
        month = "January";        
        break;

    default:
        console.log("unknown month");
        break;
}
console.log("Today's date is: "+month+ " "+ dayOfMonth + ", "+year);
