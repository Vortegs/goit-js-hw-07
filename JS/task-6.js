const input = document.querySelector('#validation-input');



input.addEventListener('change', event => {
  if (event.target.value.length === Number(input.dataset.length)) {
    
    input.classList.add('valid');
  }  
  else {
    input.classList.remove('valid')
    input.classList.add('invalid');
  }
})

input.addEventListener('focus', () => {
  input.classList.remove('invalid', 'valid')
})