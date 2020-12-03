const formName = document.querySelector('#name-input');
const stringOut = document.querySelector('#name-output')
console.log(formName.value);



function event(event) {

    if (formName.value) {
        stringOut.textContent = event.target.value
    } else stringOut.textContent = 'незнакомец'
};

formName.addEventListener('input', event);
