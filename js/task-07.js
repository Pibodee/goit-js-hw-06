const sizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text')

sizeControl.addEventListener('input', (evt) => {
    const size = evt.currentTarget.value;
    text.style.fontSize = `${size}px`
})