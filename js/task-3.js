let input = document.querySelector('#name-input'),
    span = document.querySelector('#name-output');

input.addEventListener('input', (event => {
    let value = event.currentTarget.value.trim();
    span.textContent = value === '' ? 'Anonymous' : value;
}))