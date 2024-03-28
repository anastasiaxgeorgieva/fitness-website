// input fields
const password = document.getElementById('psw')

// alert fields
const lengthAlert = document.getElementById('lenght-alert')
const lowercaseAlert = document.getElementById('lowercase-alert')
const capitalLetterAlert = document.getElementById('capital-alert')
const numberAlert = document.getElementById('number-alert')

// form
const inputForm = document.getElementById('submit-form')

// form message field
const formMessage = document.getElementById('form-message')

// passsword validation function
password.onkeyup = function () {
    // show form message container to check validation
    if (password.value.length == 0) {
        formMessage.classList.remove("d-block");
        formMessage.classList.add("d-none");
    } else {
        formMessage.classList.remove("d-none");
        formMessage.classList.add("d-block");
    }

    // Validate length
    if (password.value.length >= 8) {
        lengthAlert.classList.remove("d-block");
        lengthAlert.classList.add("d-none");
    } else {
        lengthAlert.classList.add("d-block");
        lengthAlert.classList.remove("d-none");
    }

    // validate lower case letters
    var lowerCaseLetters = /[a-z]/g;
    if (password.value.match(lowerCaseLetters)) {
        lowercaseAlert.classList.add("d-none");
        lowercaseAlert.classList.remove("d-block");
    } else {
        lowercaseAlert.classList.remove("d-none");
        lowercaseAlert.classList.add("d-block");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (password.value.match(upperCaseLetters)) {
        capitalLetterAlert.classList.remove("d-block");
        capitalLetterAlert.classList.add("d-none");
    } else {
        capitalLetterAlert.classList.remove("d-none");
        capitalLetterAlert.classList.add("d-block");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (password.value.match(numbers)) {
        numberAlert.classList.remove("d-block");
        numberAlert.classList.add("d-none");
    } else {
        numberAlert.classList.remove("d-none");
        numberAlert.classList.add("d-block");
    }

}

function submitInfo(e) {
    alert('Successfully submitted')
}

inputForm.addEventListener('submit', submitInfo)