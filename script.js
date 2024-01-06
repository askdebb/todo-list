const todos = [{
        title:"Get Pankcake",
        dueDate:"2024-03-12"
    }, 
    {
        title: "Sell Sobolo",
        dueDate: "2024-01-02"
    },
    {
        title: "Credit Koosey",
        dueDate: "2024-12-23"
    } ]

render();

function addToDo (){
    const inputID = document.getElementById('todo-item');
    const inputText = inputID.value;

    const dateInputID = document.getElementById('todo-date')
    const dateInputInfo = dateInputID.value;
    todos.push({
        title: inputText,
        dueDate: dateInputInfo
    });
    console.log(todos);

    render();
}

function render(){
    // reset the display list after each array update
    document.getElementById('todo-list').innerHTML = '';

todos.forEach(todoObjectItems => {
    const element = document.createElement('div');
    element.innerText = todoObjectItems.title + ' '+todoObjectItems.dueDate;
    let todoListID = document.getElementById('todo-list')
    todoListID.appendChild(element);  
});
}
