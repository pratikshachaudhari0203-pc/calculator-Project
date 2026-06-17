const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        
        if(button.value==="C") {
            display.value="";
        }
        else if(button.value==="⌫") {
            display.value=display.value.slice(0,-1);
        }
        else if(button.value==="=") {
            display.value=eval(display.value)
        }
        else {
            display.value += button.value;
        }
    });
});