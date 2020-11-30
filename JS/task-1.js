const items = document.querySelectorAll('.item').length;
console.log(`В списке ${items} категории`);

const categories = document.querySelectorAll('h2');
categories.forEach(item => console.log(`Категория: ${item.textContent}`) + console.log(`Количество элементов: ${item.nextElementSibling.children.length}`));


