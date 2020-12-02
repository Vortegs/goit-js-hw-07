let value = 0;

function decrement() {
    value -=1;

    render();
};

function increment() {
    value += 1;

     render();
}

function render() {
    htmlValue.textContent = value;
}

const decrBtn = document.querySelector('[data-action="decrement"]')
const incrBtn = document.querySelector('[data-action="increment"]')
const htmlValue = document.querySelector('#value')

decrBtn.addEventListener('click', decrement);
incrBtn.addEventListener('click', increment);

