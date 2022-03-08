/*
const list =  {
    name:"Samet",
    na:"tasd"
}
for(let label in list){
    let value = list[label];
    console.log(label+"," +value);
}*/

const   nav = document.querySelector("nav"),
        body =document.querySelector("body"),
        main =document.querySelector(".main-container");
        modeToggle = document.querySelector(".darkmode");


modeToggle.addEventListener("click", () => {
    nav.classList.toggle("darkgroundcolor");
    main.classList.toggle("darkground");
    body.classList.toggle("allblur");
    modeToggle.classList.toggle("rotate");
});