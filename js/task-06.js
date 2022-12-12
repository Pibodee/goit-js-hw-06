const textInput = document.querySelector('#validation-input');

textInput.addEventListener("focus", () => {
    textInput.classList.remove('invalid');
    textInput.classList.remove('valid');
})

textInput.addEventListener("blur", () => {if (Number(textInput.getAttribute("data-length")) === textInput.value.length) {
        textInput.classList.add('valid')
    } else {
        textInput.classList.add('invalid')
}})