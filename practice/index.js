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

// function addApple (){
//     let appleBtnID = document.querySelector('#apple-id');
//     let appleBtnText = appleBtnID.innerText;
   
//     let newID = document.createElement('div');
//     newID.innerText = appleBtnText;
    
//     let cartID = document.getElementById('cart');
//     cartID.appendChild(newID);
// }
// function addTomato (){
//     let tomatoBtnID = document.querySelector('#tomato-id');
//     let tomatoBtnText = tomatoBtnID.innerText;
   
//     let newID = document.createElement('div');
//     newID.innerText = tomatoBtnText;
    
//     let cartID = document.getElementById('cart');
//     cartID.appendChild(newID);
// }
// function addEggs (){
//     const eggsBtnID = document.querySelector('#eggs-id');
//     const eggsBtnText = eggsBtnID.innerText;
   
//     const newID = document.createElement('div');
//     newID.innerText = eggsBtnText;
    
//     const cartID = document.getElementById('cart');
//     cartID.appendChild(newID);
// }
// function clearSelection (){
//     document.getElementById('cart').innerHTML = '';
// }

// function toCM(){
//     const inputFieldID = document.getElementById('cm-to-inch-field');
//     const inputFieldValue = inputFieldID.value;
//     inputFieldValue *= 2.54;
//     console.log(inputFieldValue);
//     document.getElementById('result').innerHTML = '';
//     renderResult(inputFieldValue);
// }
// function toInches(){
//     const inputFieldID = document.getElementById('cm-to-inch-field');
//     const inputFieldValue = inputFieldID.value;
//     inputFieldValue /= 2.54;
//     console.log(inputFieldValue);
//     document.getElementById('result').innerHTML = '';
//     renderResult(inputFieldValue);
// }

// function renderResult(value){
//     const resultID = document.getElementById('result');
//     const newResultID = document.createElement('div');
//     newResultID.innerText = value;
//     resultID.appendChild(newResultID);
// }

let cartItems = [];

function storeCartItems(){
    const productFieldID = document.getElementById('product-field');
    const priceFieldID = document.getElementById('price-field');
    const qtyFieldID = document.getElementById('quantity-field');

    const id = new Date().getTime();

    const productFieldValue = productFieldID.value;
    const priceFieldValue = priceFieldID.value;
    const qtyFieldValue = qtyFieldID.value;

    cartItems.push(
        {
            Product:    productFieldValue,
            Price:      priceFieldValue,
            Quantity:   qtyFieldValue,
            SN: id
        }
    )
    console.log(cartItems);

    const newSpan = document.createElement('em');
    const newBtn = document.createElement('button');
    const nextNewBtn = document.createElement('button');

    newSpan.innerText = "No items cart is: " + cartItems.length+ "    " ;
    newBtn.innerText = "Generate Receipts";   
    nextNewBtn.innerText = "Clear Items For New Purchases";
 
    newBtn.style = 'margin-left: 15px';
    nextNewBtn.style = 'margin-left: 15px';
    
    newBtn.onclick = renderCartReceipts;
    nextNewBtn.onclick = clearAll;

    const cartQtyID = document.getElementById('cart-qty');
    document.getElementById('cart-qty').innerHTML = '';
    cartQtyID.appendChild(newSpan);
    cartQtyID.appendChild(newBtn);
    cartQtyID.appendChild(nextNewBtn);
}

function renderCartReceipts(){
    let totalCost = 0;
    document.getElementById('receipt').innerHTML = '';

    cartItems.forEach((cartItemsToReceipt) => {
        const receiptElement = document.createElement('div');
        productForEachCart = cartItemsToReceipt.Price * cartItemsToReceipt.Quantity;
        receiptElement.innerText ="Product's S/N: " +cartItemsToReceipt.SN+":  "+cartItemsToReceipt.Product+ " =>  $" +cartItemsToReceipt.Price+ "  *  " +cartItemsToReceipt.Quantity+ "  =  $"+productForEachCart;
        totalCost +=productForEachCart;

        //adding delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.style = 'margin-left:30px';
        deleteBtn.id = cartItemsToReceipt.SN;
        deleteBtn.onclick = deleteCartItems;
        receiptElement.appendChild(deleteBtn);


        const showReceiptInfoID = document.getElementById('receipt');
        showReceiptInfoID.appendChild(receiptElement);
    });
    cartTotal(totalCost);
    console.log("Total cost: "+totalCost);
}

function cartTotal(totalCost){
    const totalCostID = document.getElementById('total-cost');
    document.getElementById('total-cost').innerHTML = "Please wait, as we process your request...";
    setTimeout(function(){
        totalCostID.innerText = "Total cost of "+cartItems.length+" items purchased is: $"+totalCost;
    }, 800);  
}


function clearAll() {
    document.getElementById('cart-qty').innerHTML = '<em>No items yet...</em>';
    document.getElementById('receipt').innerHTML = '';
    document.getElementById('total-cost').innerText = 'Total Cost: N/A';
    productFieldID = document.getElementById('product-field');
    priceFieldID = document.getElementById('price-field');
    qtyFieldID = document.getElementById('quantity-field');
    productFieldID.value = '';
    priceFieldID.value = '';
    qtyFieldID.value = '';
    cartItems = [];
}

function deleteCartItems(e){
    const delBtnTarget = e.target;
    const delBtnID = delBtnTarget.id;
    console.log(delBtnID);

}


