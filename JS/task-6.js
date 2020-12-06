const input = document.querySelector('#validation-input');

input.addEventListener('blur', validInput);

function validInput() {
    if (input.value.length < input.dataset.length ||
        input.value.length > input.dataset.length
    ) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    } else {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
}