const heartButtons = document.querySelectorAll('.favorite-icon');

heartButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('filled');
        if (button.classList.contains('filled')){
            button.innerHTML = '&#10084;';
        } else {
            button.innerHTML = '&#9825;';
        }
    });
});

//   button.innerHTML = '&#9825;' === button.textContent ? '&#10084;' : '&#9825;';