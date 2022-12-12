const textInput = document.getElementById('name-input');
const output = document.getElementById('name-output');

textInput.addEventListener('input', evt)

function evt(event){
    if (textInput.value === "") {
        return output.textContent = "Anonymous"
    } 
    {
        output.textContent = event.currentTarget.value;
    }
}