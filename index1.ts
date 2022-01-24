
// assigning types

// let age: number = 100
// let firstName: string = 'Emilia'
// let busy: boolean = true

const button = document.querySelector(".button")  as HTMLInputElement;
const firstInput = document.querySelector("#first-input") as HTMLInputElement;
const secondInput = document.querySelector("#second-input") as HTMLInputElement;
 const result = document.querySelector(".result")  as HTMLInputElement;


function addNumber(a: number, b: number) {

    result.innerHTML = ( a + b).toString();
   
}



button.addEventListener("click", () =>
  addNumber(parseInt(firstInput.value), parseInt(secondInput.value))
);

