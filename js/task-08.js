const form = document.querySelector('.login-form')

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const {
        elements: { email, password }
    } = evt.currentTarget;
    
    if (email.value === '' || password.value === '') {
        return alert('Всі поля мають бути заповнені')
    }
    console.log(`${email.name}: ${email.value}, ${password.name}: ${password.value}`);
    evt.currentTarget.reset();
})
