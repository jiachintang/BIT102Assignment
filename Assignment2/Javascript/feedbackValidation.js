// Extract all form inputs
const form = document.getElementById('form');
const fullName = document.getElementById('name');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

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
    checkName();
    checkTel();
    checkEmail();
    checkSubject();
    checkMessage();
}

function checkName() {
    // get values from inputs, trim() to remove whitespace
    const nameValue = fullName.value.trim();

    if(nameValue === '') {
        setErrorFor(fullName, 'Name cannot be blank');
    } else if(!/^[A-Za-z ]*$/.test(nameValue)){
        setErrorFor(fullName, 'Invalid characters');
    } else {
        setSuccessFor(fullName);
    }
};

function checkTel() {
    const telValue = tel.value.trim();

    if(telValue === '') {
        setErrorFor(tel, 'Mobile cannot be blank');
    } else if(!/^[0-9]*$/.test(telValue)){
        setErrorFor(tel, 'Invalid characters');
    } else {
        setSuccessFor(tel);
    }
};

function checkEmail() {
    const emailValue = email.value.trim();
    
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
};

function checkSubject() {
    const subjectValue = subject.value.trim();

    if(subjectValue === '') {
        setErrorFor(subject, 'Subject cannot be blank');
    } else {
        setSuccessFor(subject);
    }
};

function checkMessage() {
    const messageValue = message.value.trim();

    if(messageValue === '') {
        setErrorFor(message, 'Message cannot be blank');
    } else {
        setSuccessFor(message);
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