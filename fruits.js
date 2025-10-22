document.getElementById("signup").addEventListener("click", function(){
    window.location.href="signupform.html";
})
document.getElementById("login").addEventListener("click", function(){
    window.location.href="loginform.html";
})
const containers = document.querySelectorAll('.container .fruit .cart');
containers.forEach(button=>{
    button.addEventListener("click", function(){
        const par = button.parentElement;
        button.remove(); 
        const pricePar = par.querySelector(".price");
        const price = parseFloat(pricePar.dataset.price);
        const quantity = document.createElement('label');
        quantity.textContent = "Enter quantity:";
        const input = document.createElement('input');
        input.type = "number";
        input.value = "1";
        input.min = "1";
        quantity.appendChild(input);
        par.insertAdjacentElement('beforeend',quantity);
        const save = document.createElement('button');
        save.textContent = "Add";
        par.appendChild(save);
        const cancel = document.createElement('button');
        cancel.textContent = "Cancel";
        par.appendChild(cancel);
        save.addEventListener('click', function(){
            const pare = this.closest(".fruit")
            if(input.value >= 1){
                const value = parseFloat(input.value);
                const Total = value * price;
                alert("you have added "+input.value+" kg "+pare.id+" to your cart and it's total price is "+Total+".");
            }
            else{
                alert("please enter a valid amount grater than or equal to 1!")
            }
        })
        cancel.addEventListener('click', function(){
            input.value = "";
        })
    })
    }
)