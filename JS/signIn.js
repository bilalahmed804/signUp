let userName = document.querySelector("#userName");

let email = document.querySelector("#email");

let password1 = document.querySelector("#password");

let sign = document.querySelector(".submit");

let userId = Date.now().toString(26);

sign.addEventListener("click",()=>{
    if(!userName.value || !email.value || !password1.value){
        alert("enter your input feild")
    }
    else{
        let userObject = {
            Name:userName.value,
            Email:email.value,
            Password:password1.value,
        }
        
        
        let userValue = JSON.stringify(userObject);
        localStorage.setItem(`${userId}`,userValue)
        
        userName.value = "";
        email.value = "";
        password1.value = "";

        window.location.href ="../index.html"; 
        localStorage.setItem("check",true)
    }
    })

console.log(userId);