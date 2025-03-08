let input = document.querySelector("input");
let btn = document.querySelectorAll("button");
let operator = document.querySelectorAll(".operator");

let string = "";

let arr = Array.from(btn);
arr.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText == "=") {
            string = eval(string);
            input.value = string;
        } else if (buttonText == "Ac") {
            string = "";
            input.value = string;
        } else if (buttonText == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (operator.length > 0 && Array.from(operator).includes(e.target)) {
            // Check if the button is an operator
            if (string.length > 0) {
                string += buttonText;
                input.value = string;
            }
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});