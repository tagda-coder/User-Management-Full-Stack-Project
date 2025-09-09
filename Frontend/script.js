const loginBtn = document.getElementById("loginBtn");
const signUpButton = document.getElementById("signUpButton");
const guestBtn = document.getElementById("guestBtn");

const welcomePageBtnParent = document.getElementById("welcomePageBtnParent");


// page redirection to their source page
welcomePageBtnParent.addEventListener("click", (clickBtnId) => {
    if(clickBtnId.target.id == "loginBtn"){
        window.location.href = "login-page.html"
    }
    if(clickBtnId.target.id == "signUpButton"){
        window.location.href = "sign-up-page.html"
    }
    if(clickBtnId.target.id == "guestBtn"){
        window.location.href = "guest-page.html"
    }
    
})
