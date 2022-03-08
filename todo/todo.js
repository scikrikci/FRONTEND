const form = document.querySelector("form");
const input = document.querySelector("#input");
const todoContainer = document.querySelector(".todo_container");
const deletebtn = document.querySelector(".todo-delete");

let todos = [];

eventListeners();
function eventListeners() {
    form.addEventListener("submit", addItem);
    // deletebtn.addEventListener("dblclick" , deleteBtnFunct);
}

function addItem(e) {
    e.preventDefault();
    if (input.value != "") {
        todos.push(todoContainer);
        console.log(todos);
        
        itemshow();

        input.value = "";

        // const inputArray = [];
        
        // inputArray.push(todoDiv);

        // console.log(inputArray);

    }
    else{
        alert("ERROR");
    }
}

function itemshow(e){
    

    const todoTextİnput = input.value;
    

    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
// ____________________________________________________

    const todoLeftDiv = document.createElement("div");
    todoLeftDiv.classList.add("todo-left");
    
    const todoInput = document.createElement("input");
    todoInput.classList.add("todo-cb");
    todoInput.type="checkbox";
    // todoInput.checked = todo.isCompleted;

    const todoText = document.createElement("span");
    todoText.classList.add("todo-text");
    todoText.textContent= todoTextİnput;

// ____________________________________________________

    const todoRightDiv = document.createElement("div");
    todoRightDiv.classList.add("todo-right");
    
    const todoDelete = document.createElement("button");
    todoDelete.classList.add("todo-delete");
    todoDelete.textContent="Delete";

// ____________________________________________________

    todoLeftDiv.appendChild(todoInput);
    todoLeftDiv.appendChild(todoText);

    todoRightDiv.appendChild(todoDelete);

    todoDiv.appendChild(todoLeftDiv);
    todoDiv.appendChild(todoRightDiv);

    todoContainer.appendChild(todoDiv);

    input.value = "";

    todoDelete.addEventListener("dblclick", function complete() { 
        todoContainer.removeChild(todoDiv);
        }
    );

};





// // İndex arama li
// const allLi = document.querySelectorAll("li"),
//         cnt = document.querySelector(".container");

// allLi.forEach((li , index) => {
//     console.log(index);
//     li.addEventListener("click", function(e){
//         e.preventDefault();
//         console.log("list " + index);
//         li.classList.remove("active");
//         li.classList.add("active")
//     });
// });












// const form = document.querySelector("form");
// const input = document.querySelector("#input");
// const todoContainer = document.querySelector(".todo_container");



// form.addEventListener("submit", addItem);


// function addItem(e){
//     e.preventDefault();
    
//     if(input.value != ""){
//         console.log("Boş değer değil");

//         const todoTextİnput = input.value;
//         // const todo = {
//         //     text: todoTextİnput,
//         // };


//         const todoDiv = document.createElement("div");
//         todoDiv.classList.add("todo");
        
//     // ____________________________________________________
    
//         const todoLeftDiv = document.createElement("div");
//         todoLeftDiv.classList.add("todo-left");
        
//         const todoInput = document.createElement("input");
//         todoInput.classList.add("todo-cb");
//         todoInput.type="checkbox";
//         // todoInput.checked = todo.isCompleted;
    
//         const todoText = document.createElement("span");
//         todoText.classList.add("todo-text");
//         todoText.textContent= todoTextİnput;
    
//     // ____________________________________________________
    
//         const todoRightDiv = document.createElement("div");
//         todoRightDiv.classList.add("todo-right");
        
//         const todoDelete = document.createElement("button");
//         todoDelete.classList.add("todo-delete");
//         todoDelete.textContent="Delete";
    
//         const todoEdit = document.createElement("button");
//         todoEdit.classList.add("todo-edit");
//         todoEdit.textContent="Edit";
    
//     // ____________________________________________________
    
//         todoLeftDiv.appendChild(todoInput);
//         todoLeftDiv.appendChild(todoText);
    
//         todoRightDiv.appendChild(todoDelete);
//         todoRightDiv.appendChild(todoEdit);
    
//         todoDiv.appendChild(todoLeftDiv);
//         todoDiv.appendChild(todoRightDiv);
    
//         todoContainer.appendChild(todoDiv);

//         input.value = "";
//     }
//     else{
//         console.log("Boş değer");
//     }
// };










