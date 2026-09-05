let form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    if (form.elements.email.value.trim() === '' || form.elements.password.value.trim() === '') {
        alert('All form fields must be filled in');
        return;
    }

    let obj = {
        email: form.elements.email.value.trim(),
        password: form.elements.password.value.trim()
    }

    console.log(obj);
    form.reset();
})