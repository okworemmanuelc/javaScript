const themes = [{
    name: 'Light',
    message: 'Shine bright with the Light theme!',
    className: 'theme-light',
}, 
{
    name: 'Dark',
    message: 'Embrace the night with the Dark theme!',
    className: 'theme-dark',
}, 
{
    name: 'Solarized',
    message: 'Experience the calm of the Solarized theme!',
    className: 'theme-solarized',
}, 
{
    name: 'Ocean',
    message: 'Dive deep with the Ocean theme!',
    className: 'theme-ocean',
}];

const bodyElement = document.body;
const themeButton = document.getElementById('theme-switcher-button');
const themeDropdown = document.getElementById('theme-dropdown');
const themeMessage = document.getElementById('theme-message');
const messageElement = document.getElementById('theme-message');

themeButton.addEventListener('click', () => {
    themeDropdown.hidden = !themeDropdown.hidden;
    themeButton.setAttribute('aria-expanded', !themeDropdown.hidden);

    themeDropdown.innerHTML = '';
    themes.forEach(theme => {
        themeDropdown.innerHTML += `<li id="${theme.className}">${theme.name}</li>`;
    });
    
});

themeDropdown.addEventListener('click', (e) => {
    bodyElement.className = '';
    bodyElement.classList.add(e.target.id);
    const selectedTheme = themes.find(theme => theme.className === e.target.id);
    if (selectedTheme) {
        messageElement.textContent = selectedTheme.message;
    }
})