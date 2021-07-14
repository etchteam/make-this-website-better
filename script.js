console.log('Connected!')

const submit = document.getElementById('submit')
const form = document.querySelector('.main')
const subheading = document.querySelector('.hero__subtitle')

const submitForm = () => {
  console.log('Submitted!')
  form.innerHTML = "Thanks for your interest - we'll be in touch!";
  form.classList.add("form-confirmation")
  subheading.innerHTML = ""
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  submitForm()
});



