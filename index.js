const accept = document.querySelector("#accept");
const textbox = document.querySelector("#textbox");
const user = document.querySelector("#user");

accept.addEventListener("click", (e) => {
    e.preventDefault()
  textbox.value += user.value;
});
