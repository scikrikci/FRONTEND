 //box and ul select
let button = document.querySelector("#btn");
let item = document.querySelector("#box");
let list_item = document.querySelector("#task-list");
let alldeletebtn = document.querySelector("#alldeletebutton");

let li_lis = [];

eventListeners();
function eventListeners() {
    button.addEventListener("click",addItem);
    list_item.addEventListener("click",delItem);
    alldeletebtn.addEventListener("dblclick",allDelete);
}

function addItem(e) {
    e.preventDefault();

    //if it is not empty - add item
    if (item.value != "") {
        //create li
        let make_li = document.createElement("li");
        make_li.className = ("list-box");
        
        //create h1
        let make_header = document.createElement("h1");
        make_header.appendChild(document.createTextNode(item.value));

        //create delete button
        let make_dlt_btn = document.createElement("div");
        make_dlt_btn.className = ("dlt-btn-box");

        //adding h1 yo li
        make_li.appendChild(make_header);
        //adding dlt_btn to li
        make_li.appendChild(make_dlt_btn);
        //adding li to ul
        list_item.appendChild(make_li);
        
        item.value=""
    }
    else{
        alert("error");
    }
    
}

function delItem(e) {
    e.preventDefault();
    if (e.target.className === "dlt-btn-box" ){
        e.target.parentElement.remove();
    }
    
}

function allDelete(e) {
    e.preventDefault();
    list_item.innerHTML="";


}