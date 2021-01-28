const form = document.querySelector('form');

// Basic inline form validation
const inlineFormValidation = (form) => {
  const requiredInputs = [...form.querySelectorAll('input')].filter(
    (input) => input.required
  );
  const submitButton = form.querySelector('.form__submit');

  requiredInputs.forEach((input) => {
    formValidationOnInput(input);
    inputValidationOnInput(input);
    inputValidationOnBlur(input);
  });

  // Enable submit button if all required inputs are valid
  function formValidationOnInput(input) {
    input.addEventListener('input', (e) => {
      submitButton.disabled = !form.checkValidity();
    });
  }

  // Remove help on change if valid input
  function inputValidationOnInput(input) {
    const help = input.parentElement.parentElement.querySelector(
      '.form-group__help'
    );
    input.addEventListener('input', (e) => {
      input.checkValidity() ? (help.style.display = 'none') : null;
    });
  }

  // Display help on blur if invalid input
  function inputValidationOnBlur(input) {
    const help = input.parentElement.parentElement.querySelector(
      '.form-group__help'
    );
    input.addEventListener('blur', (e) => {
      help.style.display = input.checkValidity() ? 'none' : 'block';
    });
  }
};

// Set footer date
const setFooterDate = () => {
  const dateContainer = document.getElementById('date-container');
  dateContainer.innerText = new Date().getFullYear();
};

// Initialise

function init() {
  setFooterDate();
  inlineFormValidation(form);
}

init();
