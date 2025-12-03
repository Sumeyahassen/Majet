document.getElementById("signup").addEventListener("click", function(){
    window.location.href="signupform.html";
})
document.getElementById("login").addEventListener("click", function(){
    window.location.href="loginform.html";
})
const conatiners = document.querySelectorAll(".container .vegetable .cart");
const prices = document.querySelectorAll(".container .ve .price")
conatiners.forEach(button=>{
    button.addEventListener("click", function(){
        const par = button.parentElement;
        const parent = this.closest('.vegetable');
        button.remove();
        const pricepar = par.querySelector(".price");
        const price = parseFloat(pricepar.dataset.price);
        const quantitiy = document.createElement("label");
        quantitiy.textContent = "Enter quantity:";
        const input = document.createElement('input');
        input.min = '1';
        input.value = '1';
        input.type = 'number';
        par.appendChild(quantitiy);
        par.appendChild(input);
        const save = document.createElement('button');
        save.textContent = 'Add';
        const cancel = document.createElement('button');
        cancel.textContent = 'Cancel';
        par.appendChild(save);
        par.appendChild(cancel);
        save.addEventListener('click', function(){
            if(input.value>=1){
                const value = parseFloat(input.value);
                const Total = value * price;
                alert("You have added "+value+" kg of "+parent.id+" to your cart and it's total price is "+Total+".");
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