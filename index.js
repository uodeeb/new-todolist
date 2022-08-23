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
let list=document.querySelector(".list__cont");
let button=document.getElementById("add__butt");
let listItemCont=document.createElement("ul");
listItemCont.setAttribute("class", "listUl")
console.log(button)
button.addEventListener("click", display)

// setTimeout(delay,5000)
let inputList=[];
function display(){
    let userIn=document.querySelector("#todo").value;
    if(userIn == ""){
        let err=document.querySelector("#error");
        err.textContent="Sorry, you can not add an empty item!"
    }else{
        if(inputList.includes(userIn)){
            let err=document.querySelector("#error");
            err.textContent="Sorry this item is already exist, you have to add a new item!"
        }else{
            inputList.push(userIn)
            console.log(inputList)
            // for(input of inputList){
            //     let listItem=document.createElement("li")
            //     listItem.setAttribute("class", "list__item")
            //     let allItems=document.getElementsByClassName("list__item")
            //     console.log(allItems)
            //     listItem.textContent=input;
            //     listItemCont.appendChild(listItem);
            //     list.appendChild(listItemCont)
            // }
            inputList.forEach(function(item, i){
                let listItem=document.createElement("li")
                listItem.setAttribute("class", "list__item")
                let allItems=document.getElementsByClassName("list__item")
                console.log(allItems)
                listItem.innerHTML=`<span id="one">${i+1} |</span><span id="two">${getDate()}</span> |<span id="three">${time()}</span> |<span id="four">${item}</span>`;
                listItemCont.appendChild(listItem);
                list.appendChild(listItemCont)
            })
        }
    }
}


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
