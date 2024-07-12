let input = document.getElementById("email");
let password = document.getElementById("password");

let logIn = document.getElementById('btn01');




logIn.addEventListener('click',()=>{
    if(!input.value || !password.value){
        alert("enter your input feild")
    }
    else{
        window.location.href ="HTML/dashboard.html";
        
    }
    
 })
        