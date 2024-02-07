document.addEventListener('DOMContentLoaded', function() {
    const okButton = document.getElementById('okButton');
    const noButton = document.getElementById('noButton');
    const catImage = document.getElementById('catImage');

    okButton.addEventListener('click', function() {
        catImage.src = 'smiling_cat.gif'; // Изменение изображения на улыбающегося котенка
    });

    noButton.addEventListener('mouseenter', function() {
        const randomX = Math.random() * (window.innerWidth - 200); // Случайная позиция по оси X
        const randomY = Math.random() * (window.innerHeight - 200); // Случайная позиция по оси Y
        noButton.style.left = randomX + 'px'; // Установка позиции по оси X
        noButton.style.top = randomY + 'px'; // Установка позиции по оси Y
    });
});