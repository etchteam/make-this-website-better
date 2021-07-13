console.log('Connected!')

const submit = document.getElementById('submit')
const form = document.querySelector('.main')

const submitForm = () => {
  console.log('Submitted!')
  form.innerHTML = "Thanks for your interest - we'll be in touch!";
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  submitForm()
});
