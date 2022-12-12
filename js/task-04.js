let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');


increment.addEventListener('click', incrementClickHandler);
function incrementClickHandler() {
    updateDisplay(++counterValue)
}


decrement.addEventListener('click', decrementClickHandler);
function decrementClickHandler() {
    updateDisplay(--counterValue)
}

function updateDisplay(value) {
    document.getElementById('value').innerHTML = value;
}


