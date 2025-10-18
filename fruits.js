document.getElementById("signup").addEventListener("click", function(){
    window.location.href="signupform.html";
})
document.getElementById("login").addEventListener("click", function(){
    window.location.href="loginform.html";
})
/*const fruits = document.getElementsByClassName('fruit');
const carts = document.getElementsByClassName("cart");
Array.from(carts).forEach(cart=>{
    Array.from(fruits).forEach(fruit=>{
cart.addEventListener("click", function(){
    const quantity = document.createElement('label');
    quantity.textContent = "Enter quantity:";
    const input = document.createElement('input');
    input.type = "number";
    input.value = "1";
    input.min = "1";
    quantity.appendChild(input);
    cart.insertAdjacentElement('beforebegin',quantity);
    cart.remove();
    const save = document.createElement('button');
    save.textContent = "Add";
    fruit.append(save);
    })
    createSavebutton();
    /*quantitiy.textContent = "Enter quantity:";
    const input = document.createElement("input");
    input.type = 'number';
    input.value = "1";
    input.min = "1";
    quantitiy.appendChild(input);
    price.appendChild(quantity);*/
/*})
})*/
const containers = document.querySelectorAll('.container .fruit .cart');
containers.forEach(button=>{
    button.addEventListener("click", function(){
        const par = button.parentElement;
        button.remove(); 
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
                alert("you have added "+input.value+" kg "+pare.id+" to your cart");
            }
            else{
                alert("please enter a valid amount grater than or equal to 1!")
            }
        })
        cancel.addEventListener('click', function(){
            input.value = "";
        })
    /*const Add = document.createElement('button');
    Add.textContent = 'Add';
    document.getElementsByClassName('cart').remove();*/
    })
    }
)