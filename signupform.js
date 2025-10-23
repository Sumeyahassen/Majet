const login = document.getElementById('backToLogin');
login.addEventListener('click', function(){
    window.location.href = 'loginform.html';
})
const hasupper = /[A-Z]/;
const haslower = /[a-z]/;
const hasnumber = /[0-9]/;
const hassymbol = /[^A-Za-z0-9]/;
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#email")
const btn = document.querySelector("#submit");
btn.addEventListener('click',function(){
    event.preventDefault();
if(username.value.trim() ===''){
    alert("Please enter username!")
}
else if (username.value.trim().length < 3){
    alert("Username should have a length greater than 3!");
} 
else if(email.value.trim() === ''){
    alert("Please enter email!");
}
else if(!email.value.includes("@")){
    alert("Email must have @!")
}
else if(!email.value.includes('.')){
    alert("Please enter valid email, email must include '.'!");
}
else if(password.value.trim() === ''){
    alert("Plaese enter password!");
}
else if(password.value.length < 6){
    alert("password must have at least 6 characters!");
}
else if(!hasupper.test(password.value)){
    alert("password must include at least one capital letter!");
}
else if(!haslower.test(password.value)){
    alert("password must include at least one small letter!");
}
else if(!hasnumber.test(password.value)){
    alert("password must include at list one digit!");
}
else if(!hassymbol.test(password.value)){
    alert("password must include at least one symbol!");
}
else{
    window.location.href = "majet.html";
}
})