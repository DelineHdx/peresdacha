// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для добавления случайного числа в таблицу
function addRandomNumber() {
    const table = document.getElementById("randomTable");
    const randomNumber = getRandomNumber(0, 99);
    
    const row = table.insertRow(-1);
    const cell = row.insertCell(0);
    cell.textContent = randomNumber;
}
