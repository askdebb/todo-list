const todos = [{
        title:"Get Pankcake",
        dueDate:"2024-03-12",
        id: 'id1'
    }, 
    {
        title: "Sell Sobolo",
        dueDate: "2024-01-02",
        id:'id2'
    },
    {
        title: "Credit Koosey",
        dueDate: "2024-12-23",
        id:'id3'
    } ]

render();

function addToDo (){
    const inputID = document.getElementById('todo-item');
    const inputText = inputID.value;

    const dateInputID = document.getElementById('todo-date')
    const dateInputInfo = dateInputID.value;

    const id = new Date().getTime();
    todos.push({
        title: inputText,
        dueDate: dateInputInfo,
        id: id
    });
    console.log(todos);

    render();
}

function render(){
    // reset the display list after each array update
    document.getElementById('todo-list').innerHTML = '';

todos.forEach(todoObjectItems => {
    const element = document.createElement('div');
    const deleteBtn = document.createElement('button');

    deleteBtn.innerText = 'Delete';
    deleteBtn.style = 'margin-left: 30px';
    deleteBtn.id = todoObjectItems.id;
    deleteBtn.onclick = deleteTodo;

    element.innerText = todoObjectItems.title + ' '+todoObjectItems.dueDate;
    element.appendChild(deleteBtn);

    let todoListID = document.getElementById('todo-list')
    todoListID.appendChild(element);  
});
}

function deleteTodo (e){
    const delBtn = e.target;
    const delBtnID = delBtn.id;
    console.log(delBtnID);
}
