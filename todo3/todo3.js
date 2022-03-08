

let todosDizi = [];

function addItem(){
    const inputtest = document.getElementById("inputvalue").value;
    
    

    if(inputvalue.value != ""){
        console.log("dolu");

        todosDizi.push(inputtest);
        console.log(todosDizi);
        inputvalue.value = "";

        const todoChecbox = document.createElement("input");
        todoChecbox.classList.add("todo-cb");
        todoChecbox.type="checkbox";


        const ulContainer = document.getElementById("ulContainer");
        const li = document.createElement("li");
        li.textContent = inputtest;


        

        ulContainer.appendChild(todoChecbox);
        ulContainer.appendChild(li);

    }
    else{
        console.log("Değer Girilmedi");
    }

}

