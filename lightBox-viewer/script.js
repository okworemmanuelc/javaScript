const lightBoxviewer = document.querySelector('.lightbox');
const images = document.querySelectorAll('.gallery-item');
const closeBtn = document.getElementById('close-btn');
const lightboxImage = document.querySelector('.lightbox-image');

images.forEach(image => {
    image.addEventListener('click', () => {

        lightboxImage.src = image.dataset.fullSrc;
        lightboxImage.alt = image.alt;
        if(lightBoxviewer.style.display === 'none'){
            lightBoxviewer.style.display = 'flex';
        } else {
            lightBoxviewer.style.display = 'none';
        }
    })
    });

closeBtn.addEventListener('click', () => {
    lightBoxviewer.style.display = 'none';
    lightboxImage.src = '';
    lightboxImage.alt = '';
});