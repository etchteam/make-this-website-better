console.log("Connected!");
console.log("Hi, Thanks for inspecting my code!");

//Adding shadow to navbar on scroll
window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    nav.classList.add("add__shadow");
  } else {
    nav.classList.remove("add__shadow");
  }
});

//Display character counter
let textarea = document.getElementById("why");
let counterCharacters = document.querySelector(".counter__characters");

textarea.oninput = function () {
  counterCharacters.innerText = textarea.value.length;
  if (textarea.value.length >= 1000) {
    counterCharacters.classList.add("text--red");
  } else {
    counterCharacters.classList.remove("text--red");
  }
};

//Enable Submit when required fields filled
//This is not designed to prevent spam, just for styling
enableSubmit = function () {
  let isValid = true;
  for (const input of inputs) {
    if (input.value.trim() === "" || input.value === null) {
      isValid = false;
      break;
    }
  }
  btn.disabled = !isValid;
};

let inputs = document.querySelectorAll("input[required], textArea[required]");
let btn = document.querySelector('input[type="submit"]');
for (const input of inputs) {
  input.onkeyup = enableSubmit;
}
