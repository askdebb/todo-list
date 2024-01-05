const todos = ["Get Pankcake", "Sell Sobolo","Credit Koosey" ]

render();

function addToDo (){
    const inputID = document.getElementById('todo-item');
    const inputText = inputID.value;
    todos.push(inputText);
    console.log(todos);

    render();
}

function render(){
    // reset the display list after each array update
    document.getElementById('todo-list').innerHTML = '';

todos.forEach(todoHeading => {
    const element = document.createElement('div');
    element.innerText = todoHeading;
    let todoListID = document.getElementById('todo-list')
    todoListID.appendChild(element);  
});
}
