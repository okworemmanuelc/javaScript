const lightBoxviewer = document.querySelector('.lightbox');
const images = document.querySelectorAll('.gallery-item');
const closeBtn = document.getElementById('close-btn');
const lightboxImage = document.querySelector('#lightbox-image');

images.forEach(image => {
    image.addEventListener('click', () => {

        lightboxImage.src = image.dataset.fullSrc;
        lightboxImage.alt = image.alt;
        lightBoxviewer.style.display = 'flex';
    })
    });

closeBtn.addEventListener('click', () => {
    lightBoxviewer.style.display = 'none';
    lightboxImage.src = '';
    lightboxImage.alt = '';
});

lightBoxviewer.addEventListener('click', () => {
        lightBoxviewer.style.display = 'none';
});