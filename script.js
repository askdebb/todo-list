let todo1 = "Get Pankcake";
let todo2 = "Sell Sobolo";
let todo3 = "Credit Koosey";

function addToDo(todoHeading){
    let element = document.createElement('div');
    element.innerText = todoHeading;
    document.body.appendChild(element);
}

addToDo(todo1);
addToDo(todo2);
addToDo(todo3);