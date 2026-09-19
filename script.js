const display = document.getElementById("display");

function appendValue(value) {
    // display.value += value;
    if (value === "%") {
        display.value = Number(display.value) /100;
    }else{ 
        display.value += value;
    }
}
function clearDisplay() {
    display.value = "";
}
function deleteLast()  {
    display.value = display.value.slice(0, -1);
}
function calculate() {
     try {
        display.value = eval(display.value);
     }catch {
        display.value = "Error";
     }
}

//? Keyboard support function

document.addEventListener("keydown", function (event){

    if(event.key >= "0" && event.key <= "9") {
        appendValue(event.key);
    }

    else if (["+", "-", "*", "/", ".", "%"] .includes(event.key)) {
        appendValue(event.key);
    }
    else if (event.key === "Enter") {
        calculate();
    }
    else if (event.key === "Backspace") {
        deleteLast();
    }
    else if (event.key === "Escape") {
        clearDisplay();
    }
});