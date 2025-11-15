const heartButtons = document.querySelectorAll('.heart-btn');

heartButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = '♡' === button.textContent ? '❤' : '♡';
        button.classList.toggle('filled');
        console.log(button.textContent);
    });
});
