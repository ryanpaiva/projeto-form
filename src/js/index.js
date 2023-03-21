const form = document.querySelector('form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.querySelector('button');

function validarNome(nome) {
    return !/^\d+$/.test(nome);
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarSenha(senha, url) {
    return senha.length >= 8 && !url.includes(senha);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validarNome(firstName.value)) {
        alert('Por favor, insira um nome válido.');
        firstName.focus();
        return;
    }

    if (!validarNome(lastName.value)) {
        alert('Por favor, insira um sobrenome válido.');
        lastName.focus();
        return;
    }

    if (!validarEmail(email.value)) {
        alert('Por favor, insira um email válido.');
        email.focus();
        return;
    }

    if (!validarSenha(password.value, window.location.href)) {
        alert('Por favor, insira uma senha válida (mínimo de 8 caracteres).');
        password.focus();
        return;
    }

    showLoadingButton();

    setTimeout(function () {
        hideLoadingButton();
        alert('Cadastro efetuado com sucesso!');
        form.reset();
    }, 3000);
});

function showLoadingButton() {
    button.classList.add('loading');
    button.disabled = true;
}

function hideLoadingButton() {
    button.classList.remove('loading');
    button.disabled = false;
}