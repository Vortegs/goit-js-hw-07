const formName = document.querySelector('#name-input');
const stringOut = document.querySelector('#name-output')
console.log(formName.value);



   
    formName.addEventListener('input', event => {
    if (formName.value = ''){
        stringOut.textContent = 'Незнакомец'
}
stringOut.textContent = '' ;
stringOut.textContent += event.data
})

    



// if (event.data != ''){
//     stringOut.textContent = '';
//     stringOut.textContent += event.data);
// }

