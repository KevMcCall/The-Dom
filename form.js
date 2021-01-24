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
if(mobile == " ") {
    printError('mobileErr', 'Please enter a valid Phone Number')
} 
    else {
        var regex= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(regex.test(mobile) === false) {
            printError('mobileErr', 'Please enter a valid 10-Digit Phone Number');
        } else {
            printError('mobileErr', " ")
            mobileErr = false;
        }
    }

// Validate Country //
if(country == "select") {
    printError('mobileErr', 'Please choose a country')
} 
    else {
        var regex= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(regex.test(mobile) === false) {
            printError('mobileErr', 'Please enter a valid 10-Digit Phone Number');
        } else {
            printError('mobileErr', " ")
            mobileErr = false;
        }
    }

// Validate Gender //
if(country == "select") {
    printError('mobileErr', 'Please choose a country')
} 
    else {
        var regex= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(regex.test(mobile) === false) {
            printError('mobileErr', 'Please enter a valid 10-Digit Phone Number');
        } else {
            printError('mobileErr', " ")
            mobileErr = false;
        }
    }


// Validate Hobbies //

// Prevent the form from being submitted if there are any errors //

if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
    return false;

} else {
    // Creating a string from input data for preview //
    var dataPreview = "You've entered the following details: \n" +
                        "Full Name: " + name + "\n" +
                        "Email Address: " + email + "\n" +
                        "Mobile Number: " + mobile + "\n" +
                        "Country: " + country + "\n" +
                        "Gender: " + gender + "\n";

    if(hobbies.length) {
        dataPreview += "Hobbies: " + hobbies.join(", ");
    }
// Display input data in a dialog box before submitting the form
alert(dataPreview);


}