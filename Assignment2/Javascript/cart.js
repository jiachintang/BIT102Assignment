//Calculation for cart page
window.onload = function () {
    CalculateItemsValue()
};

function CalculateItemsValue() {
    var total = 0;
    var total_items = 3;

    for (i = 1; i <= total_items; i++) {
        itemID = document.getElementById("qnt_" + i);
        subTotal = document.getElementById("sub_" + i);
        if (typeof itemID === 'undefined' || itemID === null) {
            alert("No such item - " + "qnt_" + i);
        } else {
            subTotal.innerHTML = "$" + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")) + ".00";
            total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        }
    }
    document.getElementById("ItemsTotal").innerHTML = "$" + total + ".00";
}

$("input[type=number]").on({
    keyup: function () {
        CalculateItemsValue();
    },
    click: function () {
        CalculateItemsValue();
    }
});

// Extract all form inputs
const form = document.getElementById('form');
const fullName = document.getElementById('name');
const tel = document.getElementById('tel');
const email = document.getElementById('email');

// Prevent submission, check for invalid input. If no errors, form is submitted
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    var invalid = form.getElementsByClassName('error').length;
    if (invalid === 0) {
        form.submit();
    }
});

function checkInputs() {
    checkName();
    checkTel();
    checkEmail();
}

function checkName() {
    // get values from inputs, trim() to remove whitespace
    const nameValue = fullName.value.trim();

    if (nameValue === '') {
        setErrorFor(fullName, 'Name cannot be blank');
    } else if (!/^[A-Za-z ]*$/.test(nameValue)) {
        setErrorFor(fullName, 'Invalid characters');
    } else {
        setSuccessFor(fullName);
    }
};

function checkTel() {
    const telValue = tel.value.trim();

    if (telValue === '') {
        setErrorFor(tel, 'Mobile cannot be blank');
    } else if (!/^[0-9]*$/.test(telValue)) {
        setErrorFor(tel, 'Invalid characters');
    } else {
        setSuccessFor(tel);
    }
};

function checkEmail() {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
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