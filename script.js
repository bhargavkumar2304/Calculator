const screen = document.querySelector('.calculator-screen');
const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', (event) => {
    const button = event.target;
    const value = button.value;
    if (value >= '0' && value <= '9' || value === '.') {
        if (screen.value === '0') {
            screen.value = value;
        } else {
            screen.value += value;
        }
    }

    if (button.classList.contains('operator')) {
        screen.value += ' ' + value + ' ';
    }

    if (button.classList.contains('equal-sign')) {
        try {
            screen.value = eval(screen.value.replace(/×/g, '*').replace(/÷/g, '/'));
        } catch (error) {
            screen.value = 'Error';
        }
    }

    if (button.classList.contains('all-clear')) {
        screen.value = '';
    }
});
