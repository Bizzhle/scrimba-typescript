"use strict";
// assigning types
// let age: number = 100
// let firstName: string = 'Emilia'
// let busy: boolean = true
const button = document.querySelector(".button");
const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");
const result = document.querySelector(".result");
function addNumber(a, b) {
    result.innerHTML = (a + b).toString();
}
button.addEventListener("click", () => addNumber(parseInt(firstInput.value), parseInt(secondInput.value)));
