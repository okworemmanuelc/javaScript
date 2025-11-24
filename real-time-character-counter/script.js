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
        charCount.textContent = `Character Count: 50/50`;
        charCount.style.color = 'red';
    } else {
        charCount.textContent = `Character Count: ${count}/50`;
        charCount.style.color = '#006ba0';
    }}