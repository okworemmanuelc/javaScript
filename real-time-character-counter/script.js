const charCount = document.getElementById('char-count');
const textInput = document.getElementById('text-input');
const count = textInput.value.length;

textInput.addEventListener('input', () => {
    
    
    maxChars();
})

const maxChars = () => {
    const count = textInput.value.length;
    if (textInput.value.length >= 50) {
        textInput.value = textInput.value.slice(0, 50);
        charCount.textContent = `50/50`;
        charCount.classList.add('error');
    } else {
        charCount.textContent = `${count}/50`;
        charCount.classList.remove('error');
    }}