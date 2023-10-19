// Скрипт для анимации заголовка
const header = document.querySelector('header h1');
header.addEventListener('mouseover', () => {
    header.style.color = 'red';
});

// Скрипт для изменения текста при щелчке
const products = document.querySelectorAll('ul li');
products.forEach(product => {
    product.addEventListener('click', () => {
        product.textContent = 'Выбрано!';
    });
});

header.addEventListener('click', () => {
    const colors = ['#FF5733', '#33FFC0', '#334BFF', '#FF33A3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
