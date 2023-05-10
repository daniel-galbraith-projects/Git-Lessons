const clear = document.querySelector("#clear");
const textboxClear = document.querySelector("#textbox");

clear.addEventListener("click", (e) => {
  e.preventDefault();
  textboxClear.value = "";
});
