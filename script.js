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
