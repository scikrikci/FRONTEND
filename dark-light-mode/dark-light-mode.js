const   body = document.querySelector("body") ,
        nav = document.querySelector("nav"),
        modeToggle = document.querySelector(".light"),
        image = document.querySelector(".image");


modeToggle.addEventListener("click", () =>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("bodydark");
    image.classList.toggle("imagerotate");
    nav.classList.toggle("navbarcolor");
});
