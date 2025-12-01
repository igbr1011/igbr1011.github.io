let current = '';
let previous = '';
let operator = null;

function handleKey(key) {
    const display = document.getElementById('display');

    if (key === 'C') {
        current = '';
    } else if (['/', '*', '+', '-'].includes(key)) {
        if (operator === null) {
            operator = key;
            previous = current;
            current = '';
        }
    } else if (key === '=') {
        let l = parseFloat(previous);
        let r = parseFloat(current);
        if (operator === '+') {
            current = (l + r).toString();
        } else if (operator === '-') {
            current = (l - r).toString();
        } else if (operator === '*') {
            current = (l * r).toString();
        } else if (operator === '/') {
            current = (l / r).toString();
        }
        operator = null;
    } else {
        current = current + key;
    }

    display.textContent = current;
}

// Allow keypress events as well
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9' || ['+', '-', '*', '/', 'C', '=', '.'].includes(key)) {
        handleKey(key);
    }
});
