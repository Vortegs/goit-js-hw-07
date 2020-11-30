const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



ingredients.forEach(item => {
    const itemAdd = document.createElement('li');
    itemAdd.textContent = item;

const ul = document.querySelector('#ingredients')

    ul.append(itemAdd);
});






