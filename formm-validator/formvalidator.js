const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const alert_ = document.getElementsByClassName("alert");


form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("asd");
    
    if(username.value === ""){
        username.className= 'form-control error';
        alert_.className='alert';
        alert_.innerText='Lütfen Doğru e posta giriniz';
    }else{
        username.className= 'form-control okey';
    }
    
    if(email.value === ""){
        email.className= 'form-control error';
        alert_.className='alert';
        alert_.innerText='Lütfen Doğru e posta giriniz';
    }else{
        email.className= 'form-control okey';
    }
    
    if(password.value === ""){
        password.className= 'form-control error';
        alert_.className='alert';
        alert_.innerText='Lütfen Doğru e posta giriniz';
    }else{
        password.className= 'form-control okey';
        
    }
    
    if(repassword.value === ""){
        repassword.className= 'form-control error';
        alert_.className='alert';
        alert_.innerText='Lütfen Doğru e posta giriniz';
    }else{
        repassword.className= 'form-control okey';
        
    }
})