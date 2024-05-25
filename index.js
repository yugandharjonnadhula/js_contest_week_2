document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const clearButton = document.getElementById('clear');
    const error = document.getElementById('error');

    let count = 0;

    incrementButton.addEventListener('click', () => {
        count++;
        counter.textContent = count;
        error.classList.add('hidden');
        if (count > 0) {
            clearButton.style.display = 'block';
        }
    });

    decrementButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
            counter.textContent = count;
            error.classList.add('hidden');
            if (count === 0) {
                clearButton.style.display = 'none';
            }
        } else {
            error.classList.remove('hidden');
        }
    });

    clearButton.addEventListener('click', () => {
        count = 0;
        counter.textContent = count;
        clearButton.style.display = 'none';
        error.classList.add('hidden');
    });
});

