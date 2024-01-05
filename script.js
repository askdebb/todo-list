todos = ["Get Pankcake", "Sell Sobolo","Credit Koosey" ]

todos.forEach(todoHeading => {
    let element = document.createElement('div');
    element.innerText = todoHeading;
    document.body.appendChild(element);  
});
