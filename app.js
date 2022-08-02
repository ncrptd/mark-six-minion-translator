let txtInput = document.querySelector("#txt-input");
let submitBtn = document.querySelector("#submit-btn");
let output = document.querySelector("#ouput");

submitBtn.addEventListener("click", clickHandler);

function clickHandler() {
  console.log(txtInput.value);
}
