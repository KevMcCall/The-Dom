// A function to display error message //

function printError(elemId, hintMsg) {

    document.getElementById(elemId).innerHTML = hintMsg;
}


// A function to validate the form //

function validateForm() {

// Retrieve all form elements //
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkBoxes = document.getElementsByTagName('hobbies[]');
    
    for (let i = 0; i<checkBoxes.length; i++) {
        if(checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value);
        }
    }
}

// Define variables with a default value //

var nameError = emailError = mobileError = countryError = genderError = false;

// Validate the Name Input //

if(name == " ") {
    printError('nameErr', 'Please enter a valid name')
} 
    else {
        var regex= /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) {
            printError('nameErr', 'Please enter a valid name');
        } else {
            printError('nameErr', " ")
            nameErr = false;
        }
    }

// Validate the Email Input //

if(email == " ") {
    printError('emailErr', 'Please enter a valid email')
} 
    else {
        var regex= /^[a-zA-Z\s]+$/;
        if(regex.test(email) === false) {
            printError('emailErr', 'Please enter a valid email');
        } else {
            printError('emailErr', " ")
            emailErr = false;
        }
    }

// Validate the Mobile Number //


// Validate Country //

// Validate Gender //

// Validate Hobbies //