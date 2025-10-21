document.getElementById("signup").addEventListener("click", function(){
    window.location.href="signupform.html";
})
document.getElementById("login").addEventListener("click", function(){
    window.location.href="loginform.html";
})
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const product = document.querySelector("#product");
const contact = document.querySelector("#contact");
home.addEventListener("click", function(){
    document.getElementById("homeSection").scrollIntoView({ behavior: "smooth" });
})
    about.addEventListener("click", function(){
        document.getElementById("aboutSection").scrollIntoView({ behavior: "smooth" });
})
product.addEventListener("click", function(){
    document.getElementById("productSection").scrollIntoView({ behavior: "smooth" });
})
contact.addEventListener("click", function(){
    document.getElementById("contactSection").scrollIntoView({ behavior: "smooth" });
})