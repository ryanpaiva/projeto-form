const form = document.querySelector('form');
const button = document.querySelector('button');

form.setAttribute('method', 'POST');

function isNumeric(str) {
    return /^\d+$/.test(str);
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function removeError(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
}

function validateName(input) {
    const name = input.value.trim();
    if (isNumeric(name)) {
        showError(input, 'O nome não pode conter apenas números');
    } else {
        removeError(input);
    }
}

function validateForm() {
    const firstNameInput = document.querySelector('#first_name');
    const lastNameInput = document.querySelector('#last_name');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    validateName(firstNameInput);
    validateName(lastNameInput);

    if (!form.checkValidity()) {
        form.reportValidity();
        return false;
    }

    return true;
}

function showLoadingButton() {
    button.classList.add('loading');
    button.disabled = true;
}

function hideLoadingButton() {
    button.classList.remove('loading');
    button.disabled = false;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateForm()) {
        showLoadingButton();

        button.classList.add('loading');

        setTimeout(function () {
            button.classList.remove('loading');
        }, 3000);
    }
});