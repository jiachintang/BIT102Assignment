// Extract all form inputs
const form = document.getElementById('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const nric = document.getElementById('nric');
const birthday = document.getElementById('birthday');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Get current date, to be used as max date input
today = new Date().toISOString().split("T")[0];
birthday.setAttribute("max", today)

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
    checkEmail();
    checkTel();
    checkNRIC();
    checkBirthday();
    checkPassword(); // check but also store successful input
    checkPassword2();   // passwordValue as parameter for comparison
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

function checkNRIC() {
    const nricValue = nric.value.trim();

    if(nricValue === '') {
        setErrorFor(nric, 'NRIC cannot be blank');
    } else if(!/^[A-Za-z0-9]*$/.test(nricValue)){
        setErrorFor(nric, 'Invalid characters');
    } else {
        setSuccessFor(nric);
    }
};

function checkBirthday() {
    const birthdayValue = birthday.value;

    if(birthdayValue == '') {
        setErrorFor(birthday, 'Birthday cannot be blank');
    } else if (birthdayValue > today){
        setErrorFor(birthday, 'Are you from the future?');
    } else {
        setSuccessFor(birthday);
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

function checkPassword2() {
    const password2Value = password2.value.trim();
    const passwordValue = password.value.trim();

    if(password2Value === '') {
        setErrorFor(password2, 'Confirm Password cannot be blank');
    } else if (password2Value !== passwordValue) {
        setErrorFor(password2, 'Passwords do not match');
    } else {
        setSuccessFor(password2);
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