document.getElementById("signup").addEventListener("click", function(){
    window.location.href="signupform.html";
})
document.getElementById("login").addEventListener("click", function(){
    window.location.href="loginform.html";
})
const conatiners = document.querySelectorAll(".container .vegetable .cart");
conatiners.forEach(button=>{
    button.addEventListener("click", function(){
        const par = button.parentElement;
        const parent = this.closest('.vegetable');
        button.remove();
        const quantitiy = document.createElement("label");
        quantitiy.textContent = "Enter quantity";
        const input = document.createElement('input');
        input.min = '1';
        input.value = '1';
        input.type = 'number';
        quantitiy.appendChild(input);
        par.insertAdjacentElement('beforeend',quantitiy);
    
        const save = document.createElement('button');
        save.textContent = 'Add';
        const cancel = document.createElement('button');
        cancel.textContent = 'Cancel';
        par.appendChild(save);
        par.appendChild(cancel);
        save.addEventListener('click', function(){
            if(input.value>=1){
                alert("You have added "+input.value+" kg "+parent.id+" to your cart");
            }
            else{
                alert("please enter a valid amount greater than or equal to 1!")
            }
        })
        cancel.addEventListener('click', function(){
            input.value = '';
        })
    })
})