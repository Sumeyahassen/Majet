document.getElementById("login").addEventListener("click", function(){
    window.location.href="loginform.html";
})
document.getElementById("signup").addEventListener("click", function(){
    window.location.href="signupform.html";
})

const buttons = document.querySelectorAll(".container .grains .cart");
buttons.forEach(button=>{
    button.addEventListener("click", function(){
        const par = button.parentElement;
        const parent = this.closest('.grains');        
        button.remove();
        const quantitiy = document.createElement('label');
        quantitiy.textContent = "Enter amount: ";
        const input = document.createElement('input');
        input.value = '1';
        input.min = '1';
        input.type = 'number';
        par.appendChild(quantitiy);
        par.appendChild(input);
        const save = document.createElement('button');
        save.textContent = "Add";
        const cancel = document.createElement('button');
        cancel.textContent = 'Cancel';
        par.appendChild(save);
        par.appendChild(cancel);
        save.addEventListener("click", function(){
            if(input.value>=1){
                alert('You have added '+input.value+' kg '+parent.id+' to your cart');
            }
            else{
                alert('Please enter a valid amount greater than or equal to 1!')
            }
        })
        cancel.addEventListener('click', function(){
            input.value = '';
        })
    })
})