let currentImage = 0;
const images = document.querySelectorAll('.gallery-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', () => {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    updateImage();
});

function updateImage() {
    images.forEach((image) => {
        image.style.display = 'none';
    });
    images[currentImage].style.display = 'block';
}