const registerForm = document.querySelector('form');
const why = document.querySelector('#why');
const whyReq = document.querySelector('.req-why span');
const submitButton = document.querySelector('button');
const namePattern = new RegExp(/^(?=.{3,50}$)[a-zA-Z]+/);
const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/);

document.addEventListener('keyup', () => {
    validateForm() ? submitButton.disabled = false : submitButton.disabled = true;
    whyReq.textContent = why.value.length;
});

let getFormData = () => {
    return {
        name: registerForm.elements['name'].value,
        email: registerForm.elements['email'].value,
        why: registerForm.elements['why'].value
    }
}

let validateForm = () => {
    let success = true;
    let data = getFormData();
    if (!namePattern.test(data.name)
        || !emailPattern.test(data.email)
        || data.why.length < 200
        || data.why.length > 2000) {
        success = false;
    }
    return success;
}

