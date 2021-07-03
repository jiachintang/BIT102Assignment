// Extract all form inputs
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');


// Prevent submission, check for invalid input. If no errors, form is submitted
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    var invalid = form.getElementsByClassName('error').length;
    if(invalid === 0) {
        form.submit();
    }
});

function checkInputs() {
    checkEmail();
    checkPassword();
};

function checkEmail() {
    // get values from inputs, trim() to remove whitespace
    const emailValue = email.value.trim();
    
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
};

function checkPassword() {
    const passwordValue = password.value.trim();

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }
};



function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-area div
    const small = formControl.querySelector('small');

    //add error inside small
    small.innerText = message;

    //add error class
    formControl.className = 'error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}