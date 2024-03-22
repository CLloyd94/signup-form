function checkPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password === confirmPassword) {
        console.log('Create account successful');
    } else {
        console.log('Passwords don\t match');
    }
}

const submitButton = document.querySelector("button");
    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            checkPassword();
        });
    } else {
        console.error("Button not found");
    }