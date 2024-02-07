document.addEventListener('DOMContentLoaded', function() {
    const okButton = document.getElementById('okButton');
    const noButton = document.getElementById('noButton');
    const catImage = document.getElementById('catImage');
    let animationId; // Переменная для идентификатора анимации

    // Начнем анимацию котика сразу после загрузки страницы
    moveCatLeft();

    okButton.addEventListener('click', function() {
        catImage.src = '<i src=""https://giphy.com/stickers/minogames-on-my-way-omw-going-i4ldQWj8VNnbeGDqop">via GIPHY';
        moveCatLeft(); // После нажатия кнопки, котик снова начнет бежать
    });

    noButton.addEventListener('mouseenter', function() {
        const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth); // Генерируем случайную координату X
        const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight); // Генерируем случайную координату Y
        noButton.style.left = randomX + 'px'; // Устанавливаем новую позицию кнопки по X
        noButton.style.top = randomY + 'px'; // Устанавливаем новую позицию кнопки по Y
    });

    function moveCatRight() {
        let currentPosition = -catImage.width; // Начальная позиция котика (с правого края)

        function step() {
            currentPosition += 4; // Шаг движения котика
            catImage.style.left = currentPosition + 'px'; // Обновляем позицию котика
            if (currentPosition >= window.innerWidth) { // Если котик вышел за левый край экрана
                cancelAnimationFrame(animationId); // Останавливаем анимацию
                catImage.style.right = -catImage.width + 'px'; // Возвращаем котика за правый край
                moveCatRight(); // Начинаем анимацию снова
            } else {
                animationId = requestAnimationFrame(step); // Продолжаем анимацию
            }
        }

        catImage.style.position = 'absolute'; // Устанавливаем позиционирование котика
        catImage.style.bottom = '0'; // Располагаем котика внизу экрана
        animationId = requestAnimationFrame(step); // Запускаем анимацию
    }

    // Функция для перемещения кнопки "NO"
    function moveNoButton() {
        const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth); // Генерируем случайную координату X
        const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight); // Генерируем случайную координату Y
        noButton.style.left = randomX + 'px'; // Устанавливаем новую позицию кнопки по X
        noButton.style.top = randomY + 'px'; // Устанавливаем новую позицию кнопки по Y
    }

    // Вызываем функцию для перемещения кнопки "NO" сразу после загрузки страницы
    moveNoButton();

    // Вызываем функцию для перемещения кнопки "NO" при каждом нажатии на нее
    noButton.addEventListener('click', moveNoButton);
});