// This code runs on all pages
const body = document.body;

if (body.id === "welcome-page") {
    // Welcome Page code goes here
    const welcomePageLoginBtn = document.getElementById("welComePageLoginBtn");
    const signUpButton = document.getElementById("signUpButton");
    const guestBtn = document.getElementById("guestBtn");
    const welcomePageBtnParent = document.getElementById("welcomePageBtnParent");

    if (welcomePageBtnParent) {
        welcomePageBtnParent.addEventListener("click", (clickBtnId) => {
            if (clickBtnId.target.id === "welComePageLoginBtn") {
                window.location.href = "login-page.html";
            }
            if (clickBtnId.target.id === "signUpButton") {
                window.location.href = "sign-up-page.html";
            }
            if (clickBtnId.target.id === "guestBtn") {
                window.location.href = "guest-page.html";
            }
        });
    }

} else if (body.id === "login-page") { 
    // Login Page code goes here
    const loginPageLoginBtn = document.getElementById("loginPageLoginBtn");
    const passwordField = document.getElementById("passwordField");
    const emailField = document.getElementById("emailField");
    const passwordCheckIcon = document.getElementById("passwordCheckIcon");
    const loginForm = document.getElementById("login-form")
    if (passwordField && passwordCheckIcon) {
        passwordCheckIcon.addEventListener("click", () => {
            const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
            passwordField.setAttribute("type", type);
            
            if (type === "password") {
                passwordCheckIcon.classList.remove("ri-eye-fill");
                passwordCheckIcon.classList.add("ri-eye-off-fill");
            } else {
                passwordCheckIcon.classList.remove("ri-eye-off-fill");
                passwordCheckIcon.classList.add("ri-eye-fill");
            }
        });
    }
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // this will prevent the page from submission
        const emailFieldValue = emailField.value;
        const passwordFieldValue = passwordField.value;

        const loginCredential = {
            loginEmail: emailFieldValue,
            loginPassword: passwordFieldValue
        };
        console.log(loginCredential)
    })
}