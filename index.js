/*__________________Project Plan______________________ */
/*
1. collect the user's input.
2. store the user input.
3. listen to the add item button.
4. 
if the user clicks on the button>>>
-----case one>>> input is not empty
>>>> display the item to the list item section
    >>>>-a] add the item
    >>>>-b] add a list item number
    >>>>-c] add date and time
-----case two>>> input is empty
    >>>> display an error message
5. add a button to allow the user to delete or remove the item from the list
*/
// document.querySelector()
// let list=document.querySelector(".list__cont");
// let button=document.getElementById("add__butt");
// let listItemCont=document.createElement("ul");
// listItemCont.setAttribute("class", "listUl")
// console.log(button)
// button.addEventListener("click", display)

// setTimeout(delay,5000)
// let inputList=[];
// function display(){
//     let userIn=document.querySelector("#todo").value;
//     if(userIn == ""){
//         // let err=document.querySelector("#error");
//         // err.textContent="Sorry, you can not add an empty item!"
//     }else{
//         if(inputList.includes(userIn)){
//             // let err=document.querySelector("#error");
//             // err.textContent="Sorry this item is already exist, you have to add a new item!"
//         }else{
//             inputList.push(userIn)
//             console.log(inputList)
//             // for(input of inputList){
//             //     let listItem=document.createElement("li")
//             //     listItem.setAttribute("class", "list__item")
//             //     let allItems=document.getElementsByClassName("list__item")
//             //     console.log(allItems)
//             //     listItem.textContent=input;
//             //     listItemCont.appendChild(listItem);
//             //     list.appendChild(listItemCont)
//             // }
//             // listItemCont.innerHTML="";
//             // inputList.forEach(function(item, i){
//             //     let listItem=document.createElement("li")
//             //     listItem.setAttribute("class", "list__item")
//             //     let allItems=document.getElementsByClassName("list__item")
//             //     console.log(allItems)
//             //     listItem.innerHTML=`
//             //     <span id="one">${i+1} 
//             //     |</span><span id="two">${getDate()}</span>
//             //     |<span id="three">${time()}</span> 
//             //     |<span id="four">${item}</span>
//             //     |<button id="rmv" onclick="remove()">Remove</button>
//             //     `;
//             //     listItemCont.appendChild(listItem);
//             //     list.appendChild(listItemCont);
//                 // remove();
//             })
//         }
//     }
// }


function getDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //janvier = 0
  let yyyy = today.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
  //return dd + '/' + mm + '/' + yyyy; // change form if you need
}

// create the time function
function time(){
    let today= new Date();
    let hours=today.getHours();
    let min=today.getMinutes();
    let sec=today.getSeconds();
    let currentTime=`${hours}:${min}:${sec}`;
    return currentTime;
}

// REMOVE THE TODO LIST ITEM FUNCTION

// function remove(){
//     let rmvButt=document.getElementById("rmv");
//     console.log(rmvButt);
//     rmvButt.addEventListener("click", function(e){
//         let toRmoveInput=document.getElementById("four").textContent;
//         console.log(toRmoveInput)
//         let indx=inputList.indexOf(toRmoveInput)
//         inputList.splice(indx,1)
//         console.log(inputList)
//         e.target.parentElement.remove();
//     })
// }

//CREATE A COLLECT USER INPUT FUNCTION
function collectUserInput(){
    let userIn=document.querySelector("#todo").value;
    return userIn
}

//create a function to trigger the user input collection
function addItem(){
    let button=document.getElementById("add__butt");
    button.addEventListener("click", function(){
        // call a function to store the user input
        checkItem(collectUserInput())
        console.log(inputArray)
        
    })
}
let inputArray=[];
let list=document.querySelector(".list__cont");
let listItemCont=document.createElement("ul");
// create a function to store the user input in an array
function pushToArray(input){
    inputArray.push(input)
}

// CHECK IF THE ITEM IS NOT SUBMITTED BEFORE
function checkItem(userInp){
    if(inputArray.includes(userInp)){
        console.log("Repeated!!!!!");
        errorRepeated()
    }else if(userInp ==""){
        errorEmpty()
    }
    else {
        clearErr()
        pushToArray(userInp)
        generateUi()
    }
}

// create an error message for repeated items
function errorRepeated(){
    let err=document.querySelector("#error");
    err.textContent="Sorry this item is already exist, you have to add a new item!"
}

// create an error message for empty input
function errorEmpty(){
    let err=document.querySelector("#error");
    err.textContent="Sorry, you can not add an empty item!"
}

// create a function to generate the UI
function generateUi(){

    listItemCont.setAttribute("class", "listUl");
    listItemCont.innerHTML="";
    inputArray.forEach(function(item, i){
        let listItem=document.createElement("li");
        listItem.setAttribute("class", "list__item");
        listItem.innerHTML=
        `
        <div id="one">${i+1} </div>
        <div id="two">${getDate()}</div>
        <div id="three">${time()}</div>
        <div id="four">${item}</div>
        <button class="rmv">Remove</button>
        `
        listItemCont.appendChild(listItem);
        list.appendChild(listItemCont);
        removeItem()
    })
}

// remove the item on a button click
function removeItem(){
    let butts=document.querySelectorAll(".rmv");
    for(butt of butts){
        butt.addEventListener("click", function(event){ 
            console.log(event.target.parentElement)
            event.target.parentElement.style.display="none"
            updateArray()
        })
    }
}

// UPDATE THE inputArray 
function updateArray(){
    let toRmoveInput=document.getElementById("four").textContent;
    console.log(toRmoveInput)
    let indx=inputArray.indexOf(toRmoveInput)
    inputArray.splice(indx,1)
}

// create a functin to remove the error message
function clearErr(){
    let err=document.querySelector("#error");
    err.textContent=""
}

window.addEventListener("DOMContentLoaded", addItem)