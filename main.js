document.addEventListener('DOMContentLoaded', function() {
    const okButton = document.getElementById('okButton');
    const noButton = document.getElementById('noButton');
    const catImage = document.getElementById('catImage');

    okButton.addEventListener('click', function() {
        catImage.src = 'smiling_cat.gif';
        const catImage = new Image();
    catImage.src = 'http://hoppip.tumblr.com/post/27010295505/fluffy';
    catImage.alt = 'Fluffy Cat';
    catContainer.appendChild(catImage); 
    });

    noButton.addEventListener('mouseenter', function() {
        const randomX = Math.random() * (window.innerWidth - 600); 
        const randomY = Math.random() * (window.innerHeight - 600);
        noButton.style.position = 'absolute'; 
        noButton.style.left = randomX + 'px'; 
        noButton.style.top = randomY + 'px'; 
    });
});