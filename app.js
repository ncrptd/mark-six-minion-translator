let txtInput = document.querySelector("#txt-input");
let submitBtn = document.querySelector("#submit-btn");
let output = document.querySelector("#output");
let url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

submitBtn.addEventListener("click", clickHandler);

function errorHandler(error) {
  alert("Something wrong with the server please try again later");
}

function clickHandler() {
  if (!txtInput.value == "") {
    let text = url + "?text=" + txtInput.value;

    fetch(text)
      .then((response) => response.json())
      .then((json) => (output.innerText = json.contents.translated))
      .catch(errorHandler);
    txtInput.value = "";
  }
}
