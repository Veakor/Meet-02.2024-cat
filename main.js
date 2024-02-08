document.addEventListener('DOMContentLoaded', function() {
    const okButton = document.getElementById('okButton');
    const noButton = document.getElementById('noButton');
    const catImage = document.getElementById('catImage');
    let animationId; // Переменная для идентификатора анимации

    // Начнем анимацию котика сразу после загрузки страницы
    moveCatRight();

    okButton.addEventListener('click', function() {
        catImage.src = 'https://media.giphy.com/media/i4ldQWj8VNnbeGDqop/giphy.gif';
        moveCatRight(); // После нажатия кнопки, котик снова начнет бежать
    });

    // Позиционируем кнопку "NO" под кнопкой "OK" при загрузке страницы
    positionNoButton();

    noButton.addEventListener('mouseenter', function() {
        const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth); // Генерируем случайную координату X
        const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight); // Генерируем случайную координату Y
        noButton.style.left = randomX + 'px'; // Устанавливаем новую позицию кнопки по X
        noButton.style.top = randomY + 'px'; // Устанавливаем новую позицию кнопки по Y
    });

    function moveCatRight() {
        let currentPosition = -catImage.width; // Начальная позиция котика (с левого края)

        function step() {
            currentPosition += 4; // Шаг движения котика (увеличиваем currentPosition, чтобы кот бежал с лева на право)
            catImage.style.left = currentPosition + 'px'; // Обновляем позицию котика
            if (currentPosition >= window.innerWidth) { // Если котик вышел за правый край экрана
                cancelAnimationFrame(animationId); // Останавливаем анимацию
                catImage.style.left = -catImage.width + 'px'; // Возвращаем котика за левый край
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

    // Функция для позиционирования кнопки "NO" под кнопкой "OK"
    function positionNoButton() {
        const okButtonRect = okButton.getBoundingClientRect(); // Получаем координаты и размеры кнопки "OK"
        noButton.style.position = 'absolute'; // Устанавливаем абсолютное позиционирование для кнопки "NO"
        noButton.style.left = okButtonRect.left ; // Устанавливаем позицию по горизонтали, чтобы кнопка "NO" была слева от кнопки "OK"
        noButton.style.top = okButtonRect.bottom + 'px'; // Устанавливаем позицию по вертикали, чтобы кнопка "NO" была под кнопкой "OK"
    }

    // Вызываем функцию для перемещения кнопки "NO" при каждом нажатии на нее
    noButton.addEventListener('click', moveNoButton);
});